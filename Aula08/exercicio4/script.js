// Pega o campo de busca e a lista de produtos
const campoBusca = document.getElementById("campoBusca");
const listaProdutos = document.getElementById("listaProdutos");
const produtos = listaProdutos.getElementsByClassName("produto");

// Executa sempre que o usuário digita algo
campoBusca.addEventListener("input", function () {

    // Converte o texto digitado para minúsculas
    const textoDigitado = campoBusca.value.toLowerCase();

    // Percorre todos os produtos
    for (let i = 0; i < produtos.length; i++) {

        const produto = produtos[i];

        // Obtém o nome do produto em minúsculas
        const textoProduto = produto.textContent.toLowerCase();

        // Verifica se o texto digitado existe no nome do produto
        if (textoProduto.includes(textoDigitado)) {

            // Mostra o produto
            produto.classList.remove("oculto");

        } else {

            // Esconde o produto
            produto.classList.add("oculto");
        }
    }
})