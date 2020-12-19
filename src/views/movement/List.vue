<template>
  <div class="d-flex justify-content-evenly my-3">
    <router-link to="/" class="btn btn-primary">Voltar</router-link>
    <router-link to="/movement/new" class="btn btn-primary">Nova movimentação</router-link>
  </div>

  <h1>Lucro por produto</h1>
  <section>
    <span class="spinner-border" role="status" v-if="loading"></span>

    <div v-if="!loading">
      <revenue-card v-for="(revenue, key) in revenuesByProduct" :key="key" :revenue="revenue" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Movement } from '@/core/entities'
import { ChallengeApi } from '@/core/api'
import RevenueCard from '@/components/RevenueCard.vue'

interface Revenue {
  productCode: string;
  outQuantity: number;
  value: number;
}

@Options({
  components: {
    RevenueCard
  }
})

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
