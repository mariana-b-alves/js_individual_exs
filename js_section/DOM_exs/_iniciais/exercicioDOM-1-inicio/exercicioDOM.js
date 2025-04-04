/*
1 - Acrescentar um novo item no inicio e no final da lista (DONE)
2 - aplicar a class "cool" a todos os itens da lista (DONE)
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista (DONE)
*/

let list = document.querySelector('ul');

//STEP 1
//Append new element to the beginning of the list

//Create element in the li with the class name itemStat
let itemStart = document.createElement('li');

//Write the text for it
itemStart.textContent = 'feta cheese';

//Insert the element to the start of the list
list.insertBefore (itemStart, list.firstElementChild);  


//Append new element to the end of the list

//Create element in the li with the class name itemEnd
let itemEnd = document.createElement('li');

//Write the text for it
itemEnd.textContent = 'peppers';

//Append the element to the end of the list
list.append(itemEnd);


//STEP 2
//Apply cool class to every item of the list

//Select all the items with an li class
let items = document.querySelector('li');

//Create an attribute for our cool class (params: name and value)

//Create element in the li with the class name itemsCool
let itemsCool = document.getElementsByTagName('li');

//Check in the console all the elements included in itemsCool
console.log(itemsCool);

//Create function which will include the class .cool and its CSS properties (if the condition applies)
function newColor(itemsCool){
    for (const item of itemsCool) {
        item.classList.add('cool');
    } 
}

//Add newColor funtion to itemsCool
newColor(itemsCool);

//STEP 3
//Add a tag called span inside of the h2 with the number of items inside the list

//Select h2 and create a class
let cont = document.querySelector('h2');

//Create a span element inside the h2
let span = document.createElement('span')

//Include the length of the list (itemsCool) to the span
span.innerHTML = itemsCool.length;

//Append the span and its content to our h2
cont.append(span);















