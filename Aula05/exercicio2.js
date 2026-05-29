// Cardápio
const bebidas = [
    [1, "Coca-Cola", 8],
    [2, "Guaraná", 7],
    [3, "Suco", 6],
    [4, "Água", 4]
];

// Mostrar produtos
for (const bebida of bebidas) {
    console.log(
        "ID:", bebida[0],
        "| Produto:", bebida[1],
        "| Valor: R$", bebida[2]
    );
}

// Verificar se Coca-Cola existe
let encontrada = false;

for (const bebida of bebidas) {
    if (bebida[1] === "Coca-Cola") {
        encontrada = true;
    }
}

// Resultado
if (encontrada) {
    console.log("Coca-Cola existe no array");
} else {
    console.log("Coca-Cola não existe no array");}