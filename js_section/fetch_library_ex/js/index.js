import {showPopup, closePopup} from './dom-utils.js';
import {getBooks,getReadBooks , getNotReadBooks, getBooksByAuthorTitle, deleteBook, addBook, getBookById, updateBooks, } from './data-utils.js';
import { Book } from './data.js';



//? DEFINE LOCAL VARIABLES
let grid = document.getElementById('grid');
let filters = document.getElementById('filters');
let popup = document.getElementById('popup');

//? DEFINE LOCAL VARIABLES
let addEditForm = document.querySelector('.addEditForm');
let form = addEditForm.querySelector('form');
let title = form.title;
let author = form.author;
let alreadyRead = form.alreadyRead;
let imageUrl = form.imageUrl;
let imageUrlGr = form.imageUrlGr;
let selectedBook;
let updateBookBtn = document.querySelector('#updateBookBtn');
let addBookBtn = document.querySelector('#addBookBtn');


//? APP EVENTS
filters.addEventListener('click', filterEvents, false);
filters.addEventListener('input', filterEvents, false);
grid.addEventListener('click', gridEvents, false);
popup.addEventListener('click', closePopup, false);

//? FORM SUBMIT
addBookBtn.addEventListener('click', addBookForm, false);
updateBookBtn.addEventListener('click', updateBookForm, false);


//? LISTENERS
function filterEvents( {target:{id, value}, type}){
    
    if (id === 'allBtn') {
        showBooks(getBooks());
    }

    if (id === 'readBtn') {
        showBooks(getReadBooks());
    }

    if (id === 'notReadBtn') {
        showBooks(getNotReadBooks());
    }

    if ((id === 'searchTxt') && (type === 'input')){
        let text = value.toLowerCase();
        showBooks(getBooksByAuthorTitle(text))
    }

    if( id === 'showForm'){
        addEditForm.classList.toggle('open');
        addBookBtn.classList.remove('hide');
        updateBookBtn.classList.add('hide');
    }


}

function gridEvents({target:{nodeName, textContent, dataset:{type, popup, idbook}}}){

    if ((nodeName === 'P') && (textContent.search('✅') > -1)  ){
        showBooks(getReadBooks());
    }

    if ((nodeName === 'P') && (textContent.search('❌') > -1)  ){
        showBooks(getNotReadBooks());
    }

    if (type === 'deleteBtn'){
        showBooks(deleteBook(idbook))
    }

    if (type === 'thumbnail'){
        showPopup(popup)
    }

    if( type === 'editBtn'){
        fillBookForm(idbook);

        addBookBtn.classList.add('hide');
        updateBookBtn.classList.remove('hide');
    }
}

function addBookForm (e){

    let id = Date.now();
    let book = new Book(id, title.value, author.value,alreadyRead.checked, imageUrl.value, imageUrlGr.value);

    //console.log(book);
    showBooks(addBook(book));
    form.reset();

    e.preventDefault();
}

function fillBookForm(id) {
    addEditForm.classList.add('open');


    //console.log(getBookById(1));
    selectedBook = getBookById(id);
    let {title: editTitle, author: editAuthor, alreadyRead: editAlreadyread, imageUrl: editimageUrl, imageUrlGr:editimageUrlGr} = selectedBook;
    //console.log(selectedBook);
    title.value = editTitle;
    author.value = editAuthor;
    alreadyRead.checked = editAlreadyread;
    imageUrl.value = editimageUrl;
    imageUrlGr.value = editimageUrl;



}

function updateBookForm(e){

    //console.log(title.value);

    let updatedBook = {
        id : selectedBook.id,
        title: title.value,
        author: author.value,
        alreadyRead : alreadyRead.checked,
        imageUrl: imageUrl.value,
        imageUrlGr: imageUrlGr.value,
    }

    //console.log(updatedBook);
    showBooks(updateBooks(updatedBook));
    form.reset();
    e.preventDefault();
}


//? BUSINESS LOGIC
//console.log(livros);
showBooks(getBooks());

function showBooks(arrayBooks){

    grid.innerHTML = '';

    arrayBooks.map( book => {
        grid.innerHTML += `
            <article>
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <img src="livros/${book.imageUrl}" 
                     alt="${book.title}}" 
                     data-type='thumbnail' 
                     data-popup='livros/${book.imageUrlGr}'
                     class='thumbnail'
                >
                <p>Already read: ${book.alreadyRead ? '✅' : '❌' }  </p>
                <button class='btn' data-type='deleteBtn' data-idbook=${book.id}> Delete </button>
                <button class='btn' data-type='editBtn' data-idbook=${book.id}> Edit </button>
            </article>
        `;
    })
}