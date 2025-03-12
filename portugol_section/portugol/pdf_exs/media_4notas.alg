
inicio
	real nota1, nota2, nota3, nota4, soma, media
      escrever "Escreve as notas que tiveste nos testes. \n"
      ler  nota1, nota2, nota3, nota4
      
      soma <- nota1 + nota2 + nota3 + nota4
      media <- soma / 4
      
      escrever "A tua média é de ", media, ".\n"
      
      se media <= 5 entao
          escrever "Que pena! Chumaste de ano."
      senao
          escrever "Parabéns! Passaste de ano."
      fimse
fim
