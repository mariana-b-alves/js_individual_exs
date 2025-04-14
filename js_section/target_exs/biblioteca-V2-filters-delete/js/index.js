//?DEFINE LOCAL VARIS.
let grid = document.getElementById('grid');
let filters = document.getElementById('filters')

//changeEvent = muda a cada introdução de caracter (melhor para forms)
//inputEvent = alterar o valor do input (input type = text; textarea...)

//?APP EVENTS
filters.addEventListener('click', filterEvents, false);
filters.addEventListener('input', filterEvents, false);
grid.addEventListener('click', gridEvents, false)

//?BUSINESS LOGIC

// 1 - Add a filter section, so the user can filter books by already read, not read, all, and by the title / author of the book.
function filterEvents(e){
    let el = e.target;

    if(el.id === 'allBtn'){
        showBooks(getBooks());
    }

    if(el.id === 'readBtn'){
        showBooks(getReadBooks());
    }

    if(el.id === 'notReadBtn'){
        showBooks(getNotReadBooks());
    }

    if((el.id === 'searchTxt') && (e.type === 'input')){
        let text = el.value.toLowerCase();
        showBooks(getBooksByTitle(el.value));
    }
}

function gridEvents(e){
    console.log(e)
    if((e.target.nodeName === 'P') && (e.target.textContent.search('✅') > -1)){
        showBooks(getReadBooks());
    }

    if((e.target.nodeName === 'P') && (e.target.textContent.search('❌') > -1)){
        showBooks(getNotReadBooks());
    }

    if (e.target.dataset.type = 'deleteBtn'){
        showBooks(deleteBook(e.target.dataset.idbook));
    }

     if (e.target.dataset.src = 'imageUrl'){
        showBooks(getPopup('imageUrlGr'))
    } 
  
    if (e.target.dataset.src === 'imageUrl') {
      showBooks(getPopup(livros.imageUrlGr));
        }
    }


//?LISTENERS
console.log(livros);
showBooks(getBooks());


function showBooks(arrayBooks){
    grid.innerHTML = '';

    arrayBooks.map( book => {
        grid.innerHTML += `
            <article>
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <img src="livros/${book.imageUrl}" alt="${book.title}" data-idbook=${book.imageUrlGr}>
                <p>Already read: ${book.alreadyRead ? '✅' : '❌' }  </p>
                <button class="btn" data-type=deleteBtn data-idbook=${book.id}>Delete</button>
                <button class="btn" data-type=editBtn data-idbook=${book.id}>Edit</button>
            </article>
        `;
    })
}


