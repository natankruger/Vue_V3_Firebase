<template>
  <h1>Desafio de Frontend</h1>
  <p>
    Esse é o desafio que foi desenvolvido para o desafio de frontend levantado pela
    <a href="https://www.linkedin.com/company/fesctecnologia/?originalSubdomain=br" target="_blank">FESC</a>.
  </p>

  <p>
    O desafio que me foi enviado era o de desenvolvedor fullstack, porém a pessoa que me passou ele, me informou para fazer apenas a parte de frontend.
  </p>

  <h3>Geral</h3>
  <p>
    Construir uma aplicação RESTful para controle de estoque com no mínimo duas entidades, como por exemplo: Produto e Movimento Estoque.
  </p>

  <h3>Dificuldades</h3>
  <p>
    Como o teste foca bastante na parte de backend, tive que fazer alguma coisa para poder persistir e buscar dados, acabei optado por usar o realtime database do
    <a href="https://firebase.google.com/?hl=pt-br" target="_blank" >Google Firebase</a>
  </p>

  <h3>Algumas Tecnologias usadas</h3>
  <ul class="tec-list">
    <li>
      <a href="https://v3.vuejs.org/" target="_blank">Vue V3</a>
    </li>

    <li>
      <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
    </li>

    <li>
      <a href="https://blog.getbootstrap.com/2020/06/16/bootstrap-5-alpha/" target="_blank">BootStrap 5 (alpha)</a>
    </li>

    <li>
      <a href="https://www.cypress.io/" target="_blank">Cypress</a>
    </li>

    <li>
      <a href="https://sass-lang.com/" target="_blank">SASS</a>
    </li>

  </ul>

  <h3>Ações feitas para o desafio</h3>
  <section class="row mx-auto">
    <div class="col-md-3 col-6 mx-md-0 mx-auto mb-4">
      <router-link to="/product/new" class="btn btn-primary btn-nav">Criar novo produto</router-link>
    </div>

    <div class="col-md-3 col-6 mx-md-0 mx-auto mb-4">
      <router-link to="/products" class="btn btn-primary btn-nav">Consulta de produtos</router-link>
    </div>

    <div class="col-md-3 col-6 mx-md-0 mx-auto mb-4">
      <router-link to="/movement/new" class="btn btn-primary btn-nav">Nova movimentação de estoque</router-link>
    </div>

    <div class="col-md-3 col-6 mx-md-0 mx-auto mb-4">
      <router-link to="/movements" class="btn btn-primary btn-nav">Consulta de lucro por produto</router-link>
    </div>

  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>
.tec-list {
  list-style: none;
}

.btn-nav {
  display: flex;
  min-height: 62px;
  justify-content: center;
  align-items: center;
}
</style>
