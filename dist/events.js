"use strict";
// Event : Add Data to Book lists
var _a;
(_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", e => {
    e.preventDefault();
    const inputBook = document.getElementById('name').value;
    const inputAuthor = document.getElementById('author').value;
    const inputIsbn = document.getElementById('isbn').value;
    const newBook = new Book(inputBook, inputAuthor, parseFloat(inputIsbn));
    const newUi = new UI();
    if (inputBook.trim() === '' || inputAuthor.trim() === '' || inputIsbn.trim() === '') {
        alert('Please Enter Book Data...');
    }
    else {
        newUi.showData(newBook);
        document.getElementById('name').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
});
// Event : Deleted Book From List
document.addEventListener("click", e => {
    var _a, _b;
    if (e.target.classList.contains('fa-remove')) {
        (_b = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    }
});
