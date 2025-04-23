//?DEFINE LOCAL VARIS.
let grid = document.getElementById('grid');
let filters = document.getElementById('filters');
let popup = document.getElementById('popup');

let addEditBtn = document.getElementById('addEditBtn');
let bookForm = document.getElementById('bookForm');

//changeEvent = muda a cada introdução de caracter (melhor para forms)
//inputEvent = alterar o valor do input (input type = text; textarea...)

//?APP EVENTS
filters.addEventListener('click', filterEvents, false);
filters.addEventListener('input', filterEvents, false);
grid.addEventListener('click', gridEvents, false);
popup.addEventListener('click', closePopup, false);

//?BUSINESS LOGIC

// 1 - Add a filter section, so the user can filter books by already read, not read, all, and by the title / author of the book.
function filterEvents(e){
    let el = e.target;

    if (el.id === 'allBtn') {
        showBooks(getBooks());
    }

    if (el.id === 'readBtn') {
        showBooks(getReadBooks());
    }

    if (el.id === 'notReadBtn') {
        showBooks(getNotReadBooks());
    }

    if ((el.id === 'searchTxt') && (e.type === 'input')){
        let text = el.value.toLowerCase();
        showBooks(getBooksByAuthorTitle(text))
    }
}


function gridEvents(e){
    console.log(e);

    if ((e.target.nodeName === 'P') && (e.target.textContent.search('✅') > -1)  ){
        showBooks(getReadBooks());
    }

    if ((e.target.nodeName === 'P') && (e.target.textContent.search('❌') > -1)  ){
        showBooks(getNotReadBooks());
    }

    if (e.target.dataset.type === 'deleteBtn'){
        showBooks(deleteBook(e.target.dataset.idbook))
    }

    if (e.target.dataset.type === 'thumbnail'){
        showPopup(e.target.dataset.popup)
    }
}


addEditBtn.addEventListener('click', () => {
    const isVisible = bookForm.style.display === 'block';
    bookForm.style.display = isVisible ? 'none' : 'block';
});

//?LISTENERS
//console.log(livros);
showBooks(getBooks());

function showBooks(arrayBooks){
    grid.innerHTML = '';
    

    arrayBooks.map( books => {
        grid.innerHTML += `
            <article>
                <h1>${books.title}</h1>

                <h2>${books.author}</h2>

                <img src="livros/${books.imageUrl}" 
                     alt="${books.title}}" 
                     data-type='thumbnail' 
                     data-popup='livros/${books.imageUrlGr}'
                     class='thumbnail'
                >
                <p>Already read: ${books.alreadyRead ? '✅' : '❌' }  </p>

                <button class='btn' data-type='deleteBtn' data-idbook=${books.id}> Delete </button>

                <button class='btn' data-type='editBtn' data-idbook=${books.id}> Edit </button>
            </article>
        `;
    })  
}

let thumbInput = document.getElementById('imageUrl');
let largeInput = document.getElementById('imageUrlGr');
let thumbPreview = document.getElementById('thumbPreview');
let largePreview = document.getElementById('largePreview');

function updatePreview(input, preview, url = 'livros/') {
    let filename = input.value.trim();
    if (filename) {
        preview.src = `${url}${filename}`;
        preview.style.display = 'block';
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}

thumbInput.addEventListener('input', () => {
    updatePreview(thumbInput, thumbPreview);
});

largeInput.addEventListener('input', () => {
    updatePreview(largeInput, largePreview);
});



