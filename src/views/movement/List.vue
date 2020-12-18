<template>
  <h1>Movement list</h1>
  <section>
    <div v-for="(movement, key) in movements" :key="key">
      <p>
        <strong>Código do produto:</strong> {{ movement.productCode }} -
        <strong>Tipo:</strong> {{ movement.type }} -
        <strong>R$:</strong> {{ movement.value }} -
        <strong>Quantidade:</strong> {{ movement.quantity }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Movement } from '@/core/entities'
import { ChallengeApi } from '@/core/api'

export default class MovementListPage extends Vue {
  movements: Movement[] =[]

  mounted () {
    // eslint-disable-next-line
    ChallengeApi.MOVEMENT.get().then((value: any) => {
      this.movements = value
    })
  }
}
</script>

<style scoped>
</style>
