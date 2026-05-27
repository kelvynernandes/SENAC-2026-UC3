let pedido_cliente = 35
if (pedido_cliente < 50){
  pedido_cliente = (pedido_cliente /100) * 10
  console.log("O valor do pedido:" + pedido_cliente)  

}

switch(pedido_cliente){
  case 50:
    console.log("O valor do pedido:" + pedido_cliente/100 * 10)
    break;
    case 51:
      pedido_cliente = (pedido_cliente /100) * 10
      console.log("O valor do pedido:" + pedido_cliente)  
      break;
      default:
        console.log("O valor do pedido:" + pedido_cliente)
        break;
}