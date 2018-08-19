import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai",
    "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const store = () => new Vuex.Store({
  state: {
    data: [],
    proposicoes: [],
    tramitacoes: [],
    dictionaryProposicoes: {},
    dictionaryTramitacoes: {}
  },
  mutations: {
    SET_PROPOSICOES (state, proposicoes) {
      state.proposicoes = proposicoes
    },
    SET_TRAMITACOES (state, tramitacoes) {
      tramitacoes.forEach( function(tramitacao) {
        tramitacao.dataHora = new Date(tramitacao.dataHora)
        tramitacao.ano = tramitacao.dataHora.getFullYear()
        tramitacao.dia = tramitacao.dataHora.getDay()
        tramitacao.mes = monthNames[tramitacao.dataHora.getMonth()]
      })
      state.tramitacoes = tramitacoes.reverse()
      state.dictionaryTramitacoes[tramitacoes[0].id] = tramitacoes
    },
    SET_PROPOSICAO (state, proposicao) {
      state.dictionaryProposicoes[proposicao.id] = proposicao
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
