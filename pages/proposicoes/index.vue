<template>
<div>
  <nav-bar/>
    <list-projetos/>
</div>
    
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import ListProjetos from "~/components/ListProjetos.vue";

export default {
  components: {
    NavBar,
    ListProjetos
  }
};
</script>

<style>
</style>
