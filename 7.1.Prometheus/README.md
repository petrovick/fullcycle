# Prometheus

## Tipos de Métricas

Counter: Valor incremental
Gauge: Valor pode possuir variações com o tempo
Histogram: Distribuição de frequência
Summary: Muito similar ao Histogram

### Métricas: Counter
Prometheus consegue absorver falhas no caso esse número tenha um eventual reset, por erro no sistema por exemplo.

### Métricas: Gauge
Métrica que pode aumentar, diminuir e/ou estabilizar

###  Métricas: Histogram
Consegue agregar valores, exemplo, pessoas de 18 - 24 anos fez x compras, de 25 - 30 fizeram y compras.

### Métricas: Summary
A diferença dele pro histogram é que: os valores são calculados no servidor de aplicação e não no prometheus.
Ex: request duration
De forma geral é muito mais comum utilizar o Histogram

## PromQL

Prometheus Query Language (SQL do Prometheus)


## Rodando o Prometheus

```
cd CodigoFonte
docker-compose up -d 
```