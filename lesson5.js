var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    console.log(book.textContent);
});

Array.from(books).forEach(function(book){
    book.textContent += 'test';
});


//fixed it!
Array.from(books).forEach(function(book){
    book.textContent = book.textContent.substring(0,book.textContent.length - 4);
});

const bookList = document.querySelector('#book-list');
console.log(bookList.innerHTML);


bookList.innerHTML = '<h2>Books and more books...</h2>';

