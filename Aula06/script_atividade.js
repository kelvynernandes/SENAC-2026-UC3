// Pega os elementos do HTML
const botao = document.getElementById("meuBotao");
const caixa = document.getElementById("minhaCaixa");
const selecao = document.getElementById("meuSelect");
const formulario = document.getElementById("MeuForm");
const campoNome = document.getElementById("nome");

// Executa quando a página termina de carregar
function paginaCarregada() {
    alert("Página carregada com sucesso!");
}

// Evento de clique
botao.addEventListener("click", function () {
    alert("Você clicou no botão!");
});

// Evento de passar o mouse
caixa.addEventListener("mouseover", function () {
    caixa.style.backgroundColor = "lightblue";
});

// Evento de sair com o mouse
caixa.addEventListener("mouseout", function () {
    caixa.style.backgroundColor = "";
});

// Evento de mudança no select
selecao.addEventListener("change", function (event) {
    console.log("Opção escolhida:", event.target.value);
});

// Evento de foco no campo
campoNome.addEventListener("focus", function (event) {
    event.target.style.backgroundColor = "#eef2ff";
});

// Evento quando sai do campo
campoNome.addEventListener("blur", function (event) {
    if (event.target.value.trim() === "") {
        alert("O campo nome não pode ficar vazio!");
    }

    event.target.style.backgroundColor = "";
});

// Evento de limpar formulário
formulario.addEventListener("reset", function () {
    alert("O formulário será limpo.");
});

// Evento de envio do formulário
formulario.addEventListener("submit", function (event) {

    // Captura o valor digitado
    const nome = campoNome.value;

    // Validação
    if (nome.trim() === "") {
        alert("Digite seu nome antes de enviar.");

        // Impede o envio
        event.preventDefault();
    } else {
        alert("Formulário enviado com sucesso!");
    }
});