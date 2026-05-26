// VARIÁVEL
let nomeUsuario = "kelvyn";

// CONSTANTE
const corOriginal = "blue";

// TIPOS DE DADOS
let idade = 17; // number
let estudante = true; // boolean
let cidade = "São Paulo"; // string

// OPERADORES
let anoAtual = 2026;
let anoNascimento = anoAtual - idade;

// PEGANDO O H1
const nome = document.getElementById("nome");

// MOSTRANDO O NOME
nome.innerHTML = nomeUsuario;

// COR ORIGINAL
nome.style.color = corOriginal;

// MOSTRANDO NO CONSOLE
console.log("Nome:", nomeUsuario);
console.log("Idade:", idade);
console.log("Estudante:", estudante);
console.log("Cidade:", cidade);
console.log("Ano de nascimento:", anoNascimento);

// EVENTO DO MOUSE
nome.addEventListener("mouseover", function(){

    nome.style.color = "cyan";

});

nome.addEventListener("mouseout", function(){

    nome.style.color = corOriginal;

});