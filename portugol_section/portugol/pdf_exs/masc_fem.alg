
inicio
	texto nome, genero
      escrever "Introduza o seu nome: \n"
      ler nome
      
      escrever "Introduza o seu género - masculino ou feminino: \n"
      ler genero
      
      se genero = "feminino" ou genero = "Feminino" ou genero = "f" ou genero = "F" entao
          escrever "Exma. Sra. ", nome
      senao
          escrever "Exmo. Sr. ", nome
      fimse
      

fim
