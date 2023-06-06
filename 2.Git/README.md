Branch Master não se faz commit
Branch Auxiliar que receberá os commits


### Criando branch GitFlow

Inicializa o git com o git flow
```
git flow init
```

### Nova Feature

Criando nova feature chamada welcome
```
git flow feature start welcome
```

### Fazendo Merge (Finalizando feature)

Faz o merge na develop da feature feature/welcome
```
git flow feature finish welcome
```

### Gerando release