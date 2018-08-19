<template>
  <div>
    <nav-bar/>
    <div class="container proposicoes__container">
        <div class="row proposicoes__row">
            <div class="col-7 proposicoes__row__div bg-warning">
                <span> Data de hoje </span>
            </div>
        </div>
    </div>
    <div class="container proTra__container" style="background-color: #a4a59d!important;">
      <h3 class="container__projetos__title">Projetos em Tramitação</h3>
      <list-tramitacao v-for="item in $store.state.proposicoes" :key="item.id" :item="item"/>
    </div>
    <div class="container proTra__container" style="background-color: #8bb1b1!important;">
      <h3 class="container__projetos__title">Projetos em Sancionados</h3>
      <list-sancionados v-for="item in $store.state.proposicoes" :key="item.id" :item="item"/>
    </div>
    <div class="container proTra__container" style="background-color: #b98181!important;">
      <h3 class="container__projetos__title">Projetos em Vetados</h3>
      <list-sancionados v-for="item in $store.state.proposicoes" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import ListSancionados from '~/components/ListSancionados.vue'
import ListTramitacao from '~/components/ListTramitacao.vue'
import ListVetados from '~/components/ListVetados.vue'
import axios from 'axios'

export default {
  components: {
    NavBar,
    ListVetados,
    ListTramitacao,
    ListSancionados
  },
  async fetch({ store, route: { params: { id } } }) {
    let response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/proposicoes?ordem=DESC&ordenarPor=ano')
    var proposicoes = response.data.dados
    for (var index = 0; index < proposicoes.length; index++) {
      let proposicaoResponse = await axios.get(proposicoes[index].uri)
      proposicoes[index].detail = proposicaoResponse.data.dados
      store.commit('SET_PROPOSICAO', proposicaoResponse.data)
    }
    store.commit('SET_PROPOSICOES', proposicoes)
  }
}

</script>

<style>

</style>
