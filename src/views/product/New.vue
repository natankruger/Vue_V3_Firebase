<template>
  <div class="d-flex justify-content-evenly my-3">
    <router-link to="/" class="btn btn-primary">Voltar</router-link>
  </div>

  <h1>Novo produto</h1>
  <form @submit.prevent="create">
    <div class="form-group mt-5">
      <label for="description">Aqui é onde você escreve uma descrição desse produto</label>
      <input v-model="product.description"
             type="text"
             class="form-control"
             aria-labelledby="description"
             placeholder="Ex: Manivela azul para computadores muito lentos"
             @blur="descriptionValidation"
             required />
      <small class="error-text" v-if="errors.description">{{ errors.description }}</small>
    </div>

    <div class="form-group mt-5">
      <label for="type">Aqui tente escrever em apenas uma palavra o que é esse produto</label>
      <input v-model="product.type"
             type="text"
             class="form-control"
             aria-labelledby="type"
             placeholder="Ex: Eletrodomestico"
             @blur="typeValidation"
             required />
      <small class="error-text" v-if="errors.type">{{ errors.type }}</small>
    </div>

    <div class="form-group mt-5">
      <label for="price">Este é o preço pelo qual o fornecedor vende o produto</label>
      <input v-model="product.price"
             type="number"
             class="form-control"
             aria-labelledby="price"
             placeholder="Ex: R$: 400,00"
             @blur="priceValidation"
             required />
      <small class="error-text" v-if="errors.price">{{ errors.price }}</small>
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

  errors = {
    description: '',
    type: '',
    price: ''
  }

  anyFormError () {
    const { description, type, price } = this.errors

    return description.length > 0 || type.length > 0 || price.length > 0
  }

  descriptionValidation () {
    const words = this.product.description.split(' ')

    if (words.length < 2) {
      this.errors.description = 'Precisa ter no mínimo duas palavras'
    } else {
      this.errors.description = ''
    }
  }

  typeValidation () {
    const words = this.product.type.split(' ')

    if (words.length > 2) {
      this.errors.type = 'Precisa ter no maximo duas palavras'
    } else {
      this.errors.type = ''
    }
  }

  priceValidation () {
    if (+this.product.price <= 0) {
      this.errors.price = 'Preencha o valor'
    } else {
      this.errors.price = ''
    }
  }

  create () {
    this.descriptionValidation()
    this.typeValidation()
    this.priceValidation()

    if (!this.anyFormError()) {
      this.product.code = this.randomCode()
      ChallengeApi.PRODUCT.put(this.product)
      this.$router.push({ name: 'Home' })
    }
  }

  randomCode () {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
  }
}
</script>

<style lang="scss" scoped>
.error-text {
  color: map-get($colors, danger);
}
</style>
