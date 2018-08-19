<template>
  <div>
    <nav-bar/>
    <timeline-item v-for="item in tramitacoes" :key="item.sequencia" :item="item" />
  </div>
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
  computed: {
    tramitacoes() {
      return this.$store.state.tramitacoes
    }
  },
  async fetch ({ store, route: { params: { id } } }) {
    let response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/proposicoes/' + id + '/tramitacoes')
    store.commit('SET_TRAMITACOES', response.data.dados)
  }
}
</script>

<style>
</style>
