

```
docker build -t graphgo:latest .
docker run --rm -it -v $(pwd)/:/usr/src/app graphgo bash
ou
docker run --rm -it graphgo:latest bash
```

```
go mod tidy
exit
```

```
docker run -p 8080:8080 --name graphgo graphgo
```
