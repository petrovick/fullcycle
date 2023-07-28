
# Rodando
Criando recursos da AWS

Deve-se primeiro configurar o aws cli com o usuário que irá criar os recursos na AWS.

Apos isso instalar o aws iam authenticator [https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html].
Para saber seestá instalado, deve-se rodar o comando abaixo.
```
aws-iam-authenticator --help
```

Aplicando alterações
```
terraform apply
```

Com o kubeconfig gerado, para acessar o k8s a partir da máquina, basta copar o arquivo de configuração para dentro do k8s da sua máquina
```
cp kubeconfig ~/.kube/config
kubectl get nodes
```


## Módulos

Quando os módulos não existem, basta rodar o seguinte comando para o terraform reconhecer os módulos
```
terraform init
```


## TFState Remoto

Seta o valor de terraform.backend com o bucket criado no s3(deve-se criar o bucket primeiro via console na AWS).
Após isso, rode o comando para fazer efeito.
```
terraform init
```


## Destroy

Para apagar tudo, basta rodar
```
terraform destroy
```
