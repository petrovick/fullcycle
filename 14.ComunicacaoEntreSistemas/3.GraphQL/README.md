

```
docker build -t graphgo .
docker run --rm -it -v $(pwd)/:/usr/src/app graphgo bash
```

```
go mod tidy
exit
```

```
docker run -p 8080:8080 --name graphgo graphgo
```
