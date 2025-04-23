class BookManager {
    constructor(bookList) {
        this.bookList = bookList;
    }
    

    addBook({ title, author, imageUrl, imageUrlGr, alreadyRead }) {
        const newId = this.bookList.length > 0
            ? this.bookList[this.bookList.length - 1].id + 1
            : 0;

        const newBook = {
            id: newId,
            title,
            author,
            imageUrl,
            imageUrlGr,
            alreadyRead,
        };

        this.bookList.push(newBook);
        showBooks(this.bookList);
    }
}

const manager = new BookManager(livros);

const form = document.getElementById('bookForm');
const addBtn = document.getElementById('addBtn');
const editBtn = document.getElementById('editBtn');

let activeSubmitAction = 'add';

addBtn.addEventListener('click', () => activeSubmitAction = 'add');
editBtn.addEventListener('click', () => activeSubmitAction = 'edit');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('bookId').value;
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const imageUrlGr = document.getElementById('imageUrlGr').value.trim();
    const alreadyRead = document.getElementById('alreadyRead').checked;

    if (!title || !author || !imageUrl || !imageUrlGr) {
        alert("Please fill in all fields.");
        return;
    }

    const bookData = {
        id,
        title,
        author,
        imageUrl,
        imageUrlGr,
        alreadyRead
    };

    if (activeSubmitAction === 'edit' && id !== '') {
        manager.editBook(bookData);
    } else {
        manager.addBook(bookData);
    }

    // Reset form and previews
    form.reset();
    document.getElementById('bookId').value = '';
    thumbPreview.style.display = 'none';
    largePreview.style.display = 'none';

    activeSubmitAction = 'add';
});
