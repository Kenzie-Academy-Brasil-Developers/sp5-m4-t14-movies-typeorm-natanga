# API de CRUD de Filmes

desenvolvolvi uma API que contém um CRUD para gerenciamento de filmes usando o TypeORM para manipular os dados da aplicação.

Endpoints disponíveis:

Método | Endpoint | Descrição
-------|----------|------------
POST | /movies | Criação de um novo filme.
GET | /movies | Listagem de todos os filmes.
PATCH | /movies/:id | Atualização de um filme específico.
DELETE | /movies/:id | Remoção de um filme específico.

Requisitos do Serviço:

- Deve ser criado um banco de dados em PostgreSQL com uma tabela de filmes para armazenar os dados das requisições.
- A tabela de filmes deve ter as colunas necessárias para armazenar os seguintes dados:
  - id: inteiro, sequencial e chave primária.
  - name: caractere, tamanho máximo de 50, único e obrigatório.
  - description: texto.
  - duration: inteiro e obrigatório.
  - price: inteiro e obrigatório.
- O diagrama da tabela deve ser feito.

Regras do Serviço:

- Nas rotas POST e PATCH, é necessário serializar os dados de entrada utilizando o Zod. Chaves não mapeadas devem ser ignoradas.
- Na rota POST /movies, a chave id deve ser ignorada e o próprio serviço deve preencher esse dado. A chave description é opcional, caso não seja enviada, deve ser salva como null.
- Na rota PATCH /movies, a chave id não pode ser atualizada e caso seja enviada, deve ser ignorada.
- O nome (name) deve ser único. Nas rotas POST e PATCH /movies, caso seja enviado um nome já registrado, deve retornar a mensagem de erro abaixo com o status code correspondente.
  - Mensagem de erro: "O nome já está em uso."
  - Status code: 409

Para garantir que os testes funcionem corretamente, é necessário criar uma classe de entidade chamada Movie e um arquivo index.ts dentro da pasta de entidades para exportá-la centralizadamente.

Esperamos que essa API seja útil e atenda às suas necessidades. Se tiver alguma dúvida, não hesite em entrar em contato conosco.
