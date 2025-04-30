import {livros} from './data.js';

let myBooks = [...livros];

/// Method to show all books
export const getBooks = () => myBooks;

// Method to show read books
export const getReadBooks = () => myBooks.filter( livro => livro.alreadyRead === true);

// Method to show unread books
export const getNotReadBooks = () => myBooks.filter( livro => livro.alreadyRead === false);

// Search by title
export const getBooksByAuthorTitle = (text) => myBooks.filter( livro => {
    let title = livro.title.toLowerCase();
    let author = livro.author.toLowerCase();

    return (author.search(text) > -1 ) || (title.search(text) > -1 )
});

// Delete book by id
export const deleteBook = (id) => myBooks = myBooks.filter( livro => livro.id !== Number(id));

// Add book
export const addBook = (book) => {
    myBooks.push(book);
    return myBooks;
}

// Select books by id
export const getBookById = (id) => myBooks.find( b => b.id === Number(id))


export const updateBooks = book => myBooks = myBooks.map ( b => {

    if (b.id == book.id){
        return {
            ...b,
            title : book.title,
            author : book.author,
            alreadyRead : book.alreadyRead,
            imageUrl : book.imageUrl,
            imageUrlGr : book.imageUrlGr,
        }
    } else {
        return b;
    }
})