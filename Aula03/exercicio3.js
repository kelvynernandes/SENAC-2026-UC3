const dinheiro  = 1
const Crédito= 2
const Débito= 3
const Pix = 4

if (metodo_pagamento== 1){
  console.log("você escolheu dinheiro")
}else if (metodo_pagamento== 2){
  console.log("você escolheu crédito")     /*correto dessa maneiro*/
}else if (metodo_pagamento== 3){
  console.log("você escolheu débito")
}else if (metodo_pagamento== 4){
  console.log("você escolheu pix")

}else if (console.log("método de pagamento não reconhecido")){}

/*professora,*/
let metodo_pagamento = 1

switch(metodo_pagamento){
  case 1:
    console.log("Pagamento em dinheiro")
    break;
    case 2:
      console.log("Pagamento em cartao")
      break;
      case 3:
      default:
        console.log("Pagamento em pix")
        break;

        

}
  



    