
Acessando o keycloak
```
kubectl port-forward svc/keycloak 8080:80 -n iam
```

## Problema inicialização

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
