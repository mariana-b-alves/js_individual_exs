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
    let author = livro.author.toLowerCase();
    return (author.search(text) > -1) || (title.search(text) > -1);
});

//Delete do book pr id
const deleteBook = (id) => livros = livros.filter ( livro => livro.id !== Number(id));



//*MÉTODOS QUE NÃO IMPLICAM ALTERAÇÃO DO MODELO DE DADOS

//Mostrar popup

const showPopup = url => {
    popup.classList.add('open');
    popup.firstElementChild.src = url;
}
const closePopup = () => popup.classList.remove('open');


const showAddEditForm = url =>{
    showAddEditForm.classList.add('open');
    showAddEditForm.firstElementChild.src = url;

}

const closeAddEditForm = () => showAddEditForm.classList.remove('open');