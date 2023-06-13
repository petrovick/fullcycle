## Subind uma versão diferente do sistema

```
docker build -t petrovick/hello-node:v3 .
docker push petrovick/hello-node:v3
```

## Criando Cluster
```
kind create cluster
```

### Conectando ao servidor k8s do Kind
```
kubectl cluster-info --context kind-kind
```

## Cria o Cluster com base no arquivo
kind create cluster --config=kind.yaml --name=fullcycle


### Lista todos os Clusters da máquina
```
kubectl config get-clusters
```


### Seleciona um Cluster da máquina para trabalhar
```
kubectl config use-context kind-fullcycle
```


### Redirecionando porta sem network no kubernetes

```
kubectl port-forward pod/node-server 3000:3000
```


### ReplicaSet

Appying and creating replicaset according to the replicaset.yaml file
```
kubectl apply -f ./k8s/replicaset.yaml
```

Listing ReplicaSets
```
kubectl get replicaset
```

Delete ReplicaSet
```
kubectl delete replicaset node-server
```


## Deployment

### Estrutura de Hierarquia do k8s
Deployment
  ReplicaSet
    Pod

O deployment quando reconhece uma nova ersão, ele "mata" o ReplicaSet, que consequentemente mata os pods desse replicaset. Após isso sobe um novo replicaset com a nova versão e dessa forma não tenho duas versões do software rodando ao mesmo tempo.

### Deploy Deployment

Applying change
```
kubectl apply -f ./k8s/deployment.yaml
```

Describing pod
```
kubectl describe pod node-server-ffff697d8-4bzvd
```

### Voltar versão

Listar versões
```
kubectl rollout history deployment node-server
```

Voltando para a última versão
```
kubectl rollout undo deployment node-server
```

Voltando para versão específica
```
kubectl rollout undo deployment node-server --to-revision=1
```


## Service

É utilizado para acessar a aplicação (Parte de rede)
O próprio service atua como um load balancer

Rodando o arquivo service.yaml
```
kubectl apply -f ./k8s/service.yaml
```

Listando Services
```
kubectl get services
```

Para acessar o serviço
```
kubectl port-forward svc/node-server-service 8000:3000
```

### Port vs targetPort

A diferença entre port e targetPort.
targetPort: é a porta do container
port: é a porta do service

Atenção eu tenho a porta do port-forward, do service e do container

## API do Kubernetes
Acessando a API

## Tipos de Services

### ClusterIP

Gera IP interno do kubernetes e com o port-forward conseguimos fazer o acesso externo para dentro do kubernetes

### NodePort

Expõe uma porta para fora do cluster.
Gera uma porta e coloca a porta para todos os nodes do cluster daquele serviço.
Vai ser raro colocar NodePort em produção, já que ele é arcaico)antigo)

Auxilia o acesso de forma externa.

Node 1: >30000 && <32767
Node 2: 30001
Node 3: 30001
Node 4: 30001

Rodando o arquivo "kubectl apply -f ./k8s/service.nodeport.yaml", todo serviço que bater na porta 80 vai ser redirecionado para os pods da porta 8000

### LoadBalancer
Gera automaticamente um IP externo.
Localmente o IP externo não é gerado(<pending>) porque não é um provedor de núvem, porém numa Amazon, Google, Digital Ocean da vida iria ser gerado o IP externo.
O LoadBalancer também gera um NodePort com o IP exclusivo do serviço

## Testando Variável de ambiente

Subindo uma versão diferente do sistema com as mudanças e leitura do process.env

```
docker build -t petrovick/hello-node:v4 .
docker push petrovick/hello-node:v4
```

Aciona o deployment
```
kubectl apply -f ./k8s/deployment.yaml
```

Expondo a porta
```
kubectl port-forward svc/node-server-service 9000:80
```

## Variaveis de ambiente com ConfigMap

Alterando o configMap não é garantido a mudança no deployment, neste caso é preciso recriar o deployment para fazer efeito nas mudanças

```
kubectl apply -f ./k8s/configmap-env.yaml
kubectl apply -f ./k8s/deployment.yaml
```

## Debugging

Para entrar dentro de um container

```
kubectl get pods
```

Com o nome do pod, node-server-8f9984954-9zklf, execute o comando abaixo
```
kubectl exec -it node-server-8f9984954-9zklf -- /bin/sh
kubectl exec -it node-server-8f9984954-9zklf -- bash
```

Para pegar logs de um container
```
kubectl logs node-server-8f9984954-9zklf
```




## Secret

É onde ficam as variaveis de ambiente mais confidenciais ex:USER e PASSWORD, ficam em base64

```
kubectl apply -f ./k8s/secret.yaml
kubectl apply -f ./k8s/deployment.yaml
```


## Probes

### liveness
Verifica se a aplicação está saudável, e reinicia de acordo com o configurado

```
kubectl apply -f ./k8s/deployment.yaml && watch -n1 kubectl get pods
```


### readiness

Fala quando a aplicação está pronta para subir


### Resumo readiness vs liveness

Em tese, o readiness desativa os containers e o liveness reativa o container.

O readiness só vai falar que o container está pronto após "readinessProbe.initialDelaySeconds" e a cada "readinessProbe.periodSeconds" ele tenta novamente, porém nesse meio tempo o liveness pode estar matando o container para subir novamente.

A pegadinha é: O liveness reiniciando o container e o readiness nunca está pronto

### Simulando o loop de reinicialização

deployment.yaml
```
readinessProbe:
  httpGet:
    path: /healthz
    port: 8000 # Porta do Container
  periodSeconds: 3
  failureThreshold: 1 # Quantas vezes precisa falar que minha aplicação não está pronta
  initialDelaySeconds: 10 # Aguarda x segundos até começar a verificar se o container está pronto

livenessProbe:
  httpGet:
    path: /healthz
    port: 8000 # Porta do Container
  periodSeconds: 5
  failureThreshold: 1 # Quantas vezes tem que dar erro para reiniciar o serviço
  timeoutSeconds: 1 # Tempo de resposta da requisição para o container estar OK (Tempo de resposta do healthcheck)
  successThreshold: 1 # Quantas vezes tem que testar para a aplicação estar OK
  initialDelaySeconds: 15 # Aguarda x segundos até começar a verificar se o container está pronto
```

server.js
```
app.get('/healthz', (req, res) => {
  const durationSeconds = (Date.now() - startedAt) / 1000;
  
  if(durationSeconds < 10 || durationSeconds > 30) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Duration: ${durationSeconds}\n`);
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`OK!\n`);
});
```

### Solução do readiness e liveness -> startupProbe

A partir da versão 1.16 do k8s, funciona como se fosse o readiness mas apenas no processo de inicialização, após ficar pronto o readiness e liveness entram em ação.
Atenção com a questão do initialDelaySeconds, porque o startupProbe só tenta fazer o processo uma vez dentro do processo e caso falhe o processo entra em loop novamente.
Ex: periodSeconds: 3 e initialDelaySeconds: 10 vai tentar por pelo menos 30 segundos

# ATENÇÃO: LEMBRANDO QUE O LOOP ACONTECE PORQUE A APLICAÇÃO ESTÁ SEMPRE RETORNANDO 500 APÓS 30s.
  

## Metrics Server

O metrics server já costuma vir instalado nas instâncias gerenciadas das cloud providers (EKS, AKS, ...etc)
Acompanha quanto de recurso cada aplicação está consumindo
Exige TLS para traballhar e localmente como teste iremos desabilitar.

### Instalando

Baixa o arquivo: https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

e adiciona 
```
- --kubelet-insecure-tls
```

nos args do "kind: Deployment" do arquivo, linha 115.

```
kubectl get apiservices
```

É importante o AVAILABLE estar como TRUE
```
v1beta1.metrics.k8s.io                 kube-system/metrics-server   True        119s
```

### Recursos utilizados
Com uma aplicação rodando com sucesso


Buscar pods
```
kubectl get pods
```

Verificando recurso do pod
```
kubectl top pod node-server-5b69594b47-grfq6

---------------------------------------------------------
NAME                           CPU(cores)   MEMORY(bytes)   
node-server-5b69594b47-grfq6   1m           16Mi
```


## Escalando com HPA - Horizontal Pod Auto Scaling

Possui métricas customizadas
Apenas o HPA de CPU vai funcionar, o k8s possui outras maneiras de criar métricas personalizadas para juntar com o HPA e realizar melhoria de memória

```
kubectl apply -f ./k8s/hpa.yaml 
```
```
kubectl get hpa
```


## Teste de stress

Executar o teste
A partir do k8s 1.18+, não precisa do --generator
```
kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://node-server-service/healthz"
```

Com o k8s <1.8
```
kubectl run -it --generator=run-pod/v1 fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://node-server-service/healthz"
```
