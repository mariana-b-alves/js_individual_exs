//Array with information about the following books:

let books = [
            {
                title: 'Angular Com Typescript',
                author: "Yakov Fain",
                alreadyRead: true,
                imageUrl: '/_iniciais/exercicioDOM-2-inicio/livros/angular.jpg',
            },
            {
                title: 'Blockchain com JS',
                author: "Bina Ramamurthy",
                alreadyRead: false,
                imageUrl: '/_iniciais/exercicioDOM-2-inicio/livros/blockchain.jpg',
            },
            {
                title: 'Deep Learning com JS',
                author: "Various Authors",
                alreadyRead: true,
                imageUrl: '/_iniciais/exercicioDOM-2-inicio/livros/deeplearning.jpg',
            },
            {
                title: 'Joy Of Javascript',
                author: "Luis Ascencio",
                alreadyRead: false,
                imageUrl: '/_iniciais/exercicioDOM-2-inicio/livros/joj.jpg',
            },
            {
                title: 'React Hooks in Action',
                author: "John Larsen",
                alreadyRead: true,
                imageUrl: '/_iniciais/exercicioDOM-2-inicio/livros/reacthooks.jpg', //Original code changed as I have tonnes and tonnes of subfolders 
            },
        ];

//Select section from the original HTML document
let section = document.querySelector("section");

//If i is more than 0, under the length of the array, and increments..
for (let i = 0; i < books.length; i++) {  
    //...Create an article inside 
    let article = document.createElement("article");
    //...Create a variable (bookArray) containing everything inside the books variable
    let bookArray = books[i];


  //Gather info from bookArray and add it to the original HTML
  //Rather than writing everything by hand, by adding ${variable.nestedArrayItem},
  //the information is put in its respective place with minimal coding
  //Also, I didn't add classes. No need, imo. :D
  article.innerHTML += `
    <h1>${bookArray.title}</h1>
    <img src='${bookArray.imageUrl}' alt='${bookArray.title}'>
    <p>${bookArray.author}</p>
    `;

    //If the book was already read, then...
    if (bookArray.alreadyRead == true) {
        //Add the following text directly to the original HTML
        article.innerHTML += `<p>Already Read: ✔️</p>`
    } else { //If not / is false, then...
        //Add the following text directly to the original HTML
        article.innerHTML += `<p>Already Read: ✖️</p>`
    }
    //Add all the content from the article variable to our section (and, therefore, to the HTML)
    section.append(article);
 
} //Code done!

