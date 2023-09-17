# Loja de Itens Medievais API

Este projeto consiste na criação de uma API para uma loja de itens medievais, como espadas feitas sob encomenda e outros produtos, utilizando TypeScript e Sequelize.

# Executando a Aplicação com Docker

Se preferir executar a aplicação usando Docker, siga as instruções abaixo.

## Pré-requisitos

Certifique-se de atender aos seguintes requisitos:

- O seu `docker-compose` deve estar na versão 1.29 ou superior. Se necessário, consulte a documentação para atualizar.

## Inicializando os Serviços

Para iniciar os serviços Node.js e MySQL em containers Docker, siga os passos abaixo:

1. Abra o terminal.

2. Navegue até o diretório raiz do projeto onde está localizado o arquivo `docker-compose.yml`.

3. Execute o seguinte comando para construir e iniciar os containers:

   ```bash
   docker-compose up -d --build
   
Certifique-se de que o MySQL local não esteja em execução na porta padrão (3306) ou faça as adaptações necessárias nas configurações se você desejar utilizar a aplicação em containers.

## Acessando o Terminal Interativo do Container
Para acessar o terminal interativo do container onde a aplicação está sendo executada, utilize o seguinte comando:
   ```bash
   docker exec -it blogs_api
   ```

Isso permitirá que você acesse o terminal dentro do container em execução.

## Instalando Dependências (Dentro do Container)
Dentro do container, você pode instalar as dependências necessárias com o seguinte comando:

   ```bash
   npm install
   ```

### ⚠️ Atenção:

Todos os comandos disponíveis no package.json (como npm start, npm test, npm run dev, etc.) devem ser executados dentro do container, ou seja, no terminal aberto após a execução do comando docker exec mencionado acima.

O Git dentro do container não virá configurado com suas credenciais. Você pode optar por fazer commits fora do container ou configurar suas credenciais do Git dentro do container conforme necessário.

Evite rodar o comando npm audit fix, pois ele atualizará várias dependências do projeto e pode gerar conflitos com o avaliador.

## ✨ Dica
A extensão "Remote - Containers" do Visual Studio Code é recomendada para desenvolver sua aplicação diretamente no container Docker, como se estivesse trabalhando com seus arquivos locais.

## Funcionalidades Principais

### 1. Cadastro de Produtos

- Crie um endpoint para o cadastro de produtos e desenvolva testes para cobrir as funcionalidades deste endpoint.
- O endpoint estará disponível em `/products`.
- Os produtos enviados serão salvos na tabela `products` do banco de dados.
- O formato da requisição deve ser:

  ```json
  {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4
  }
  
Certifique-se de que novos produtos recebam um novo orderId, pois os produtos são exclusivos.

### 2. Listagem de Produtos

- Crie um endpoint para listar produtos e desenvolva testes para cobrir as funcionalidades deste endpoint.
- O endpoint estará acessível em /products.

### 3. Listagem de Pedidos

- Crie um endpoint para listar todos os pedidos e desenvolva testes para cobrir as funcionalidades deste endpoint.
- O endpoint estará acessível em /orders.
- Esta rota deve retornar todos os pedidos e os IDs dos produtos associados a eles.

### 4. Login de Usuários
- Implemente um endpoint de login para os usuários e desenvolva testes para cobrir as funcionalidades deste endpoint.
- O endpoint estará acessível em /login.
- A rota deve receber os campos username e password, validando esses campos no banco de dados.
- Um token JWT será gerado e retornado em caso de sucesso no login, com o ID e nome de usuário no payload.

### 5. Validações de Produtos

- Desenvolva validações relacionadas à criação de produtos conforme especificado no requisito 1.
- Siga as orientações fornecidas e utilize os testes para assegurar um sistema confiável.
