//DEFINE GLOBAL VARIABLES
const showForm = document.getElementById('showForm');
const addButton = document.getElementById('addButton')
let itemDescription = document.getElementById('itemDescription')
let newItemForm = document.getElementById('newItemForm');
const ul = document.querySelector('ul');
let li = document.querySelector('li');
let h2 = document.querySelector('h2');
let deletedItem = null;

//Define newItemForm as being hidden and newItemButton as being visible
newItemForm.className = "hide";
newItemButton.className = "show";

//DEFINE BUSINESS LOGIC
updateNumItems();

//DEFINE EVENTS
showForm.addEventListener('click', show, false);
newItemForm.addEventListener('submit', addItem, false);
ul.addEventListener('click', removeItem, false);
document.addEventListener('remove', returnItem, false);


//1-Hide form by clicking newItemButton btn; keep newItemButton btn visible (DONE)



//2-By clicking again on the newItemButton btn, show form and hide btn again

//While clicking on the showForm vari., do whatever's inside the hideBtn function


//Create a hideBtn function
function show() {
    //Invert previous definitions, so that, when you click on showForm, the form's shown and the btn is hidden
        newItemForm.className = "show";
        newItemButton.className = "hide";
        //Rather than clicking on the form, with focus, the form is automatically selected.
        itemDescription.focus();

        updateNumItems();
}

//3 -Input a new element and, by clicking on the "Add" btn, add a new item to the list, hide the form again, and newItemButton btn (DONE)

//Create a new function to add a new item
        function addItem(e){
            //Create a new vari., by creating an li
            let newItem = document.createElement('li');

            //
            newItem.textContent =  itemDescription.value;
            //Add newItem vari. to the stary of the ul
            ul.prepend(newItem);

            //Define newItemForm as being hidden and newItemButton as being visible
            newItemForm.className = "hide";
            newItemButton.className = "show";

            //Clear all text so the user is able to write more groceries
            itemDescription.value = '';

            e.preventDefault();

            //Everytime the user adds an item, the h2 <span> also adds up
            updateNumItems();

        }

        //4 - When clicking on an item, check if it has the 'complete' class: (DONE)
        //If it does, then eliminate the item
        //Else, apply 'complete' class and move it to the end of the list


        //Create function to remove item
        function removeItem(e){
            //Target event with the name of item
            let item = e.target;

            //If the item already has the class name 'complete', then...
            if(item.className === 'complete'){
                deletedItem = item;
                //...remove item from list
                item.remove();
                //If the item doesn't...
            } else {
                //..then add the class name...
                item.className = 'complete';
                //...and move it to the end of the list
                ul.append(item);
            }

            //Everytime the user removes an item, the h2 <span> also decreasses up
            updateNumItems();

        }
        
        //5-Show the items that are yet to be bought in the h2, inside a <span> tag.

        //Create a function updateNumItems which will update the counter (+ or -) according to the numbr of items that are yet to be bought
        function updateNumItems(){
            //Create a vari. which selects all items inside of the ul without the class 'complete
            let numItems = ul.querySelectorAll('li:not(.complete)').length;
            //Add text inside the h2; inside the span, there
            h2.innerHTML = `
            Buy groceries <span>${numItems}</span>
            `
        }
        //Create returnItem, which will revert, via CTRL-Z, the last deleted item
        function returnItem (e){
            if(deletedItem && 
                (e.ctrlKey && e.key === '2')||(e.metaKey === 'z')
            ){
                ul.prepend(deletedItem);
                deletedItem = null;
            }
        }
