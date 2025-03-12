inicio
    inteiro alunos
    escrever "Quantos alunos a turma tem? \n"
    ler alunos
    
    real somanotas <- 0
    real nota <- 0
    inteiro contador <- 1
    
    repete 
        escrever "Indique a nota do aluno ", contador, ": "
        ler nota
        somanotas <-somanotas + nota
        contador <- contador + 1
        
    ate contador > alunos
    
    escrever "A média da turma é de: ", somanotas / alunos, "."
        
fim
