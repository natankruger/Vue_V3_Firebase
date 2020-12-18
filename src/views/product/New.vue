<template>
  <h1>Novo produto</h1>
  <form @submit.prevent="create">
    <div class="form-group mt-5">
      <label for="description">Aqui é onde você escreve uma descrição desse produto</label>
      <input v-model="product.description"
             type="text"
             class="form-control"
             aria-labelledby="description"
             placeholder="Ex: Manivela azul para computadores muito lentos"
             required>
    </div>

    <div class="form-group mt-5">
      <label for="type">Aqui tente escrever em apenas uma palavra o que é esse produto</label>
      <input v-model="product.type"
             type="text"
             class="form-control"
             aria-labelledby="type"
             placeholder="Ex: Eletrodomestico"
             required>
    </div>

    <div class="form-group mt-5">
      <label for="price">Este é o preço pelo qual o fornecedor vende o produto</label>
      <input v-model="product.price"
             type="number"
             class="form-control"
             aria-labelledby="price"
             placeholder="Ex: R$: 400,00"
             required>
    </div>

    <button type="submit" class="btn btn-primary mt-5">Criar</button>
  </form>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Product } from '@/core/entities'
import { ChallengeApi } from '@/core/api'

export default class ProductNewPage extends Vue {
  product: Product = {
    code: '',
    description: '',
    type: '',
    price: 0,
    quantity: 0
  }

  create () {
    this.product.code = this.randomCode()
    ChallengeApi.PRODUCT.put(this.product)
  }

  randomCode () {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
  }
}
</script>

<style scoped>
</style>
