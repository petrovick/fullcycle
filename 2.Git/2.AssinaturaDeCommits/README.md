
### Verifica Assinatura

Verificar se já possui assinatura
```
gpg --list-secret-key --keyid-form LONG
```


### Gerando Chave
```
gpg --full-generate-key

Your Selection: 1
Wahat keysize do you want: 4096
Real name: petrovick (Nome do git config name)
public and secret key created and signed.

pub   rsa4096 2023-06-06 [SC]
      1B323FF8BCDCEABEB2C54070002B30522531FA46
uid                      petrovick <petrovickg@hotmail.com>
sub   rsa4096 2023-06-06 [E]
```

### Exportando chave
gpg --armor --export 1B323FF8BCDCEABEB2C54070002B30522531FA46

### Salvando a signing key localmente
git config --global user.signingkey 1B323FF8BCDCEABEB2C54070002B30522531FA46

## Salvnando no bash profile

```
echo 'export GPG_TTY=$(tty)' >> ~/.profile
echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
```

## Assina automaticamente os commits
```
git config commit.gpgsign true
git config tag.gpgSign true
```

## Assina automaticamente todos os repositórios

```
git config --global commit.gpgsign true
git config --global tag.gpgSign true
```

### Guarda sua senha GPG

Para não precisar utilizar a senha para assinar a todo momento

```
echo 'use-agent' > ~/.gnupg/gpg.conf
gpgconf --launch gpg-agent
```

## Adicionando outro email na chave

```
gpg --list-secret-key --keyid-form LONG
```
Pega Id do resultado acima

```
gpg --edit-key 1B323FF8BCDCEABEB2C54070002B30522531FA46

gpg> adduid
Real name: Wesley Willians
Email address: wesley@schoolsofnet.com

gpg> uid 2
gpg> trust
Your Decision?> 5
gpg> save
```
