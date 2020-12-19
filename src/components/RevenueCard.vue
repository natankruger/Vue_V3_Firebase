<template>
  <div class="card col-4 mx-auto mt-4 pt-2">
    <small>
      Você teve
    </small>
    <h4 class="mb-0">
      <strong>
        R$: {{ revenue.value > 0 ? revenue.value : 0 }}
      </strong>
    </h4>
    <small>
      de lucro com este produto
    </small>

    <p class="mt-4">
      Vendendo
      <strong>
        {{ revenue.outQuantity }}
      </strong>
      unidades
    </p>

    <p class="">
      O código dele é:
      <strong>{{ revenue.productCode }}</strong>
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
