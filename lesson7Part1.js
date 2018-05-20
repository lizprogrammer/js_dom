const bookList = document.querySelector('#book-list');

//Get parents
console.log('the parent node is: ', bookList.parentNode);
console.log('the parent element is: ', bookList.parentElement);

console.log('the parent element is: ', bookList.parentElement.parentElement);

//Get children
console.log(bookList.childNodes);

console.log(bookList.firstElementChild);

console.log(bookList.children);


