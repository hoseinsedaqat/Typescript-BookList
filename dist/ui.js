"use strict";
class UI {
    showData(book) {
        const tBody = document.querySelector('tbody');
        const trElement = document.createElement('tr');
        trElement.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><i class="fa fa-remove" style="color:red; cursor:pointer;" id="remove"></i></td>
        `;
        tBody.appendChild(trElement);
    }
}
