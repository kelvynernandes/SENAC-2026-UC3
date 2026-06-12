const escola = {
    alunos: [],
    apresentar(){
        return ` ${this.nome} - Total: ${this.alunos.length} alunos`
    
    
    }
}
const alunosIniciais = [
    {id: 1, nome: "João", idade: 20, curso: "JavaScript"},
    {id: 2, nome: "Maria", idade: 22, curso: "Python"},
    
]
escola.alunos = [...alunosIniciais];

function exibirAlunos(){ 
    const alunosDiv = document.getElementById("alunosList");
    if(escola.alunos.length === 0){
        alunosDiv.innerHTML = "<p>Nenhum aluno cadastrado.</p>";
     return
}
}
alunosDiv.innerHTML = escola.alunos.map (alunos =>
    `<div class = "aluno-item">
        <strong> ${alunos.nome}</strong> ${alunos.idade} anos | ${alunos.curso}
    </div>`
).join('');

document.getElementById("jsonnnDisplay").textContent =
JSON.stringify(escola.alunos, null, 2);

function adicionarAluno(){
    const novoId = escola.alunos.length + 1;
    const novoAluno = {
        id: novoId,
        nome: `Aluno ${novoId}`,
        idade: Math.floor(Math.random() * 30) + 18,
        curso: ["HTML/CSS", "React", "Node.js"][Math.floor(Math.random() * 4)]    };  
    escola.alunos.push(novoAluno);
    exibirAlunos();
}
function salvarJSON(){
    const jsonString = JSON.stringify(escola.alunos, null, 2);
    const blob = new Blob([jsonString], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "alunos.json";
    a.click();
    URL.revokeObjectURL(url);
}