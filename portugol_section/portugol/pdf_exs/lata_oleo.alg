
inicio
	inteiro raio, altura
      escrever "Introduz o raio e a altura da tua lata de óleo. \n"
      ler raio, altura
      
      real circulo, quadrado, volume
      
      circulo <- 3.14159 * raio
      quadrado <- circulo ^ 2
      volume <- quadrado * altura
      
      
      escrever "O volume da lata de óleo é ", volume, " cm3. \n"
fim
