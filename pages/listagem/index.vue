<template>
  <body>
    <nav-bar/>
    <item-list/>
  </body>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import ItemList from '~/components/ItemList.vue'

export default {
  components: {
    NavBar,
    ItemList
  }
}

</script>

<style>

</style>
