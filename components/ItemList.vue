<template>
  <div class="row m-1">
    <div class="col-lg-4">
      <div class="card mx-1 mt-3">
        <div class="card-body">
          <h5 class="card-title"> {{ title }} </h5>
          <h6 class="card-subtitle mb-2 text-muted"> {{ card_subtitle }} </h6>
          <p class="card-text"> {{ text }} </p>
          <a href="#" class="card-link">Linha do tempo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      card_subtitle: '',
      text: ''
    }
  },
  created: async function() {
    let data = await this.$axios.$get('https://dadosabertos.camara.leg.br/api/v2/proposicoes?ordem=ASC&ordenarPor=id')
    let dataProposition = await this.$axios.$get('https://dadosabertos.camara.leg.br/api/v2/proposicoes/14306')
    console.log(dataProposition)
    this.title = dataProposition.dados.descricaoTipo
    this.card_subtitle = dataProposition.dados.ementa
    this.text = dataProposition.dados.ementaDetalhada
  }
}
</script>

<style lang="css">
</style>
