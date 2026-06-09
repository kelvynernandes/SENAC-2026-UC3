// Seleciona os elementos da página
const elemento = document.getElementById("meuElemento");
const texto = document.getElementById("meuTexto");

// Adiciona um evento de clique ao elemento
elemento.addEventListener("click", function () {

    // Verifica qual classe o elemento possui
    if (elemento.classList.contains("estado-inicial")) {

        // Inicial → Vermelho
        elemento.classList.remove("estado-inicial");
        elemento.classList.add("estado-vermelho");

        texto.innerHTML = "O estado atual é: <strong>Perigo (Vermelho)!</strong>";

    } else if (elemento.classList.contains("estado-vermelho")) {

        // Vermelho → Verde
        elemento.classList.remove("estado-vermelho");
        elemento.classList.add("estado-verde");

        texto.innerHTML = "O estado atual é: <strong>Liberado (Verde)!</strong>";

    } else {

        // Verde → Inicial
        elemento.classList.remove("estado-verde");
        elemento.classList.add("estado-inicial");

        texto.innerHTML = "O estado atual é: Inicial.";
    }

});