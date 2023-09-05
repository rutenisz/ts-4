type BookType = {
  title: string;
  author: string;
  release_year: number;
};

const button: HTMLButtonElement = document.getElementById(
  "add-book-btn"
)! as HTMLButtonElement;

const addBook = () => {
  const titleInput: HTMLInputElement =
    document.querySelector("input[id='title']")!;
  const authorInput: HTMLInputElement =
    document.querySelector("input[id='author']")!;
  const releaseYearInput: HTMLInputElement = document.querySelector(
    "input[id='release-year']"
  )!;

  console.log(titleInput);
  console.log(authorInput);
  console.log(releaseYearInput);

  const book: BookType = {
    title: titleInput.value,
    author: authorInput.value,
    release_year: Number(releaseYearInput.value), // stringa pavercia i numberi
  };

  console.log(book);

  const bookDisplay = document.getElementById("book-card")!;
  const bookInfo = document.createElement("div");
  bookInfo.innerHTML = `<strong>Title:</strong> ${book.title}<br>
  <strong>Author:</strong> ${book.author}<br>
  <strong>Release Year:</strong> ${book.release_year}`;

  bookDisplay.appendChild(bookInfo);
};

button.addEventListener("click", addBook);
