const botao = document.getElementById('meuBotao');
const caixa = document.getElementById('minhaCaixa');    
const selecao = document.querySelector('meuSelect');
const formulario = document.getElementById('MeuForm');
const campoNome = document.getElementById('nome');

botao.addEventListener ('click', function () {
  alert ('Você clicou no botão!');
});

 caixa.addEventListener('mouseover', function() {
     caixa.style.backgroundColor = 'lightblue';
 });

 selecao = document.getElementById('meuSelect');
 selecao.addEventListener('change', function(event) {
    console.log('Cor Selecionada:', event.target.value);
 });
 function paginaCarregada() {
    alert('A página foi totalmente carregada!');
}
campoNome. addEventListener('Focus', (evento) => {
    event.target.style.backgroundColor = '#eef2ff';
});
campoNome.addEventListener('blur', (evento) => {
   if (evento.target.value.trim() === '') {
      alert('O campo nome não pode estar vazio!');
    }
    evento.target.style.backgroundColor = ''; 
}
);
formulario.addEventListener('reset', () => {
    alert('O formulário será limpo.');

});
formulario.addEventListener('submit', (evento) => {
  if (campoNome.value.trim() === '') {
    alert('Preencha o formulário antes de enviar .');
    evento.preventDefault(); 
  }
  });
