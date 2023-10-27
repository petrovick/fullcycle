```
docker-compose up -d
```

```
docker exec -it appproduct bash
```

'''
touch db.sqlite
sqlite3 db.sqlite
> create table products(id string, name string, price float, status string);
> .tables
'''

```
apt-get update
mockgen -destination=application/mocks/applicatin.go -source=application/product.go
```

Instala todos os pacotes necessários
```
go mod tidy
```