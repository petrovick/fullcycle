# resource = Bloco
# local = Provider
# file = Tipo do provider 

resource "local_file" "exemplo" {
  filename = "exemplo.txt"
  content  = var.conteudo
}

data "local_file" "conteudo-exemplo" {
  filename = "exemplo.txt"
}

output "data-source-result" {
  value = data.local_file.conteudo-exemplo.content_base64
}

variable "conteudo" {
  type = string
}

output "id-do-arquivo" {
  value = resource.local_file.exemplo.id
}

output "conteudo" {
  value = var.conteudo
}
