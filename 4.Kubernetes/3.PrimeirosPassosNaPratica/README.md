
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

```
kubectl get replicaset
```

### Estrutura de Hierarquia do k8s
Deployment
  ReplicaSet
    Pod