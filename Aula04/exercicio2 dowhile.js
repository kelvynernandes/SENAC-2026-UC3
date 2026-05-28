let valor = 0
let maior = 0
let i = 0
do{
    valor = prompt("insira preço");
    i++
    if (valor > maior){
        maior = valor
    }
    }while (i <= 5)
console.log("o valor maior é " + (maior));




