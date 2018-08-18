<template>
  <div>
    <nav-bar/>
    <item-list/>
  </div>
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
