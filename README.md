<h1 align="center">
    Pharma Inc.
</h1>

<h2 align="center">
  Coodesh Front-end Challenge 🏅 2021
</h2>

<p align="center">
<img src="https://res.cloudinary.com/voss/image/upload/v1623336916/readme_logos/pharmainc-desktop_cvdov0.png" alt="Pharma Inc Desktop" width="50%" />
    &nbsp; &nbsp; &nbsp; &nbsp;
    <img src="https://res.cloudinary.com/voss/image/upload/v1623336916/readme_logos/pharmainc-mobile_fb0bpm.png" alt="Pharma Inc Mobile" width="27%" />
</p>

Veja o resultado final em:

#### [Link](https://coodesh-frontend-2021-vb.netlify.app)

## 🎯 O que é?

Pharma Inc. é resultado de um desafio frontend da [Coodesh](https://coodesh.com/), plataforma de avaliação e recrutamento de desenvolvedores.

O objetivo do desafio é completar uma série de requisitos dentro do contexto de um case, utilizando um framework entre React.js, Vue.js e Angular 8+.

**Case:**

A empresa Pharma Inc, está trabalhando em um projeto em colaboração com sua base de clientes para facilitar a gestão e visualização da informação dos seus pacientes de maneira simples e objetiva em um Dashboard onde podem listar, filtrar e expandir os dados disponíveis. O seu objetivo nesse projeto, é trabalhar no desenvolvimento do Front end que consumirá a API da empresa Pharma Inc seguindo os requisitos propostos neste desafio.

[Veja mais detalhes sobre o desafio.](https://lab.coodesh.com/public-challenges/front-end-challenge-2021)

## ⚖️ Decisões e Pontos Relevantes

### Testes unitários e E2E

Em relação ao item 4 da lista de diferenciais do desafio: "Escrever Unit Tests ou E2E Test na Lista de Pacientes. Escolher a melhor abordagem e biblioteca". Optei por uma testagem simples a nível unitário para garantir que a renderização dos componentes seria correta com os props recebidos. Baseado em meus estudos, decidi seguir a ideia de criar testes focados na experiência do usuário, ou seja, sem testar as implementações técnicas e sim o que o usuário vai ver. As implementações devem ter flexibilidade para serem alteradas sem a necessidade dos testes também serem alterados a cada mudança. Para complementar, decidi realizar os testes de integração junto com os E2E. Como é um aplicativo simples, não seria tão custoso do ponto de vista de recursos, tanto que toda a bateria de testes E2E dura cerca de 7 segundos. Como foi minha primeira vez utilizando o Nuxt e o Cypress, foi um pouco complicada a configuração junto com o Typescript, mas em compensação, tanto a escrita dos testes quanto o funcionamento visual da ferramenta são bem legais.

### Composables

Lendo a documentação do Vue para o Composition API, vi um [exemplo](https://v3.vuejs.org/guide/composition-api-introduction.html#standalone-computed-properties) onde a lógica do componente era extraída para um arquivo próprio. Tornando essa lógica reutilizável, deixando o componente mais organizado e enxuto, além de resultar em uma maior separação de responsabilidades. Utilizei esse recurso na lista de pacientes, na funcionalidade de busca e filtragem, e no modal. Achei muito positivo, sempre me anima a possibilidade de escrever código mais organizado e elegante. Com certeza irei utilizar em meus projetos daqui em diante.

## 🚀 Tecnologia, Ferramentas e Conceitos

Esse projeto utiliza:

- [Vue.js](https://vuejs.org/)
- [Nuxt](https://nuxtjs.org/)
- [Random User Generator API](https://randomuser.me)
- [ESLint](https://eslint.org/)
- [Windi CSS](https://windicss.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Vue Test Utils](https://vue-test-utils.vuejs.org/)
- [Cypress](https://www.cypress.io/)
- Mobile First
- [Netlify](netlify.com)
- [GitHub Actions](https://github.com/features/actions)
- [VS Code](https://code.visualstudio.com/)

## 🔧 Como instalar e rodar

#### **Nuxt**

```
# instalar dependências
$ yarn install

# servir localmente com hot reload em localhost:3000
$ yarn dev

# build para produção e iniciar do servidor
$ yarn build
$ yarn start

# gerar projeto estático
$ yarn generate
```

#### **Docker**

```
# build do container
docker build -t pharmainc .

# rodar container
docker run -it -p 5000:5000 pharmainc
```

## 📝 Licença

Esse projeto usa a licença [MIT](https://github.com/vbertazzo/coodesh-frontend-challenge-2021/blob/main/LICENSE).
