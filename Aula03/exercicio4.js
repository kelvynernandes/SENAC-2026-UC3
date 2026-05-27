let senha = "Senac@123"
let entrada = "Senac@123"
if (entrada == senha){
  console.log("Autwnticação bem sucedida")

}else{
  console.log("Autenticação falhou")
}

switch(senha){
  case entrada:
    console.log("Autenticação bem sucedida") 
    break;
    default:
      console.log("Autenticação falhou")
      break;
} 
  


