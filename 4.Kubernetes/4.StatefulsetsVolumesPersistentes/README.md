# Stateful e volumes persistentes

### Modos de acesso

ReadWriteOnce: Mais comum, Pode gravar, ler, desde que esteja dentro do mesmo Node
ReadWriteMany: Menos comum e mais complicado de lidar, pode ser lido/escrito por diversos nodes mas tem que tomar cuidado em dar lock no arquivo 
ReadOnlyMany: 


### Criando Volume persistente

```
kubectl apply -f ./k8s/persistent.volume.claim.yaml 
```

Listar Volumes persistentes
```
kubectl get pvc
```

Após isto basta adicionar no deployment no arquivo deployment.yaml
```
[...]
          volumeMounts:
            - mountPath: "/pvc"
              name: node-server-volume
              readOnly: true
[...]
      volumes:
        - name: node-server-volume
          persistentVolumeClaim:
            claimName: node-server-pvc
[...]
```

Para aplicar
```
kubectl apply -f ./k8s/deployment.yaml
```

Basta entrar dentro do container, escrever um arquivo no diretorio montado desse container e entrar dentro de outro container diferente e ver que o diretorio foi mapeado corretamente, e o arquivo vai existir nesse outro container, que foi criado no container diferente.



## Stateful

necessita guardar dados, ordem de criação, ordem de remoção, garantia de dados persistentes, reattach o volume no pod recriado por índice.

Muito usado para bancos de dados

```
kubectl apply -f ./k8s/statefulset.yaml
```

```
kubectl scale statefulset mysql --replicas=5
```

### Headless service 

É um serviço criado que não cria IP interno dentro da aplicação e é apenas um apontamento de DNS, ex: mysql-service-master -> aponta para o pod específico por ser statefulset

O nome do serviço (service.mysql.headless.yaml metadata.name) deve ser o mesmo nome setado no stateful serviceName(statefulset.yaml spec.serviceName)

```
kubectl get storageclass
```

Listando discos permanentes
```
kubectl get pvc
```

