const precos = [10.50, 25.30, 15.75, 8.99, 22.40];

//soma total
let soma = 0;
for (let i = 0; i < precos.length; i++) {
    if (i % 2 === 0 ){ // indice par
        soma_par += precos[i];
    }
}

// soma índices ímpares
let soma_impar = 0;
for (let i = 0; i < precos.length; i++) {
    if (i % 2 !== 0 ){ // indice ímpar
        soma_impar += precos[i];
    }
}