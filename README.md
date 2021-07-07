<h1 align="center">
    :handshake: Next Level Week Together :handshake:
</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielReira/NLW-Together?color=F0DB4F&style=flat-square">
  <a href="https://github.com/GabrielReira/NLW-Together/commits/main">
    <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/GabrielReira/NLW-Together?color=F0DB4F&style=flat-square">
  </a>
  <a href="https://github.com/GabrielReira">
    <img alt="Author" src="https://img.shields.io/badge/made%20by-GabrielReira-F0DB4F?style=flat-square">
  </a>
  <a href="https://github.com/GabrielReira/NLW-Together/blob/master/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/GabrielReira/NLW-Together?color=F0DB4F&style=flat-square">
  </a>
</p>


---


## :rocket: Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSON Web Token](https://jwt.io/)
- [TypeORM](https://typeorm.io/)
- [SQLite3](https://www.sqlite.org/index.html)


---


## :desktop_computer: Sobre o projeto

### Informações gerais :monocle_face:
Este projeto é uma API (Application Programming Interface) realizada utilizando-se **Node** e **Express**. O intuito dela é que fosse utilizada como uma plataforma para promover o reconhecimento entre companheiros de equipe.

Nesta aplicação, é possível que um usuário se registre, crie tags e possa atribuir "elogios" a outros usuários também cadastrados na plataforma.

Projeto desenvolvido na trilha **Back-end** do **Next Level Week**, organizada pela [Rocketseat](https://rocketseat.com.br/).

### Informações técnicas :nerd_face:

Esta aplicação possui um total de 8 rotas, sendo 4 do tipo POST e outras 4 do tipo GET. Realizei sua documentação completa no Postman, você pode acessá-la [aqui](https://documenter.getpostman.com/view/16527246/Tzm3ncLF).

Ademais, seu banco de dados foi criado pensando na forma mais moderna, que é trabalhando com **ORM** e **Migrations**. Além disso, também utilizei **JSON Web Token** para criação de tokens capazes de gerar autorizações de acesso para determinadas rotas da aplicação.

#### ORM (Object Relational Mapper)
- É uma técnica que ajuda no mapeamento entre a entidade o objeto do banco de dados;
- Esta técnica permite pegar o código, em JavaScript por exemplo, e o transformar de tal forma que o banco de dados consiga interpretá-lo;
- Através dele é possível automatizar inserções;
- Não é preciso utilizar as querys do SQL, já que os códigos em JavaScript já serão convertidos da forma adequada.

#### Migrations
- É uma forma de controlar o versionamento de tabelas dentro da aplicação;
- Armazena todas as alterações que foi feita no banco de dados;
- É possível ter o controle do que já foi executado e o que ainda precisa ser executado;
- Com isso, todas as pessoas que estiverem trabalhando no projeto sempre terão o mesmo banco de dados com as mesmas atualizações;
- Quando a aplicação for para a produção, só será necessário rodar as Migrations e elas serão as responsáveis por criar toda a estrutura do banco de dados e realizar todas as inserções e alterações necessárias;
- Funciona como um histórico de alterações.

#### Regras para aplicação

1. Cadastro de usuário
- Não é permitido cadastar usuário sem email;
- Não é permitido cadastrar mais de um usuário com o mesmo email;
- A senha deve ser salva encriptada no banco de dados.

2. Cadastro de tag
- Não é permitido cadastar tag sem nome;
- Não é permitido cadastrar tags com mesmo nome;
- Não é permitido o cadastro por usuários que não sejam administradores.

3. Cadastro de elogios
- Não é permitido um usuário cadastrar um elogio para si;
- Não é permitido cadastar elogios para usuário inválido;
- O usuário precisar estar autenticado na aplicação.


### Resumo
- Aplicação trabalhada com migrations, entidades, ORM (relacionamento entre entidades e o banco de dados), repositórios (camada responsável por se comunicar com o banco de dados), middlewares etc;
- Aplicação dividida em camadas: controllers, models, repositories, services;
- Rotas com requerimento JWT (autenticação dentro da aplicação);
- Documentação da API: https://documenter.getpostman.com/view/16527246/Tzm3ncLF.


---


## :fire: Como baixar e executar o projeto

### Pré-requisitos :book:
   * Possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador;
   * Possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador;
   * Possuir um gerenciador de pacotes, seja o **[Yarn](https://yarnpkg.com/)** ou **[npm](https://www.npmjs.com/)**.

### Clonando o repositório :cyclone:
```sh
    # Clone o repositório
    $ git clone https://github.com/GabrielReira/NLW-Together.git
    # Acesse seu diretório
    $ cd nlw-together
```

### Executando a API :brain:
```sh
    # Instale as dependências do projeto
    $ yarn install
    # Crie as tabelas do banco de dados
    $ yarn typeorm migration:run
    # Inicie a aplicação
    $ yarn dev
```

A aplicação estará disponível em `http://localhost:3000/`.


---


## :page_with_curl: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/GabrielReira/NLW-Together/blob/master/LICENSE) para mais detalhes.


---

<p align="center"><strong>Por <a href="https://www.linkedin.com/in/gabrielreira/">Gabriel Reira</a></strong></p>
