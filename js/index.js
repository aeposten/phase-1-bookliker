const listDestination = document.getElementById(`list`);
const bookPanel = document.getElementById(`show-panel`);
const panelImage = document.createElement(`img`);
const panelTitle = document.createElement(`h1`);
const panelSubTitle = document.createElement(`h2`);
const panelAuthor = document.createElement(`p`);
const panelDescription = document.createElement(`p`);
const panelUsers = document.createElement(`ul`);

function fetchBooks() {
  fetch(`http://localhost:3000/books`)
    .then((response) => response.json())
    .then((json) => getBookData(json));
}

function getBookData(bookArray) {
  bookArray.map((books) => getBookArray(books));
}

// function fetchUsers() {
//   fetch(`http://localhost:3000/users`)
//     .then((response) => response.json())
//     .then((json) => getUserData(json));
// }

// function getUserData(userArray) {
//   userArray.map((users) => getUserArray(users));
// }

function getBookArray(books) {
  let bookTitle = document.createElement(`li`);
  bookTitle.textContent = books.title;
  listDestination.append(bookTitle);
  bookTitle.addEventListener(`click`, function () {
    bookPanel.innerHTML = ``;
    panelImage.src = books.img_url;
    bookPanel.append(panelImage);
    panelTitle.textContent = books.title;
    bookPanel.append(panelTitle);
    panelSubTitle.textContent = books.subtitle;
    bookPanel.append(panelSubTitle);
    panelAuthor.textContent = books.author;
    bookPanel.append(panelAuthor);
    panelDescription.textContent = books.description;
    bookPanel.append(panelDescription);
    // function fetchUsers() {
    //   fetch(`http://localhost:3000/users`)
    //     .then((response) => response.json())
    //     .then((json) => getUserData(json));
    // }
    // function getUserData(userArray) {
    //   userArray.map((users) => getUserArray(users));
    // }
  });
}
fetchBooks();
// fetchUsers();
