# Ansible vs Terraform

Ansible -> Mudar hostname, instalar vim, fazer ajuste dentro de cada máquina.
Terraform -> Ideal para criar as estruturas em cloud, ex: criar 50 servidores com essas VPCs, com esses segurity groups, etc.


## Terraform

### Instalação

https://developer.hashicorp.com/terraform/downloads


## HCL

Hashicorp Configuration Language


## Iniciando com terraform

```
terraform init
```

Criar plano de ação para chegar no resultado final(que eu quero).
```
terraform plan
```

Aplicando o conteudo
```
terraform apply
```

Pegando do ambiente (deve apagar do arquivo terraform.tfvars)
```
export TF_VAR_conteudo="veio de ambiente"
```

Passando variaveis via linha de comando
```
terraform apply -var "conteudo=xpto"
```

'terraform.tfvars' pega automaticamente as variaveis, mas se o nome do arquivo for diferente
```
terraform apply -var-file xpto.tfvars
```
ou
```
terraform apply -var-file .env
```

### Outputs

São valores que o terraform retorna quando termina o processo, exemplo: IP da Máquina gerada

## Data Source

Let um arquivo que já existe


