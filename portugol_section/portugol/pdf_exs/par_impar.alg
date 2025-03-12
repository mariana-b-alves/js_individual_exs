
inicio
	inteiro num, par
      escrever "Escreve um número:", "\n"
      ler num
      
      par <- num % 2
      
      se par = 0 entao
          escrever "O número ", num, " é par."
      senao 
          escrever "O número ", num, " é ímpar."
      fimse
fim
