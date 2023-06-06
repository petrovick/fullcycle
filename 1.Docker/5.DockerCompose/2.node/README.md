
```
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash
```

### Buildar
```
docker build -t petrovick/hello-express .
```

### Testar
```
docker run -p 3000:3000 petrovick/hello-express
```

### Publicar

```
docker push petrovick/hello-express
```