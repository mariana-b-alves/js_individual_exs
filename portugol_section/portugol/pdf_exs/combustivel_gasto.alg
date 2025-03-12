
inicio
	real distancia, tempo, velocidade, litros, gastos

      escrever "Qual foi o tempo que o carro andou? \n"
      ler tempo
      
      escrever "A que velocidade o carro andou? \n"
      ler velocidade
      
      distancia <- tempo * velocidade
      escrever "O carro andou ", distancia, "km. \n"
      
      gastos <- distancia * 12
      escrever "O carro gastou ", gastos, " litros de combustível."
fim
