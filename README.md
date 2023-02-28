## API de CRUD de Filmes

Nesta entrega, desenvolveremos uma API que contém um CRUD para uma aplicação de filmes usando o TypeORM para manipular os dados da aplicação.

Endpoints do Serviço
Método Endpoint Responsabilidade
POST /movies Criação de filmes.
GET /movies Lista todos os filmes.
PATCH /movies/:id Atualiza o filme passado por id.
DELETE /movies/:id Deleta o filme passado por id.
Requisitos do Serviço
Deve ser criado um banco de dados em PostgreSQL com uma tabela de filmes para armazenar os dados das requisições. A tabela de filmes deve ter as colunas necessárias para armazenar os seguintes dados:

id: inteiro, sequencial e chave primária.
name: caractere, tamanho máximo de 50, único e obrigatório.
description: texto.
duration: inteiro e obrigatório.
price: inteiro e obrigatório.
O diagrama da tabela deve ser feito.

O nome da classe da entidade deve ser Movie e deve ser criado um arquivo index.ts dentro da pasta de entities centralizando o export dela para que os testes funcionem.

Regras do Serviço
Nas rotas POST e PATCH, é necessário serializar os dados de entrada utilizando o zod. Chaves não mapeadas devem ser ignoradas.

Na rota POST /movies, a chave id deve ser ignorada, o próprio serviço deve preencher esse dado. A chave description é opcional, caso não seja enviada deve ser salva como null.

Na rota PATCH /movies, a chave id não pode ser atualizada, caso seja enviada deve ser ignorada.

Casos de Erro:
O nome (name) deve ser único. Nas rotas POST e PATCH /movies, caso seja enviado um nome já registrado, deve retornar a mensagem de erro abaixo. O status code deve ser o mencionado abaixo.
