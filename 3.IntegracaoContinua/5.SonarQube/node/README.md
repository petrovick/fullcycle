## Instalando o SonarQube

```
docker run -d --network minharede --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

## Executando
Acessar localhost:9000 e configurar um projeto
Após configurado basta enviar os dados via sonar scanner


### Via sonar-scanner
```
sonar-scanner \
  -Dsonar.projectKey=node-test \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=sqp_036537d17f1973f9b4550181660fd8a8ac333cca
```

### Via Docker

HOST_URL
http://host.docker.internal:9000
http://sonarqube:9000

docker run --rm -e SONAR_HOST_URL="http://host.docker.internal:9000"  -e SONAR_SCANNER_OPTS="-Dsonar.projectKey=node-test" -e SONAR_TOKEN="sqp_036537d17f1973f9b4550181660fd8a8ac333cca" -v ".:/usr/src" sonarsource/sonar-scanner-cli



## Building Image

### Docker && Docker Compose
```
docker build -t petrovick/node-sonar .
```

```
docker-compose up
```

```
docker-compose run -w /usr/src/app node-sonar /bin/bash
```
