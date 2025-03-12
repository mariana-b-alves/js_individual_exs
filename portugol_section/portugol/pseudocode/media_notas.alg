
inicio
	inteiro val1, val2, media
      escrever "Escreve as tuas notas aqui", "\n"
      ler val1, val2
      
      media <- val1 + val2
      media <- media / 2
      
      escrever "A media das duas notas é ", media, "\n"
      
      se media <= 4 entao
          escrever "Que pena! Chumbaste de ano."
      fimse
      
     se media >= 4 e media < 7 entao
          escrever "Vais ter que repetir os exames."
     fimse
     
     se media >= 7 entao 
         escrever "Boa! Passaste de ano. Parabéns!"
     fimse
      
fim
