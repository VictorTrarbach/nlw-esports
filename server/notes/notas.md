Sempre que for trabalhar com BD e tiverem valores decimais, quebrados melhor salvar 90 1:30h - 90min (do que procurar uma forma de salvar 1:30h.) 

Melhor salvar em 90min que 1:30h
Preço tbm

R$ 179,89 -> 17989
Sempre multiplicam por 100 pra salvar no banco e assim não temos números quebrados no banco de dados.

Coisas muito chatas de lidar na programação: Datas (fuso horário / formatos diferentes i18n)
EUA 03-01-2022 MM/DD/YYYY

Pontos flutuantes (números quebrados)

Muitas vezes queremos arquitetar um projeto da melhor forma, mas a gente nem sabe qual é essa forma que queremos arquitetar, e isso causa um momento na criação onde vamos ter que pesquisar /estudar muita coisa e não vamos sentir confiança e segurança para fazer aquilo funcionar, e esse momento de insegurança/falta de confiança gera uma ansiedade e uma pressão muito grande, e isso pode acabar com o projeto.

Uma dica: Se estiver criando um projeto pessoal, algo pro seu portfólio, crie algo com aquilo que vc já sabe e adicione poucas camadas a mais de aprendizado, assim vc vai ter mais confiança e segurança para criar algo que vai te ajudar a conseguir um emprego.


// HTTP methods / API RESTful / HTTP Codes

// Query Params / Route Params / Body

// Listagem



Controle de rotas

MÉTODOS HTTP (Muito mais um padrão do que uma funcionalidade) (poderíamos resolver todos os problemas com GET, POST, mas não é o ideal) (Preciso seguir os princípios de uma API REST)

*GET* - Sempre que vamos fazer uma operação de leitura no backend, o front-end está buscando uma listagem de alguma coisa, buscando alguma informação no backend, a gente usa o método GET.

*POST* - Sempre que vamos fazer uma operação de criação no backend, o front-end está enviando alguma informação para o backend.

*PUT* - Sempre que vamos fazer uma operação de atualização (editando uma entidade(editar perfil do usuário(vários campos[nome, email, avatar]))) no backend, o front-end está enviando alguma informação para o backend.

*PATCH* - Editar uma informação específica (simples) de uma entidade (ex: editar o avatar do usuário)(Uma opção , se quero receber notificações ou não dentro do meu perfil)(sim ou não)

*DELETE* - Semper que vamos fazer uma operação de remoção no backend, o front-end está enviando alguma informação para o backend.

// Criação - O método POST já indica que quero criar alguma coisa, n precisa colocar um verbo
// Sempre no plural

*!HTTP Codes!*  Mostra se a requisição foi bem sucedida ou não. Qual é o tipo da resposta que estamos recebendo. do backend para o front-end. 

2 - Sucesso 3 - Redirecionamento 4 - Erro do cliente (Erro da nossa aplicação)
5 - Erro do servidor (Erros inesperados)

201 - Created (criado com sucesso) 200 - OK (sucesso) 400 - Bad Request (erro do cliente) 401 - Unauthorized (não autorizado) 404 - Not Found (não encontrado) 500 - Internal Server Error (erro do servidor)

EX:
Integração com API externas, rodaram uma integração de 500 vídeos para fazer um processo nos vídeos
Pode estar retornando sucesso!

O pessoal da API ligou falando que n receberam nenhuma informação dos vídeos

a API deles estava retornando 200 (sucesso) apenas um OK, mas dentro do corpo estava ERRO, foi impossível fazer o Upload desses vídeos


Parâmetros disponíveis na URL, n podem ser usados para senhas ... (não é seguro)

Informações que definem o estado da nossa interface/ 
Definem o estado que a gente está naquele momento

Query params - Parâmetros enviados na própria rota que geralmente servem para filtros, paginação
Ex: /users?name=Victor&page=1&sort=title

Route params - Parâmetros não/nomeados que aparecem na rota e são utilizados para identificar recursos (ex: /users/1) 
Ex: /users/1
Body - Parâmetros para criação/atualização de informações 
Ex: {
        "name": "Victor",
        "email": "
    }

    *Filtros/ordenação/paginação* Sempre são nomeados.//localhost:3333/ads/5
//localhost:3333/post/como-criar-uma-api-em-node

//Sempre opte por usar um banco relacional, se não tiver certeza, use um banco relacional

//Postgres, Mysql, SQLite, Oracle, Microsoft SQL Server

N queremos subir com um serviço de banco, usar Docker ou algo assim

npmjs.com/package/sqlite3

Driver nativo para comunicação entre node/sqlite
A camada mais baixo nível possível de comunicação entre node(backend) e sqlite(banco de dados)
Existem outras formas de comunicar com banco de dados que são mais amigáveis

Knex.js
Escrever js e ele vai gerar o código sql

ORM - Object Relational Mapping (Forma mais fácil de se comunicar com o banco de dados)
Prisma

Relação entra as tabelas do banco de dados, com classes, com, entidades dentro do typescript, podemos fazer querys pro bd +- da mesma forma que um query builder, porém cada tabela do banco de dados vai se relacionar com uma classe, com uma entidade dentro do code

npm i prisma -D

npx prisma init -h (documentação)

npx prisma init --datasource-provider SQLite

.env -> DATABASE_URL="file:../src/database/db.sqlite""

criar as tabelas do bando de dados de uma maneira automatizada
Extensão Prisma

ctrl + shift + p -> >json 

"[prisma]": {
        "editor.formatOnSave": true
    },

npx prisma migrate dev

migration, versionamento
10 devs backend, deploy, precisamos subir todas as alterações e colocar no ar.
git faz isso, mas n é o ideal, pois n é uma ferramenta de versionamento de banco de dados
o ideal é usar o prisma migrate

Enter a name for the new migration: create table games
Eu criei a tabela games em

npx prisma studio

Relacionamento 1:N
model Ad {
  id              String   @id
  name            String
  yearsPlaying    Int
  discord         String

  game   Game   ctrl + s (meu ad sempre vai estar relacionado com um game do tipo Game)
}                  |
                   v
 game   Game   @relation(fields: [gameId], references: [id])
  gameId String

  npx prisma migrate dev

  create table ads

  npx prisma studio

  npm i @prisma/client
  import {PrismaClient} from '@prisma/client' 

  npx prisma generate

  O prisma cria dentro de node_modules/.prisma/index.s.ts

  Ele cria baseado no schema, onde tem os models, tabela do banco, ele cria tipos do typescript type game type ads

  E ele cria todos os métodos que podemos executar nesses campos em si

Ele trás toda a inteligência de IDE, para a gente não buscar dados de tabelas inexistentes, ou de campos inexistentes
  const games = prisma.games.(findMany ou qual vc quiser)({
    ...
  }) ou ad

//falo para o express que vou usar json(permito ele a entender json)
app.use(express.json())

  package.json
  "scripts": {
    "build": "tsc",
    "dev": "tsnd *--exit-child* src/server.ts"
    quando o tsndev observar que a gente mudou um arquivo, ele vai também desconectar com o banco de dados, e criar uma nova conexão. Vai restartar o servidor. 
    Restartar para atualizar o hoppscotch
  },



  npm i cors

  Não foi desenvolvida junto com typescript

  npm i @types/cors -D



Proteger a nossa aplicação contra front-ends que a gente quer que não acessem nosso back-end
  import cors from 'cors'; 

  Uma forma de dizer quais endereços front-end queremos permitir que acessem o nosso back-end
  Se a gente não configurar, nenhum front-end vai conseguir acessar nossa API

  //app.use(cors()) Se deixar assim todos os fronts pode acessar a api


app.use(cors({
// em produção https://meusite.com ou http://localhost:3000
}))