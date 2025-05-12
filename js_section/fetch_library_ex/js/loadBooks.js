//?

let grid = document.querySelector('#grid');
let filters = document.getElementById('filters');
let popup = document.getElementById('popup');
let addEditForm = document.querySelector('.addEditForm');
let form = addEditForm.querySelector('form');
let title = form.title;
let author = form.author;
let alreadyRead = form.alreadyRead;
let imageUrl = form.imageUrl;
let imageUrlGr = form.imageUrlGr;
let selectedBook;
let updateBookBtn = document.getElementById('updateBookBtn');
let addBookBtn = document.getElementById('addBookBtn');

let myBooks = [];

fetch('json/data.json')
    .then(response => response.json())
    .then(data => {
        myBooks = [...data];
        showBooks(myBooks);
    })
    .catch(() => {
        grid.textContent = 'Failed to load book data.';
    });

const getReadBooks = () => myBooks.filter(book => book.alreadyRead);

const getNotReadBooks = () => myBooks.filter(book => !book.alreadyRead);

const getBooksByAuthorTitle = text =>
    myBooks.filter(({ title, author }) =>
        title.toLowerCase().includes(text) || author.toLowerCase().includes(text)
    );

const getBookById = id => myBooks.find(book => book.id === Number(id));

const addBook = book => {
    myBooks.push(book);
    return myBooks;
};

const deleteBook = id => {
    myBooks = myBooks.filter(book => book.id !== Number(id));
    return myBooks;
};

const updateBooks = book => {
    myBooks = myBooks.map(b => b.id === book.id ? { ...b, ...book } : b);
    return myBooks;
};

const showPopup = url => {
    popup.classList.add('open');
    popup.firstElementChild.src = url;
};
const closePopup = () => popup.classList.remove('open');


//?BUSINESS LOGIC

function showBooks(arrayBooks) {
    grid.innerHTML = '';
    arrayBooks.forEach(book => {
        grid.innerHTML += `
            <article>
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <img src="livros/${book.imageUrl}" 
                     alt="${book.title}" 
                     data-type='thumbnail' 
                     data-popup='livros/${book.imageUrlGr}'
                     class='thumbnail'>
                <p>Already read: ${book.alreadyRead ? '✅' : '❌'}</p>
                <button class='btn' data-type='deleteBtn' data-idbook=${book.id}>Delete</button>
                <button class='btn' data-type='editBtn' data-idbook=${book.id}>Edit</button>
            </article>
        `;
    });
}

//? EVENT HANDLERS

filters.addEventListener('click', handleFilterEvents, false);
filters.addEventListener('input', handleFilterEvents, false);
grid.addEventListener('click', handleGridEvents, false);
popup.addEventListener('click', closePopup, false);

//?FORM SUBMIT
addBookBtn.addEventListener('click', addBookForm, false);
updateBookBtn.addEventListener('click', updateBookForm, false);

function handleFilterEvents({ target: { id, value }, type }) {

    if (id === 'allBtn') 
        showBooks(myBooks);

    if (id === 'readBtn') 
        showBooks(getReadBooks());

    if (id === 'notReadBtn') 
        showBooks(getNotReadBooks());

    if (id === 'searchTxt' && type === 'input') 
        showBooks(getBooksByAuthorTitle(value.toLowerCase()));

    if (id === 'showForm') {
        addEditForm.classList.toggle('open');
        addBookBtn.classList.remove('hide');
        updateBookBtn.classList.add('hide');
    }
}

function handleGridEvents({ target }) {
    const { nodeName, textContent, dataset } = target;

    const { type, popup: popupUrl, idbook } = dataset;

    if (nodeName === 'P' && textContent.includes('✅')) showBooks(getReadBooks());

    if (nodeName === 'P' && textContent.includes('❌')) showBooks(getNotReadBooks());

    if (type === 'deleteBtn') showBooks(deleteBook(idbook));

    if (type === 'thumbnail') showPopup(popupUrl);

    if (type === 'editBtn') {
        fillBookForm(idbook);
        addBookBtn.classList.add('hide');
        updateBookBtn.classList.remove('hide');
    }
}

function addBookForm(e) {
    e.preventDefault();
    const id = Date.now();
    const book = {
        id,
        title: title.value,
        author: author.value,
        alreadyRead: alreadyRead.checked,
        imageUrl: imageUrl.value,
        imageUrlGr: imageUrlGr.value
    };
    showBooks(addBook(book));
    form.reset();
}

function fillBookForm(id) {
    addEditForm.classList.add('open');
    selectedBook = getBookById(id);

    const { title, author, alreadyRead, imageUrl, imageUrlGr} = selectedBook;

    title.value = title;
    author.value = author;
    alreadyRead.checked = alreadyRead;
    imageUrl.value = imageUrl;
    imageUrlGr.value = imageUrlGr;
}

function updateBookForm(e) {
    e.preventDefault();
    const updatedBook = {
        id: selectedBook.id,
        title: title.value,
        author: author.value,
        alreadyRead: alreadyRead.checked,
        imageUrl: imageUrl.value,
        imageUrlGr: imageUrlGr.value
    };
    showBooks(updateBooks(updatedBook));
    form.reset();
}
