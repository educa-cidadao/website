<template>
<div>
<div class="row m-1">
	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary">
		  	<span>Você sabia que a leitura e a escrita são reconhecidas como um direito pela lei de Nº 13.696, de 12 de Julho de 2018?</span>
		  </div>
		  <div class="back bg-warning"><span>Essa lei institui a Política Nacional de Leitura e Escrita e tem como uma de suas diretrizes a universalização do direito ao acesso ao livro, à leitura, à escrita, à literatura e às bibliotecas.</span></div>
		</div>
	</div>
	<!-- exemplo -->
	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary">
		  	<span>Você já pensou em ser corretor de moda?</span>
		  </div>
		  <div class="back bg-warning"><span> A lei 13.695, de 12 de Julho de 2018 regula o exercício da profissão de corretor de moda, desde que ele possua diploma de conclusão de ensino médio e diploma de conclusão de curso específico para formação de corretor de moda</span></div>
		</div>	
	</div>
	
	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary"><span>Você já ouviu falar no Dia da Amizade Brasil-Argentina?</span></div>
		  <div class="back bg-warning"><span> A lei de Nº 13.664, de 14 de Maio de 2018 instituiu esse dia a ser celebrado todo dia 30 de novembro. Será que vai ter comemoração?</span></div>
		</div>	
	</div>

	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary"><span>Você sabia que ser doador de medula óssea pode te isentar do pagamento de taxa de inscrição em concursos públicos?</span></div>
		  <div class="back bg-warning"><span>De acordo com a Lei 13.656, de 30 de Abril de 2018 doadores de medula óssea em entidades reconhecidas pelo Ministério da Saúde, entre outros candidatos especificados nesta mesma lei, são isentos de pagar a taxa.</span></div>
		</div>	
	</div>
	
	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary"><span>Solicitação de transporte para locomoção via aplicativos é regulamentado por lei?</span></div>
		  <div class="back bg-warning"><span>Sim. A Lei Nº 13.640, de 26 de Março de 2018 altera a Lei Nº 12.587, de 3 de Janeiro de 2012, regulamentando a realização de viagens individualizadas ou compartilhadas solicitadas exclusivamente por usuários previamente cadastrados em aplicativos ou outras plataformas de comunicação em rede.</span></div>
		</div>	
	</div>

	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary"><span>Você sabia que existe um Projeto de Lei que dispõe da desestatização das Centrais Elétricas Brasileiras S.A?</span></div>
		  <div class="back bg-warning"><span>Essa desestatização deverá ser executada na modalidade de aumento do capital social mediante subscrição pública de ações ordinárias.</span></div>
		</div>	
	</div>

	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary"><span>O que faz um Analista em Tecnologia da Informação?</span></div>
		  <div class="back bg-warning"><span>O Projeto de Lei 6788/2017 define como suas atribuições  atividades de planejamento, supervisão, coordenação e controle dos recursos de tecnologia da informação relativos ao funcionamento da administração pública federal, no âmbito do Poder Executivo federal</span></div>
		</div>	
	</div>
	
	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary"><span>Você sabe para onde vai a arrecadação do dinheiro de apostas e bilhetes adquiridos nas loterias?</span></div>
		  <div class="back bg-warning"><span>A Medida Provisória Nº 841, de 11 de Junho de 2018 constitui a exploração de loterias, nos termos da legislação como um recurso do Fundo Nacional de Segurança Pública, destinado a segurança pública e de prevenção à violência.</span></div>
		</div>	
	</div>

	<div class="col-md-6 col-lg-4 mt-3">
		<div class="card">
		  <div class="front bg-primary"><span>Você sabia que o direito de posse ou de propriedade pode ser extinto?</span></div>
		  <div class="back bg-warning"><span>A PEC 10/2015 dispõe a ação pública de extinção caso essa posse seja proveniente de atividade criminosa, improbidade administrativa ou enriquecimento ilícito.</span></div>
		</div>	
	</div>
</div>
</div>
</template>
<script>

</script>

<style lang="css">
body{
	background: #f7f7f7;
}

.card {
  position: relative;
  min-width: 20	rem; height: 12rem;
  perspective: 30rem;
  border-radius: 30px;
}
.front, .back {
  position: absolute;
  width: 100%; height: 100%;
  transition: transform .5s;
  backface-visibility:hidden;
  text-align: center;
  border-radius: 30px;
  display: flex;
  align-items: center; 
}
.front { 
  color: white;
  font-weight: bold;
  padding: 25px;
}
.back {
  font-weight: bold;
  color: black;
  font-size: 14px;
  padding: 15px;
  transform: rotateY(180deg);
}

.card:hover .front{ transform: rotateY(180deg); }
.card:hover .back { transform: rotateY(360deg); }
</style>
