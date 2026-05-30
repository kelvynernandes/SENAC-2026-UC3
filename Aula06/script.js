const botao = document.getElementById('botao');

botão.addEventListener('click', function() {
    //getElementById
    const titulo = document.getElementById('titulo');
    // textContent
    titulo.textContent = "Novo Título";
    //getElementsByClassName
    conts paragrafos = document.getElementsByClassName('texto');
    paragrafos[0].textContent = "Parágrafo Alterado";
    //querySelector
    const segundoParagrafo = document.querySelector('.texto:nth-child(2)');