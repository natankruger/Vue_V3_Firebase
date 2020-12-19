<template>
  <h1>Lucro por produto</h1>
  <section>
    <span class="spinner-border" role="status" v-if="loading"></span>

    <div v-if="!loading">
      <div v-for="(revenue, key) in revenuesByProduct" :key="key">
        <p>
          <strong>Código do produto:</strong> {{ revenue.productCode }} -
          <strong>Quantidade de saida:</strong> {{ revenue.outQuantity }} -
          <strong>Lucro R$:</strong> {{ revenue.value > 0 ? revenue.value : 0 }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Movement } from '@/core/entities'
import { ChallengeApi } from '@/core/api'

interface Revenue {
  productCode: string;
  outQuantity: number;
  value: number;
}

export default class MovementListPage extends Vue {
  movements: Movement[] =[]
  revenuesByProduct: Revenue[] = []
  loading = false

  makeRevenuesByProductList (movement: Movement) {
    const revenue = this.revenuesByProduct.filter((val) => { return val.productCode === movement.productCode })

    if (!revenue.length) {
      this.revenuesByProduct.push({
        productCode: movement.productCode,
        outQuantity: movement.type === 'saida' ? +movement.quantity : 0,
        value: movement.type === 'saida' ? +movement.value : 0
      })
    } else {
      if (movement.type === 'saida') {
        revenue[0].outQuantity += +movement.quantity
        revenue[0].value += +movement.value
      } else {
        revenue[0].value -= +movement.value
      }
    }
  }

  mounted () {
    this.loading = true
    // eslint-disable-next-line
    ChallengeApi.MOVEMENT.get().then((value: any) => {
      value.forEach((movement: Movement) => {
        this.makeRevenuesByProductList(movement)
        this.loading = false
      })

      this.movements = value
    })
  }
}
</script>

<style scoped>
</style>
