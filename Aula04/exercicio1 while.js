let media = 0
let valor = 0
let soma = 0
let qtd = 0
while (qtd <= 5) {
    valor = prompt("insira a nota quantidade " + (qtd+1))
    soma += valor
    if(qtd == 5){
        media = soma / 6
        console.log("a média é igual a " + media)
        break
    }
} qtd++;



