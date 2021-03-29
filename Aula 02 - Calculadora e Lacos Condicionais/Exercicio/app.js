var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))


var operacao = prompt("Escolha sua opção: \n 1 para fazer uma divisão,\n 2 para multiplicação,\n 3 para soma, \n 4 para subtração")

if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if(operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write("<h2>OPÇÃO INVÁLIDA<h2>")
}


//if = se
//else = senão
//else if = senão se
