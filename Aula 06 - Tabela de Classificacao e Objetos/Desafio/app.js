//DECLARAÇÃO DOS JOGADORES {OBJETOS}
var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

var jogadores = [rafa, paulo]

//INICIO DO PROGRAMA
paulo.pontos = calculaPontos(paulo)
rafa.pontos = calculaPontos(rafa)

exibirJogadoresNaTela(jogadores)


//FUNÇÕES
function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

function exibirJogadoresNaTela(jogadores) {

    jogadores.forEach(jogador => {
        console.log("Calculando pontos de " + jogador.nome)
        jogador.pontos = calculaPontos(jogador)
        
    });

    var html = ""
    for(var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><input type='checkbox' id='ID" + i + "' value='"+ i + "'></td>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html

}

function adicionarVitoria(jogador) {
    jogador.vitorias++
}
function adicionarEmpate(jogador) {
    jogador.empates++
}
function adicionarDerrota(jogador) {
    jogador.derrotas++
}

function prepararJogo() {

    var players = validarCheckbox()

    if (players.length < 2) {
        alert('Você selecionou caixas de menos')
    } else if ( players.length > 2){
        alert('Você selecionou caixas de mais')
    } else {
        jogar(jogadores[players[0]], jogadores[players[1]])

    }
    
}

function validarCheckbox() {
    var caixasMarcadas = []
    
    for (let i = 0; i < jogadores.length; i++) {

        var caixa = document.getElementById("ID" + i)

        if (caixa.checked) {
            caixasMarcadas.push(caixa.value)  
        }

    }

    return caixasMarcadas
}

function jogar(jogador1, jogador2) {
    //LÓGICA DA PARTIDA
    const VALOR_MAX = 3
    const VALOR_MIN = 1
    var resultado = Math.floor(Math.random() * (VALOR_MAX - VALOR_MIN + 1)) + VALOR_MIN
    var resultadoDescrito = ""
    //CRITÉRIOS DE PONTUAÇÃO
    switch (resultado) {
        case 1:
            resultadoDescrito += jogador1.nome + " Ganhou\n" + jogador2.nome + " Perdeu"
            adicionarVitoria(jogador1)
            adicionarDerrota(jogador2)
            break

        case 2:
            resultadoDescrito += jogador1.nome + " Perdeu\n" + jogador2.nome + " Ganhou"
            adicionarDerrota(jogador1)
            adicionarVitoria(jogador2)
            break

        case 3:
            resultadoDescrito += "Houve um empate!"
            adicionarEmpate(jogador1)
            adicionarEmpate(jogador2)
            break

        default:
            console.log("Partida cancelada")
    }
    alert(resultadoDescrito)
    exibirJogadoresNaTela(jogadores)
}