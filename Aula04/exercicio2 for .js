let valor = 0
for (let i = 1; i <=5 ; i++) {
    valor = prompt("insira a nota nº" + (i));
    if (valor > maior){
        maior = valor
    }
}
console.log("a maior nota é " + maior)




