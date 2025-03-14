
inicio
      inteiro num, contador, maior, menor
	escrever "Digita 10 números ao calhas: \n"  
      cont <- 1
      
    enquanto contador < 10 faz                              	
    ler num
    	
    	se contador = 1 entao
    		maior <- num
    		menor <- num
    	fimse
    	
    	se num > maior entao
    		maior<- num
    	fimse
    	
    	se num < menor entao
    		menor <- num
    	fimse
    	
    	cont <- cont + 1
    
    fimenquanto
    
fim
