<template>
  <div class="card col-md-4 col-12 mx-auto mt-4 pt-2">
    <p class="mb-0" id="p-code">
      Código: <strong>{{ product.code }}</strong>
    </p>

    <h4 id="p-desc">
      {{ product.type }} - {{ product.description }}
    </h4>

    <small id="p-stock">
      Estoque: {{ product.quantity }}
    </small>

    <small id="p-price">
      Preço no fornecedor: R$ {{ product.price }}
    </small>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Product } from '@/core/entities'

@Options({
  props: {
    product: {}
  }
})
export default class ProductCard extends Vue {
  product!: Product
}
</script>

<style scoped lang="scss">

</style>
