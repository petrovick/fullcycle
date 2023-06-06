
### Testando network

Por padrão os dois abaixo vão ser criados como network bridge
```
docker run -d -it --name ubuntu1 bash
docker run -d -it --name ubuntu2 bash
```

Entrando no dentro do container como foi criado como dettach, é possível pingar apenas pelo IP e não pelo domínio, ubuntu2, já que não tem DNS resolvendo nomes.
```
docker attach ubuntu1
```

Para excluir as duas máquinas 
```
docker rm ubuntu1
docker rm ubuntu2
```

### Criando network

```
docker network create --driver bridge minharede
```

```
docker run -dit --name ubuntu1 --network minharede bash
docker run -dit --name ubuntu2 --network minharede bash
```

```
docker exec -it ubuntu1 bash
```

Agora é possível ping pelo nome de domínio
```
ping ubuntu2
```



### Logando container na mesma rede


```
docker run -dit --name ubuntu3 bash
```

Não é possível fazer o ping
```
ping ubuntu2
```

```
docker network connect minharede ubuntu3
```

Agora sim é possível fazer o ping
```
ping ubuntu2
```
