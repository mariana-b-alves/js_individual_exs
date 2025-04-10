const showForm = document.getElementById('showForm');
let addButton = document.getElementById('addButton')
let itemDescription = document.getElementById('itemDescription')
let newItemForm = document.getElementById('newItemForm');
let ul = document.querySelector('ul')
const li = document.querySelector('li')

//1-Hide form by clicking newItemButton btn; keep newItemButton btn visible (DONE)


showForm.addEventListener('click', function(){
    if (showForm === 'block'){
        newItemForm.style.display = 'none'
    } else{
        newItemForm.style.display = 'none'
    }
})


//2-By clicking again on the newItemButton btn, show form and hide btn again

showForm.addEventListener('click', function(){
    if (showForm === 'block'){
        newItemForm.style.display = 'none'
    } else{
        newItemForm.style.display = 'none'
    }
})
//3 -Input a new element and, by clicking on the "Add" btn, add a new item áto the list, hide the form again, and newItemButton btn (DONE)

//Create an empty vari.
let n = [];

//While
    addButton.addEventListener('mousedown', () => {
        itemDescription = itemDescription.value;
        n.push(itemDescription); // This does nothing, except keep an array internally. 
        
        ul.innerHTML += `<li>${itemDescription}</li>`;

         // Hide the newItemForm immediately after adding the li
         newItemForm.style.display = 'none';

         // Show newItemButton btn again
         newItemButton.style.display = 'block';
    });

//4 - When clicking on an item, check if it has the 'complete' class:
//If it does, then eliminate the item
//Else, apply 'complete' class and move it to the end of the list

li.setAttribute('class', 'complete'); //Definir 2 params: nome e valor

li.addEventListener('click', () =>{
    console.log(li.hasAttribute("complete")
    )
    if (li.hasAttribute("complete")){
        li.remove(li)
    } else{
        li.classList.add('complete');
    }
})

//5-Show the items that are yet to be bought in the h2, inside a <span> tag.
let span = document.createElement ('span');
span.textContent = ul.children.length;
ul.previousElementSibling.append(span);

    