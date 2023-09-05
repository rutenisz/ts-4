"use strict";
const button = document.getElementById("add-book-btn");
const addBook = () => {
    const titleInput = document.querySelector("input[id='title']");
    const authorInput = document.querySelector("input[id='author']");
    const releaseYearInput = document.querySelector("input[id='release-year']");
    console.log(titleInput);
    console.log(authorInput);
    console.log(releaseYearInput);
    const book = {
        title: titleInput.value,
        author: authorInput.value,
        release_year: Number(releaseYearInput.value), // stringa pavercia i numberi
    };
    console.log(book);
    const bookDisplay = document.getElementById("book-card");
    const bookInfo = document.createElement("div");
    bookInfo.innerHTML = `<strong>Title:</strong> ${book.title}<br>
  <strong>Author:</strong> ${book.author}<br>
  <strong>Release Year:</strong> ${book.release_year}`;
    bookDisplay.appendChild(bookInfo);
    // istrina input values, kai pridedu itema
    titleInput.value = "";
    authorInput.value = "";
    releaseYearInput.value = "";
};
button.addEventListener("click", addBook);
