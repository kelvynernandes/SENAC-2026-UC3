function mudarestilo() {
    const botao = document.getElementById("meuBotao");

    botao.style.backgroundColor = "red";
    botao.style.color = "white";
    botao.style.padding = "15px 30px";
    botao.style.border = "none";
    botao.style.borderRadius = "5px";
}

let posicao = 0;
const caixa = document.getElementById("caixa");

const meuIntervalo = setInterval(mover, 10);

function mover() {
    if (posicao >= 300) {
        clearInterval(meuIntervalo);
    } else {
        posicao += 2;
        caixa.style.left = posicao + "px";
    }
}