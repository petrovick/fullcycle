## Problema inicialização kubernetes k8s (kind)

O erro se trata da não inicialização do control-plane do contexto do kind

Se você enfrente o problema de inicialização do kubernetes k8s, por exemplo
```
xina@DESKTOP-745JNNN:~/FullCycle$ kubectl cluster-info

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
The connection to the server 127.0.0.1:41817 was refused - did you specify the right host or port?
```

Pega os cluster que você tem na máquina
```
xina@DESKTOP-745JNNN:~/FullCycle$ kind get clusters
kong-fc
```

Tenta pegar o kubeconfig do kong-fc(que é o cluster que quero iniciar)
```
xina@DESKTOP-745JNNN:~/FullCycle$ kind get kubeconfig --name kong-fc
ERROR: failed to get cluster internal kubeconfig: command "docker exec --privileged kong-fc-control-plane cat /etc/kubernetes/admin.conf" failed with error: exit status 1
Command Output: Error response from daemon: Container 9c5e8e965ab3bbc4fe468e02e91a1b166449d451976352479249a7091b12c890 is not running
```

O erro se trata da não inicialização do control-plane do contexto do kind
Com o erro falando qual Container não iniciou, basta inicial-lo
```
xina@DESKTOP-745JNNN:~/FullCycle$ docker start 9c5e8e965ab3bbc4fe468e02e91a1b166449d451976352479249a7091b12c890
9c5e8e965ab3bbc4fe468e02e91a1b166449d451976352479249a7091b12c890
```


# Argo

```
#!/bin/bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```


## Pega o Secret do argo

```
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d; echo
VMaleHbpOeRIlrjA
```

## Port forward

```
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

## Criando os serviços

```
kubectl apply -f 6.ApiGatewayAndKong/CodigoFonte/infra/argo-apps/players.yaml -n argocd
```


## Teste carga

### Instala o metric server

```
#!/bin/bash
helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server/
helm upgrade --install metrics-server metrics-server/metrics-server --namespace kube-system --set args={--kubelet-insecure-tls}
```

### HPA

```
kubectl apply -f 6.ApiGatewayAndKong/CodigoFonte/infra/kong-k8s/misc/apps/hpa/ --recursive -n bets
```


Acompanhar

```
watch -n 0.5 kubectl get horizontalpodautoscaler -n bets
```

Delete o prometheus que foi instalado antes para fazer o monitoring

```
helm delete prometheus-stack -n monitoring
```

## Argo keycloak

Pegando senha do painel administradtivo https://localhost:8080 (Usuário admin)
```
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```
