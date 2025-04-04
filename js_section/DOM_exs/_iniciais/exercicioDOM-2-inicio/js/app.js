let livros = [
            {
                title: 'Angular Com Typescript',
                author: "Yakov Fain",
                alreadyRead: true,
                imageUrl: 'angular.jpg',
            },
            {
                title: 'Blockchain com JS',
                author: "Bina Ramamurthy",
                alreadyRead: false,
                imageUrl: 'blockchain.jpg',
            },
            {
                title: 'Deep Learning com JS',
                author: "Various Authors",
                alreadyRead: true,
                imageUrl: 'deeplearning.jpg',
            },
            {
                title: 'Joy Of Javascript',
                author: "Luis Ascencio",
                alreadyRead: false,
                imageUrl: 'joj.jpg',
            },
            {
                title: 'React Hooks in Action',
                author: "John Larsen",
                alreadyRead: true,
                imageUrl: 'reacthooks.jpg',
            },
        ];

        let lista = document.querySelector('section');

        //Add an li to the end of the list
        
        //1 - Create the li
        let itemFim = document.createElement('article');
        
        //2 - Create text to the li
        itemFim.textContent = JSON.stringify(livros);

        //3 - Add it to the list
        lista.append(itemFim);     


        //I give up...