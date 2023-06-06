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

```
git flow release start 0.1.0
```

```
git flow feature start contact
```

```
git flow release finish 0.1.0
```

```
git flow hotfix start contact
```

```
git flow hotfix finish contact
```