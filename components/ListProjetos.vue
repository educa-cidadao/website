<template>

<div class="container-fluid">

  <div class="container proposicoes__container">
      <div class="row proposicoes__row">
          <div class="col-7 proposicoes__row__div">
              <span>{{ dinamic_title }}</span>
          </div>
      </div>
  </div>
  <div class="bg-secondary container proTra__container">
  <h3 class="container__projetos__title">Projetos em Tramitação</h3>

  <div class="row proposicoes__row">
    <div class="col-xl-6 col-md-6 col-sm-12 container__projetos__col">
      <span>Projeto 1</span>
    </div>
    <div class="col-xl-6 col-md-6 col-sm-12 container__projetos__col">
      <span>Projeto 1</span>
    </div>
  </div>

  </div>

</div>

</template>

<script>
export default {
  data() {
    return {
      dinamic_title: '19 de Agosto de 2018',  
      title: '',
      card_subtitle: '',
      text: ''
    }
  },
  created: async function() {
    
    // this.dinamic_title = dinamic_title


    // let data = await this.$axios.$get('https://dadosabertos.camara.leg.br/api/v2/proposicoes?ordem=ASC&ordenarPor=id')
    // let dataProposition = await this.$axios.$get('https://dadosabertos.camara.leg.br/api/v2/proposicoes/14306')
    // this.title = dataProposition.dados.descricaoTipo
    // this.card_subtitle = dataProposition.dados.ementa
    // this.text = dataProposition.dados.ementaDetalhada
  }
}
</script>

<style lang="css">
.proposicoes__container{
  margin-top: 20px;
}
.proposicoes__row {
  justify-content: center;
}
.proposicoes__row__div{
    background:  #1D9A43;
    color:  white;
    height: 110px;
    text-align: center;
    position: relative;
}
.proposicoes__row__div span{
    font-family: Roboto;
    font-size: 36px;
    position: absolute;
    top: 23%;
    width: 100%;
    left: 0;
}
.container__projetos__title{
  text-align: center;
    font-family: Roboto;
    font-size: 24px;
    color: white;
    padding: 20px 0;
}
.proTra__container{
  margin-top: 3vw;
}
.container__projetos__col{
  text-align: center;
  padding: 20px 0;
}
.container__projetos__col span{
  color: white;
}
</style>
