
inicio 
    inteiro contador, fatorial, n
    caracter resp

    resp <- "S"
 
    enquanto resp = "S" ou resp = "s" faz 
        fatorial <- 1 
        escrever "Qual é o fatorial deste número ? " 
        ler n    
    
    para Contador de 1 até N passo 1 
        fatorial <- fatorial * contador
    proximo
    
        escrever "Fatorial de ", n, " é igual a ", fatorial, ".\n"
        escrever "Deseja Continuar ? S/N \n"
    
        ler resp
        
    fimenquanto 
 
fim
