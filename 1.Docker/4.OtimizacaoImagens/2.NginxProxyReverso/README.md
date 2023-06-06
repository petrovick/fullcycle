
#### Construindo nginx

```
docker build -t petrovick/nginx:prod . -f Dockerfile.prod
```


### Construindo Serviço Laravel


```
cd ../1.laravel/ && docker build -t petrovick/laravel:prod .
```

## Agora basta rodar

### nginx
```
docker run -d --network laranet --name nginx -p 80:80 petrovick/nginx:prod
```

### Laravel
```
cd ../1.laravel/ && docker run -d --network laranet --name laravel petrovick/laravel:prod
```
