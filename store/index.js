import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const store = () => new Vuex.Store({
  state: {
    data: [],
    proposicoes: []
  },
  mutations: {
    SET_PROPOSICOES (state, proposicoes) {
      proposicoes.forEach( function(proposicao) {
        proposicao.dataHora = new Date(proposicao.dataHora)
        proposicao.ano = proposicao.dataHora.getFullYear()
        proposicao.dia = proposicao.dataHora.getDay()
        proposicao.mes = monthNames[proposicao.dataHora.getMonth()]
      })

      state.proposicoes = proposicoes.reverse()
    }
  },
  actions: {
    async getProposicoes({ commit }) {
      const response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/proposicoes')
      commit('SET_PROPOSICOES', response.data)
    }
  }
})

export default store
