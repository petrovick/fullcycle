# Service Mesh

Camada extra adicionada em seu cluster para monitorar e modificar em tempo real o tráfego das aplicações, bem como elevar o nível de segurança e confiabilidade de todo ecosistema.

## Istio

Projeto open source que implementa service mesh visando diminuir a complexidade no gerenciamento de aplicações distribuídas independente de qual linguagem ou tecnologia as elas foram desenvolvidas.
Istio não é uma plataforma exclusiva para o k8s.

## Porque preciso de uma Service Mesh? Istio?

Gerenciamento de tráfego
    - Gateways (entrada e saída)
    - Load Balancing
    - Timout
    - Políticas de retry
    - Fault injection (Criar erros na aplicação de forma poposital, ajuda na observabilidade)
Observabilidade
    - Métricas
    - Traces distribuídos (Ver qual serviço chamou qual)
    - Logs
Segurança
    - Man-in-the-middle (Chamadas criptografadas)
    - mTLS
    - AAA (Authentication, authoriation, audit)

## Arquitetura do Isto

### Dinâmica && Sidecar Proxy
![Istio Architecture](./image/istio_archtecture.png)
