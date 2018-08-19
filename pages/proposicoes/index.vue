<template>
  <body>
    <nav-bar/>
    <list-projetos/>
  </body>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import ListProjetos from '~/components/ListProjetos.vue'

export default {
  components: {
    NavBar,
    ListProjetos,
  }
}

</script>

<style>

</style>
