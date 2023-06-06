
### Testando network Interno para Host

É possível acessar a partir da máquina docker o host através da URL abaixo.

```
docker run --rm -it --name ubuntu ubuntu bash
root@9a913456de20:/# curl http://host.docker.internal:<PORTA DO HOST>
```