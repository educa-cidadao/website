<template>
  <div>
    <nav-bar/>
    <app-perguntas/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import AppPerguntas from '~/components/AppPerguntas.vue'

export default {
  components: {
    NavBar,
    AppPerguntas,
  }
}

</script>

<style>

</style>
