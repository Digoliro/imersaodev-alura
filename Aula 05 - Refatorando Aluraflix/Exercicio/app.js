function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme') 
    var filmeFavorito = campoFilmeFavorito.value
    
    if (filme.startsWith('http') && filme.endsWith('.jpg')) {
      listarFilmesNaTela(filmeFavorito)  
    } else {
      alert("Imagem inválida!")
    }
    campoFilmeFavorito.value = ""
  }
  
  function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector("#listaFilmes")
    var elementoFilme = filme
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }
  