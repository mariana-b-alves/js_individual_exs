/*  Bilioteca-2
 1 - acrescentar uma seccao,  de filtros, para poder filtrar por ja lidos, nao lidos, todos, e por titulo ou autor do livtro
 2 - dentro de cada card, acrescentar um botao de delete, para apagar o respectivo livro
 3 - ao clicar no thumbnail mostrear popup
*/

/// metodo ler todos os livros
const getBooks = () => livros;

// metodo para mostrar livros ja lidos
const getReadBooks = () => livros.filter( livro => livro.alreadyRead === true);

// metodo para mostrar livros nao lidos
const getNotReadBooks = () => livros.filter( livro => livro.alreadyRead === false);

//Pesquisa pelo título
const getBooksByTitle = (text) => livros.filter( livro => {
    let title = livro.title.toLowerCase();
    return title.search(text) > -1;
});

//Delete do book pr id
const deleteBook = (id) => livros = livros.filter ( livro => livro.id !== Number(id));

//Criar popup
const getPopup = (id) => livros = livros.filter ( livro => livro.imageUrlGr);
