<template>
  <div class="card col-md-4 col-12 mx-auto mt-4 pt-2">
    <small>
      Você teve
    </small>
    <h4 class="mb-0">
      <strong id="rev-value">
        R$: {{ revenue.value > 0 ? revenue.value : 0 }}
      </strong>
    </h4>
    <small>
      de lucro com este produto
    </small>

    <p class="mt-4">
      Vendendo
      <strong id="rev-quantity">
        {{ revenue.outQuantity }}
      </strong>
      unidades
    </p>

    <p>
      O código dele é:
      <strong id="rev-code">{{ revenue.productCode }}</strong>
    </p>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    revenue: {}
  }
})
export default class RevenueCard extends Vue {
  revenue!: {}
}
</script>

<style scoped lang="scss">

</style>
