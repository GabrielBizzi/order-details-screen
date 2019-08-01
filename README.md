# Front-End Test

Clone este projeto e mande um .zip com o resultado final.

## O que fazer?

1. Criar uma tela com campo para digitar email;
2. Consumir uma API que retorna os pedidos desse email;
3. Listar algumas informações dos pedidos ou uma mensagem de que não há pedidos;
4. Campo para filtrar pelo número do pedido
5. Ao clicar num pedido exibir as informações completas;
6. Ter opção de "deslogar" para voltar para a tela de email.

## Iniciar projeto

* `yarn install` para instalar as dependências
* `yarn dev` para iniciar o projeto

O Front-End estará disponível em: [http://localhost:3000](http://localhost:3000).

## Back-End
O Back-End estará disponível em: [http://localhost:5000](http://localhost:5000)

Os seguintes emails possuem pedidos: jose@email.com, maria@email.com e pedro@email.com.

O endpoint para buscar todos os pedidos de cada email é: http://localhost:5000/EMAIL/orders.json

O endpoint para buscar as informações completas de um pedido é: http://localhost:5000/EMAIL/ID_PEDIDO.json

Exemplos:
* http://localhost:5000/jose@email.com/orders.json
* http://localhost:5000/jose@email.com/267014.json

Boa sorte!

## Base para layout (não fazer exatamente igual)

### Login
![Login](images/login.png?raw=true "Login")

### Pedidos
![Pedidos](images/pedidos.png?raw=true "Pedidos")

### Detalhes do pedido
![Detalhes do pedido](images/detalhes-do-pedido.png?raw=true "Detalhes do pedido")
