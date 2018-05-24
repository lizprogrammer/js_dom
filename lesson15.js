// Delete books
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// Add books
// document.forms

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
	e.preventDefault();
	const value = addForm.querySelector('input[type = "text"]').value
	console.log(value);

	// create elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('button');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

	// append to document
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);

});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";

    }
    else{
         list.style.display = "initial";
    }

});