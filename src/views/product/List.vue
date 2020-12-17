<template>
  <h1>Product list</h1>
  <section>
    <div v-for="product in products" :key="product.code">
      <p>
        {{ product.description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Product } from '@/core/entities'
import { ChallengeApi } from '@/core/api'

export default class ProductListPage extends Vue {
  products: Product[] = []

  mounted () {
    // eslint-disable-next-line
    ChallengeApi.PRODUCT.get().then((value: any) => {
      this.products = value
    })
  }
}
</script>

<style scoped>
</style>
