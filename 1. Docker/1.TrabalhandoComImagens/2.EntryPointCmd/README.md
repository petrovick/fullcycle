### Building Image

```
docker build -t petrovick/hello:latest .
```

### Executar o container

Executar o container com bash, entrando no container para executar comandos 
```
docker run -it petrovick/hello bash
```


## ENTRYPOINT VS CMD

CMD pode ser usbstituido ex:
```
docker run --rm petrovick/hello echo "oi"
```
Substitui o CMD ["echo", "hello world"]


Entrypoint é sempre fixo, sempre executa e não é substituido