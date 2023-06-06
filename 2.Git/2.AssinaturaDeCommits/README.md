
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

