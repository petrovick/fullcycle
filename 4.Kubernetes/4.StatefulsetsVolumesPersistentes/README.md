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