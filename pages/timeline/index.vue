<template>
  <body>
    <nav-bar/>
    <timeline-item v-for="item in $store.state.proposicoes" :key="item.sequencia" :item="item" />
  </body>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import TimelineItem from '~/components/TimelineItem.vue'
import axios from 'axios'

export default {
  components: {
    NavBar,
    TimelineItem
  },
  async fetch ({ store, params }) {
    let response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/proposicoes/14306/tramitacoes')
    // console.log(response.data);
    store.commit('SET_PROPOSICOES', response.data.dados)
  }
}
</script>

<style>
</style>
