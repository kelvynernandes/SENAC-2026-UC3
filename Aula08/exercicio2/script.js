// Pega a hora atual do computador do usuário
const horaAtual = new Date().getHours();

// Seleciona os elementos HTML
const msgDia = document.getElementById("msg-dia");
const msgNoite = document.getElementById("msg-noite");

// Verifica o horário
if (horaAtual < 18) {
    // Mostra a mensagem de dia
    msgDia.classList.add("visivel");
} else {
    // Mostra a mensagem de noite
    msgNoite.classList.add("visivel");
}