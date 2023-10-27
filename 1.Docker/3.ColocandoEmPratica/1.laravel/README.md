### 

```
docker build -t petrovick/laravel:latest .
```

```
docker run --rm -d --name laravel -p 8000:8000 petrovick/laravel
```

```
docker run --rm -d --name laravel -p 8001:8001 petrovick/laravel --host=0.0.0.0 --port=8001
```