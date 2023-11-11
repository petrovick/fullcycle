# Event Driven Design

### Types of Events
1. Event Notification: Forma curta de comunicação, só informa o estado de um produto por exemplo. { prodido: 1, status: "aprovado" }
2. Event Carried State Trans: Formato completo para trafegar as informações, faz o "Stream de dados".
3. Event sourcing: Armazenamento dos eventos baseado em uma linha do tempo e possibilidade de replay. (Captura os eventos no sistema, armazenar em banco via Time series(por tempo)). NuBank utiliza o banco de dados "Datomic".

