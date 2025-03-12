
inicio
	real celsius, subtracao, multiplicacao, fahrenheit
      escrever "Introduz um número para converter a temperatura de Fahrenheit para Celsius. \n"
      ler fahrenheit
      
      
      subtracao <- fahrenheit - 32
      multiplicacao <- subtracao * 5
      celsius <- multiplicacao / 9
      
      escrever "A temperatura ", fahrenheit, " em Celsius é de ", celsius, "ºC."
fim
