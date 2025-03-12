inicio
    inteiro baseMaior, baseMenor, altura, resultado, produto, area
    escrever "Introduz os comprimentos das bases do trapézio. \n"
    ler baseMaior, baseMenor
    
    resultado <- baseMaior + baseMenor
    escrever "A soma das duas bases é de ", resultado, " cm.\n"
    
    escrever "Introduz a altura do trapézio. \n"
    ler altura
    
    produto <- resultado * altura
    
    area <- produto / 2
    
    
    escrever "A área do teu trapézio é ", area, " cm3."
    
fim 