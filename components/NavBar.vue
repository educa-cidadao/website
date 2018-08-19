<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">EducaCid</a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="nav-link" to="proposicoes">Proposições <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="listagem">Listagem <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="timeline">Timeline <span class="sr-only">(current)</span></router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Busca  " aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Enviar</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      ]
    }
  }
}
</script>
