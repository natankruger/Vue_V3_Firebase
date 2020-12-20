<template>
  <div class="card col-md-4 col-12 mx-auto mt-4 pt-2">
    <p class="mb-0">
      Código: <strong>{{ product.code }}</strong>
    </p>

    <h4>
      {{ product.type }} - {{ product.description }}
    </h4>

    <small>
      Estoque: {{ product.quantity }}
    </small>

    <small>
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
