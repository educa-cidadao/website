<template>
<div class="row proposicoes__row">
  <div class="col-xl-4 col-md-4 col-sm-12 container__projetos__col">
    <div class="container__projetos__col--item">
      <span class="container__projetos__col__span">
            {{ item.detail.siglaTipo + " " + item.detail.numero + "/" + item.detail.ano }}
          </span>
    </div>
  </div>
  <div class="col-xl-8 col-md-8 col-sm-12 container__projetos__col">
    <div class="container__projetos__col--item">
      <span class="container__projetos__col__span-2">{{ item.detail.ementa }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
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
