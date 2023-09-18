# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar o check-in em uma academia;
- [x] Deve ser possível o usuário validar o check-in de um usuário;
- [x] Deve ser possível o usuário cadastrar uma academia;


## RNs (Regras de negócios)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado 
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só cadastrada por administradores;


## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por páginas;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);


----------------------------------------------------------------------------------

// Comandos

- npm init -y
- npm link
- npx tsc --init
- npx prisma init
- npx prisma generate       ➡️ Cria a typagem do schema
- npx prisma migrate dev    ➡️
- npx prisma studio

// Script

- npm run start         ➡️ Produção
- npm run start:dev     ➡️ Desenvolvimento
- npm run build         ➡️ Build o projeto
- npm run lint          ➡️ Padronização

- npm run test              ➡️ Running test unitary
- npm run test:watch        ➡️ Watch running test unitary
- npm run test:e2e          ➡️ Creating the environment link and installed to run the e2e test
- npm run test:e2e:watch    ➡️ Creating the environment link and installed to watch running the e2e test
- npm run test:coverage     ➡️ Test Coverage
- npm run test:ui           ➡️ View test in ui

----------------------------------------------------------------------------------

// Dependencia de desenvolvimento

- npm i typescript @types/node tsx tsup -D
- npm i eslint @rocketseat/eslint-config -D
- npm i prisma -D
- npm i -D @types/bcryptjs
- npm i vitest vite-tsconfig-paths -D
- npm i -D @vitest/ui
- npm install -D npm-run-all        ➡️ Executar script dentro do package.json e faz automaticamente uma conversão do script para funciona no SO atual da pessoa 
- npm i supertest -D
- npm i @types/supertest -D

// Dependencia de produção

- npm i fastify
- npm i dotenv      ➡️ Carrega arquivo .env
- npm i zod         ➡️ Validação das variaves
- npm i bcryptjs    ➡️ Fazer hash de senhas
- npm i @prisma/client
- npm i dayjs
- npm i @fastify/jwt
- npm i @fastify/cookie

----------------------------------------------------------------------------------

// Links

- https://github.com/renovatebot/renovate ➡️ bot que testa as dependencia projeto usando o testee automatizados para veriricar se a aplicação continua funcionando após a atualização da dependencia se os teste passsar ele cria uma pull requests no github informado que pode atualizar a versão das dependencia 

- https://www.prisma.io/            ➡️ ORM
- https://sequelize.org/            ➡️ ORM
- https://typeorm.io/               ➡️ ORM
- https://www.docker.com/           ➡️ 
- https://hub.docker.com/           ➡️
- https://vitest.dev/guide/ui.html  ➡️ Visualizar e navegar pelos testes
- https://www.npmjs.com/package/npm-run-all
- https://github.com/actions

----------------------------------------------------------------------------------

// ORM (Object-Relational Mapping)

- Mapear todas as relações e tabelas que tem no banco de dado em objetos

----------------------------------------------------------------------------------

// Docker

- docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql

- docker ps             ➡️ Mostra todos os container rodando
- docker ps -a          ➡️ Mostra todos quee foi criado em algum momento
- docker compose up -d  ➡️ Running Docker compose in back-ground
- docker compose stop   ➡️ Stopping docker compose
- docker compose down   ➡️ deleting docker compose


## Iniciar o docker
- docker start `container ID`
- docker start `names docker`

## Para o docker
- docker stop `container ID`
- docker stop `names docker`

## Deletar o docker
- docker rm `container ID`
- docker rm `names docker`

## Visualizar o logs

- docker logs api-solid-pg
- docker logs api-solid-pg -f ➡️ Manter os logs mostrando

-----------------------------------------------------------------------------------

// Design Patterns

- Conceito de controller            ➡️ Função que lida com a entrada de dados da requição HTTP e devovler uma resposta 

- Repository pattern                ➡️ Extrair a parte de conexão e requisições que é realizado para o banco de dado e colocar em um arquivo separado

- In Memory Test Database Pattern   ➡️ 

- Factory Pattern                   ➡️ Automatizar o trabalho da criação de um Caso de Uso

-----------------------------------------------------------------------------------

// SOLID

- S :
- O :
- L :
- I :
- D : Dependency Inversion Principle


-----------------------------------------------------------------------------------

// TDD - Test-driven development

- Metodologia que facilita endenter e caminhar pela regra de negocio 
- Fluxo
    - RED       ➡️ Primeiros status
    - GREEN     ➡️ Segundo status
    - REFACTOR  ➡️ Terceiro status

// Mocking

- Criar valores fictícios para dados e funções

-----------------------------------------------------------------------------------

// Estrategia de autenticação

- basic auth ➡️ O usuário precisa enviar as credeencias como cabeçalho na requisição

    - Não é utilizado em muitos casos, pois não é seguro transitar o email e senha todas as vezes que faz uma requisição para o Back-End

- JWT (Json Web Tkokens)  ➡️ 

    - Quando o usuário faz login (Somente na rota de login) envia o email e senha para o BackEnd.
    - O BackEnd valida se esse email e senha existe no banco de dado
    - Se validar o BackEnd gera um Token único e não-modificado e não é salva em qualquer estrutura de banco de dado

    - * Stateless: Não armazenado em nenhum estrutura de persistência de dados (Banco de dados)

    - Um token JWt e composto por três coisas (header.payload.sign)
     - header
     - payload
     - sign
    
-----------------------------------------------------------------------------------

// Test Environment

- Configuração de ambiente para alguns testes especifico 

-----------------------------------------------------------------------------------

// CI - Continuous Intergration

- Integração de codigo continua

// CD - Continuous Integration

- Quando receber novos codigo fazer deploy automatico
-----------------------------------------------------------------------------------
