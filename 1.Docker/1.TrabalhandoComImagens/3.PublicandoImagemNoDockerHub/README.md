### Building Image

```
docker build -t petrovick/nginx-fullcycle .
```

### Executar o container

Executar o container com bash, entrando no container para executar comandos 
```
docker run --rm -d -p 80:80 petrovick/nginx-fullcycle
```


### Enviando para DockerHub

```
docker login
```

CMD pode ser usbstituido ex:
```
docker push petrovick/nginx-fullcycle
```
