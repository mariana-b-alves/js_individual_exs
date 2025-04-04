/*
1 - Acrescentar um novo item no inicio e no final da lista 
2 - aplicar a class "cool" a todos os itens da lista 
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
*/

let ul = document.querySelector('ul');

//Acrescentar novo item no inicio e no fim da lista 
let itemInicio = document.createElement('li')
let itemFim = document.createElement('li')

//Acrescentar texto aos li
itemInicio.textContent = 'INÍCIO';
itemFim.textContent = 'FIM';

ul.append(itemFim);
ul.prepend(itemInicio); //IMPORTANTE -> Append para o fim; prepend para o início


//Aplicar a class "cool" a todos os itens da lista 
//console.log(ul.children)
for (const item of ul.children){
    item.className = "cool";
}

//Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
    let span = document.createElement ('span');
    span.textContent = ul.children.length;
    ul.previousElementSibling.append(span);










