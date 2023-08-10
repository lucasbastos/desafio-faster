# Desafio Faster

Olá, me chamo Lucas e esse é meu desafio para a posição de Desenvolvedor Front-end na Faster.


# Tecnologias

- NuxtJS 3
- Typescript
- Tailwind

## Descrição

O desafio consiste em conectar uma aplicação frontend na API [TheCockTailDB](https://www.thecocktaildb.com/api.php) e apresentar ao usuário uma lista de bebidas e suas categorias. Sendo possível filtrar por categorias, nome e selecionar drinks favoritos

## Metodologia

Após a configuração do projeto, o primeiro passo foi fazer as integrações com a API. Para essa finalidade, foi utilizada uma função nativa do Nuxt **useFetch()**. Criada a partir da função **ofetch()** disponível no NodeJS. 
Para a lógica de drinks favoritos, devido à ausência de uma rota para persistir informações, optei pelo uso do **localStorage** para armazenar e resgatar os favoritados e aparentá-los na tela no card, com um coração preto.
O tratamento de erros é básico, apenas redirecionando o usuário para uma página de erro, seja erro de comunicação com a API ou uma URL errada.
Todas as estilizações foram feitas utilizando o TailwindCSS

## Pendências

Devido à falta de tempo, um dos opcionais faltantes são os testes unitários. Para isso pretendia utilizar o Vitest por possuir sintaxe similar ao Jest e oferecer melhor integração ao ecossistema VueJS e NuxtJS

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
