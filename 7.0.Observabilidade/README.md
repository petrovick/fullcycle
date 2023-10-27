# Observabilidade


## Elastic Local

### Instação

Criar a network necessária para docker-compose
```
docker network create observability
```

Para instalar os containers na máquina local, dentro dentro da pasta CodigoFonte e rode o seguinte comando
```
docker-compose up -d
```

Para visualizar se há logs dentro do elasticsearch e saber se está rodando normalmente basta verificar os logs
```
docker logs elasticsearch
```

```

```


### Elastic Cloud

Username and password
```
elastic
p0MslivNWBXObMIx24jWHd2T
```