<template>
  <h1>Nova Movimentação</h1>

  <div class="alert alert-danger" role="alert" v-if="error">
    {{ error }}
    <span class="alert-close">&times;</span>
  </div>

  <form @submit.prevent="create">

    <div class="form-group mt-5">
      <span for="productCode">Selecione o produto</span>
      <select class="form-control" v-model="productFID">
        <option v-for="(product, key) in products"
                :key="key"
                :value="key">
          {{ product.code }} - {{ product.type }} - {{ product.description }}
        </option>
      </select>
    </div>

    <div class="form-group mt-5">
        <span>Tipo de movimentação</span>
        <select class="form-control" v-model="movement.type">
          <option value="entrada" selected>Entrada</option>
          <option value="saida">Saida</option>
        </select>
    </div>

    <div class="form-group mt-5">
      <label for="value">Valor da movimentação</label>
      <input v-model="movement.value"
             type="text"
             class="form-control"
             aria-labelledby="value"
             placeholder="Ex: 119"
             required>
    </div>

    <div class="form-group mt-5">
      <label for="quantity">Quantidade de produtos na movimentação</label>
      <input v-model="movement.quantity"
             type="text"
             class="form-control"
             aria-labelledby="quantity"
             placeholder="Ex: 78"
             required>
    </div>

     <button type="submit" class="btn btn-primary mt-5">Criar</button>
  </form>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Movement, Product } from '@/core/entities'
import { ChallengeApi } from '@/core/api'

export default class MovementNewPage extends Vue {
  products: Product[] = []
  productFID = ''
  error = ''

  movement: Movement = {
    productCode: '',
    type: 'entrada',
    value: 0,
    date: '',
    quantity: 0
  }

  mounted () {
    // eslint-disable-next-line
    ChallengeApi.PRODUCT.get().then((value: any) => {
      this.products = value
    })
  }

  create () {
    ChallengeApi.PRODUCT.getOne(this.productFID).then((product: Product) => {
      this.movement.date = new Date().toISOString()
      this.movement.productCode = product.code

      let newQuantity = 0

      if (this.movement.type === 'entrada') {
        newQuantity = +product.quantity + +this.movement.quantity
      } else {
        newQuantity = +product.quantity - +this.movement.quantity
      }

      if (newQuantity > 0) {
        product.quantity = newQuantity
        ChallengeApi.PRODUCT.update(this.productFID, product)
        ChallengeApi.MOVEMENT.put(this.movement)
        this.$router.push({ name: 'ProductListPage' })
      } else {
        this.error = `Você não pode movimentar ${this.movement.quantity} unidades, pois só tem ${product.quantity} unidades em estoque`
        this.movement = {
          productCode: '',
          type: 'entrada',
          value: 0,
          date: '',
          quantity: 0
        }
        this.productFID = ''
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.alert-close {
  cursor: pointer;
  float: right;
}
</style>
