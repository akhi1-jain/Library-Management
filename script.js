const myLibrary = [];
const bookDetailsContainer = document.querySelector('.bookDetailsContainer');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    // Clear existing content in the bookDetailsContainer
    bookDetailsContainer.innerHTML = "";

    // Loop through the library and display each book
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookDetailsElement = document.createElement('div');
        bookDetailsElement.classList.add('book-details');
        bookDetailsElement.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="removeBook(${i})">Remove</button>
        `;
        bookDetailsContainer.appendChild(bookDetailsElement);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function openForm() {
    document.getElementById('bookDetails').style.display = 'block';
    document.getElementById('bookForm').reset();
}

function closeForm() {
    document.getElementById('bookDetails').style.display = 'none';
}

function submitForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    closeForm();
}
