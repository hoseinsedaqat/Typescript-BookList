
// Event : Add Data to Book lists

document.getElementById('add')?.addEventListener("click", e => {
    e.preventDefault();
    const inputBook = (document.getElementById('name')! as HTMLInputElement).value;
    const inputAuthor = (document.getElementById('author')! as HTMLInputElement).value;
    const inputIsbn = (document.getElementById('isbn')! as HTMLInputElement).value;
    const newBook = new Book(inputBook, inputAuthor, parseFloat(inputIsbn))
    const newUi = new UI();
    if (inputBook.trim() === '' || inputAuthor.trim() === '' || inputIsbn.trim() === '') {
        alert('Please Enter Book Data...')
    } else {
        newUi.showData(newBook);
        (document.getElementById('name')! as HTMLInputElement).value = '';
        (document.getElementById('author')! as HTMLInputElement).value = '';
        (document.getElementById('isbn')! as HTMLInputElement).value = '';
    }
})


// Event : Deleted Book From List

document.addEventListener("click", e => {
    if ((e.target as HTMLElement).classList.contains('fa-remove')) {
        (e.target as HTMLElement).parentElement?.parentElement?.remove();
    }
})