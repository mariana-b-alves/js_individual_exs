//NOTA: Excecionalmente não vou separar a minha versão e a correçõ

let showForm = document.getElementById('showForm');
const addButton = document.getElementById('addButton')
let itemDescription = document.getElementById('itemDescription')
let newItemForm = document.getElementById('newItemForm');
const ul = document.querySelector('ul');
let li = document.querySelector('li');

//1-Hide form by clicking newItemButton btn; keep newItemButton btn visible (DONE)

newItemForm.className = "hide";

showForm.addEventListener('click', hideBtn, false);

function hideBtn() {
    showForm.addEventListener('click', () =>{    
        newItemForm.className = "show";
        newItemButton.className = "hide"
    })
   
}

//2-By clicking again on the newItemButton btn, show form and hide btn again


//3 -Input a new element and, by clicking on the "Add" btn, add a new item to the list, hide the form again, and newItemButton btn (DONE)

//Create an empty vari.
let n = [];

//While
    addButton.addEventListener('mousedown', () => {
        itemDescription = itemDescription.value;
        n.push(itemDescription); // This does nothing, except keep an array internally. 
        
        ul.innerHTML += `<li>${itemDescription}</li>`;

         // Hide the newItemForm immediately after adding the li
         newItemForm.className = 'show';

         // Show newItemButton btn again
         newItemButton.className = 'block';
    });

//4 - When clicking on an item, check if it has the 'complete' class: (DONE)
//If it does, then eliminate the item
//Else, apply 'complete' class and move it to the end of the list

li.setAttribute('class', 'complete');

li.addEventListener('click', () => {
    if (li.classList.contains('complete')){
        li.remove();
    } else{
        li.classList.add('complete');
        li.parentElement.appendChild(li)
    }
}, false);

//5-Show the items that are yet to be bought in the h2, inside a <span> tag.
let span = document.createElement('span');
span.textContent = ul.children.length;
ul.previousElementSibling.append(span);


//6-After deleting the li item, restore the last item by doing CTRL-Z


    