
```
docker-compose up -d
```

```
docker exec -it consulserver01 sh
```

```
mkdir /etc/consul.d
mkdir /var/lib/consul
ifconfig
consul agent -server -bootstrap-expect=3 -node=consulserver01 -bind 172.27.0.3 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

```
consul members
```

```
docker exec -it consulserver02 sh
```

```
mkdir /etc/consul.d
mkdir /var/lib/consul
ifconfig
consul agent -server -bootstrap-expect=3 -node=consulserver02 -bind 172.27.0.2 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

```
consul join 172.27.0.2
```

```
docker exec -it consulserver03 sh
```

```
mkdir /etc/consul.d
mkdir /var/lib/consul
ifconfig
consul agent -server -bootstrap-expect=3 -node=consulserver03 -bind 172.27.0.4 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```


```
docker-compose up -d
```


```
docker exec -it consulclient01 sh
```

```
mkdir /var/lib/consul
ifconfig
consul agent -bind=172.27.0.5 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

```
docker exec -it consulclient01 sh
consul join 172.27.0.4
```


Cria o arquivo services.json dentro de clients/consul01 e dá reload no client
```
consul reload
```

```
apk -U add bind-tools
dig @localhost -p 8600 nginx.service.consul
dig @localhost -p 8600 web.nginx.service.consul
curl localhost:8500/v1/catalog/services
consul catalog nodes -service nginx
```

```
docker-compose up -d
```

```
docker exec -it consulclient02 sh
consul agent -bind=172.27.0.6 -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=172.29.0.5 -retry-join=172.29.0.2
```

```
docker exec -it consulclient01 sh
dig @localhost -p 8600 nginx.service.consul
```

Corrigindo os Health check do nginx

```
mkdir /usr/share/nginx/html -p
apk add vim
vim /etc/nginx/http.d/default.conf

server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /usr/share/nginx/html;

        # You may need this to prevent return 404 recursion.
        location = /404.html {
                internal;
        }
}
```

```
vim /usr/share/nginx/html/index.html
> Hello
```

```
nginx -s reload
```



Utiliza as configurações do server.json de cada pasta de cada server
```
docker-compose up -d
docker exec -it consulserver01 sh
consul agent -config-dir=/etc/consul.d
```


```
docker-compose up -d
docker exec -it consulserver02 sh
consul agent -config-dir=/etc/consul.d
```


```
docker-compose up -d
docker exec -it consulserver03 sh
consul agent -config-dir=/etc/consul.d
```

Copia achave abaixo e joga no encrypt do arquivo server.json
```
docker exec -it consulserver03 sh
consul keygen
> U0qt/QjqVzsYSqcwbCD6g/M0FkFM81sEKp0JyRw7wD8=
```

