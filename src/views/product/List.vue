<template>
  <div class="d-flex justify-content-evenly my-3">
    <router-link to="/" class="btn btn-primary">Voltar</router-link>
    <router-link to="/product/new" class="btn btn-primary">Novo produto</router-link>
  </div>

  <h1>Listagem de produtos</h1>
  <span class="spinner-border" role="status" v-if="loading"></span>
  <section v-if="!loading">
    <product-card v-for="(product, key) in products" :key="key" :product="product" />
  </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Product } from '@/core/entities'
import { ChallengeApi } from '@/core/api'
import ProductCard from '@/components/ProductCard.vue'

@Options({
  components: {
    ProductCard
  }
})
export default class ProductListPage extends Vue {
  products: Product[] = []
  loading = false

  mounted () {
    this.loading = true
    // eslint-disable-next-line
    ChallengeApi.PRODUCT.get().then((value: any) => {
      this.products = value
      this.loading = false
    })
  }
}
</script>

<style scoped>
</style>
