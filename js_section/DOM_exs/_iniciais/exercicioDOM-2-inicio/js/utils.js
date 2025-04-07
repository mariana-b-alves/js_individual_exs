//Método "Ler todos os livros"

const getBooks = () => livros;

//Método para mostrar livros JS lidos
const getReadBooks = () => livros.filter( livro => livro.alreadyRead === true );

//Método para mostrar livros JS não lidos
const getNotReadBooks = () => livros.filter( livro => livro.alreadyRead === false );