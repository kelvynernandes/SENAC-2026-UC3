let carrinho = [];
let idPedido = 1;

function addItem(nome, preco) {
    let item = carrinho.find(i => i.nome === nome);

    if (item) {
        item.qtd++;
        item.total = item.preco * item.qtd;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            qtd: 1,
            total: preco
        });
    }

    atualizar();
}

function calcularTotal() {
    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].total;
    }

    return total;
}

const calcularTaxa = (total) => total > 50 ? 0 : 5;

const formatar = (valor) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

const calcularDesconto = function (total, formaPagamento) {
    let percentual = 0;

    if (formaPagamento === 'dinheiro') percentual = 5;
    if (formaPagamento === 'pix') percentual = 10;

    return total * (percentual / 100);
};

function atualizar() {
    console.log(carrinho);

    const subtotal = calcularTotal();
    const taxa = calcularTaxa(subtotal);
    const desconto = calcularDesconto(subtotal, 'pix');
    const totalFinal = subtotal + taxa - desconto;

    console.log("Subtotal:", formatar(subtotal));
    console.log("Taxa:", formatar(taxa));
    console.log("Desconto:", formatar(desconto));
    console.log("Total Final:", formatar(totalFinal));
}