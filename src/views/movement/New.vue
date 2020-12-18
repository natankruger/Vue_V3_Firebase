<template>
  <h1>Nova Movimentação</h1>
  <form @submit.prevent="create">
    <div class="form-group mt-5">
      <label for="productCode">Código do produto</label>
      <input v-model="movement.productCode"
             type="text"
             class="form-control"
             aria-labelledby="productCode"
             placeholder="Ex: mmxre"
             required>
    </div>

    <div class="form-group mt-5">
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
             placeholder="Ex: mmxre"
             required>
    </div>

    <div class="form-group mt-5">
      <label for="quantity">Quantidade de produtos na movimentação</label>
      <input v-model="movement.quantity"
             type="text"
             class="form-control"
             aria-labelledby="quantity"
             placeholder="Ex: mmxre"
             required>
    </div>

     <button type="submit" class="btn btn-primary mt-5">Criar</button>
  </form>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Movement } from '@/core/entities'
import { ChallengeApi } from '@/core/api'

export default class MovementNewPage extends Vue {
  movement: Movement = {
    productCode: '',
    type: 'entrada',
    value: 0,
    date: '',
    quantity: 0
  }

  create () {
    this.movement.date = new Date().toISOString()
    ChallengeApi.MOVEMENT.put(this.movement)
  }
}
</script>

<style scoped>
</style>
