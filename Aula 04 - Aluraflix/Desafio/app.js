var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BN2I5YzFlYWEtZjRhNy00ZmQzLWJhNTktZGIwYjFjODdmNDgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTY3MDMyMTYxMl5BMl5BanBnXkFtZTcwMjk0NzI0MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var listaNomeFilmes = ["Senhor dos Anéis", "Monstros S.A", "Rocky: Um Lutador", "Clube da Luta", "Madagascar", "Escorregando para a Glória"]

var nomesFilmes = ""
for (var i = 0; i < listaNomeFilmes.length; i++) {
  nomesFilmes += "\n" + (i+1) + " - " + listaNomeFilmes[i]
}
var maxEscolhas = 3
var filmesEscolhidos = []
var opAtual

while (maxEscolhas > 0 && opAtual != 0) {

  opAtual = prompt("Qual filme você escolhe para aparecer? Você tem " + maxEscolhas + " escolhas" + nomesFilmes + "\n0 - Sair")
  
  if (opAtual != 0) {
    var flgEscolhido
    for (var i = 0; i < filmesEscolhidos.length; i++){
      if (listaNomeFilmes[opAtual-1] == filmesEscolhidos[i]){
        alert("Você já escolheu esse filme! Escolha outro")
        flgEscolhido = true
      } else {
        flgEscolhido = false
      }
    }
    
    if (flgEscolhido) {
      continue
    }
    
    if (opAtual > listaNomeFilmes.length || opAtual < 0){
      alert("Opção inválida! Escolha novamente")
    } else {
      filmesEscolhidos.push(listaNomeFilmes[opAtual-1])
      document.write("<img src=" + listaFilmes[opAtual-1] + ">")
      document.write("<p>" + listaNomeFilmes[opAtual-1] + "</p>")
      maxEscolhas--
    }
  } else {
      alert("Saindo...")
    break
  }
}

if (maxEscolhas == 0) {
  alert("Estes são os filmes que você escolheu:")
}