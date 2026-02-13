let books = [
  { id: 1, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("search");

function renderBooks() {
  const searchText = searchInput.value.toLowerCase();

  bookList.innerHTML = "";

  books
    .filter(book => book.title.toLowerCase().includes(searchText))
    .forEach(book => {
      const div = document.createElement("div");
      div.className = "book";

      div.innerHTML = `
        <div>
          <h2>${book.title}</h2>
          <p>by ${book.author}</p>
        </div>
        <button class="remove" onclick="removeBook(${book.id})">Remove</button>
      `;

      bookList.appendChild(div);
    });
}

function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();

  if (!title || !author) return;

  books.push({
    id: Date.now(),
    title,
    author
  });

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";

  renderBooks();
}

function removeBook(id) {
  books = books.filter(book => book.id !== id);
  renderBooks();
}

searchInput.addEventListener("input", renderBooks);

renderBooks();
