
      let idade = 6
      if (idade < 16){
        console.log("não vota")

      }else if (idade <18){
        console.log("voto opcional")

      }else if (idade <70){
        console.log("voto obrigatório")
      }else{
        console.log("voto opcional")
      }
      
      switch(idade){
        case 16:

          console.log("voto opcional")
        break
        case 17:
          console.log("voto opcional")
          break
        case 18:
          console.log("voto obrigatório")
          break
        
      }
    
