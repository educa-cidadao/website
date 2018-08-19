<template>

<div class="container-fluid">

  <div class="container proposicoes__container">
      <div class="row proposicoes__row">
          <div class="col-7 proposicoes__row__div bg-warning">
              <span>{{ dinamic_title }}</span>
          </div>
      </div>
  </div>
  <div class="container proTra__container" style="background-color: #a4a59d!important;">
  <h3 class="container__projetos__title">Projetos em Tramitação</h3>

  <div class="row proposicoes__row">
    <div class="col-xl-4 col-md-4 col-sm-12 container__projetos__col">
      <div class="container__projetos__col--item">
        <span class="container__projetos__col__span">{{ siglaTipo +" "+ numero + "/" + ano }}</span>
      </div>
    </div>
    <div class="col-xl-8 col-md-8 col-sm-12 container__projetos__col">
      <div class="container__projetos__col--item">
        <span class="container__projetos__col__span-2">{{ ementa }}</span>
      </div>
    </div>

  </div>


  </div>

    <div class="container proTra__container" style="background: #8bb1b1;">
  <h3 class="container__projetos__title">Projetos Sancionados</h3>

  <div class="row proposicoes__row">
    <div class="col-xl-4 col-md-4 col-sm-12 container__projetos__col">
      <div class="container__projetos__col--item">
        <span class="container__projetos__col__span"> {{ siglaTipo +" "+ numero + "/" + ano }} </span>
      </div>
    </div>
    <div class="col-xl-8 col-md-8 col-sm-12 container__projetos__col">
      <div class="container__projetos__col--item">
        <span class="container__projetos__col__span-2">{{ ementa }}</span>
      </div>
    </div>

  </div>


  </div>

    <div class="container proTra__container" style="background: #b98181;">
  <h3 class="container__projetos__title">Projetos Vetados</h3>

  <div class="row proposicoes__row">
    <div class="col-xl-4 col-md-4 col-sm-12 container__projetos__col">
      <div class="container__projetos__col--item">
        <span class="container__projetos__col__span"> {{ siglaTipo +" "+ numero + "/" + ano }} </span>
      </div>
    </div>
    <div class="col-xl-8 col-md-8 col-sm-12 container__projetos__col">
      <div class="container__projetos__col--item">
        <span class="container__projetos__col__span-2">{{ ementa }}</span>
      </div>
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
      ementa: '',
      numero: '',
      ano: '',
      siglaTipo: '',
    }
  },
  created: async function() {
    
    // this.dinamic_title = dinamic_title


    let dataProposition = await this.$axios.$get('https://dadosabertos.camara.leg.br/api/v2/proposicoes/14306')
    this.ementa = dataProposition.dados.ementa
    this.numero = dataProposition.dados.numero
    this.ano = dataProposition.dados.ano
    this.siglaTipo = dataProposition.dados.siglaTipo

  },
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
  padding: 0 35px;
  border-radius: 20px;
}
.container__projetos__col{
  text-align: center;
  padding: 20px 0;
}
.container__projetos__col__span, .container__projetos__col__span-2{
      color: white;
    font-family: Arial;
    font-size: 26px;
}
.container__projetos__col__span-2{
  font-size: 18px;
}
.container__projetos__col--item{
    width: 97%;
    margin: 0 auto;
    border: 2px solid white;
    overflow: auto;
    min-height: 100%;
}
</style>
