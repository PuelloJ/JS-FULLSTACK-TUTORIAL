import "./styles/app.css";

import BookService from "./services/BookService";
import { format } from "morgan";

document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const image = document.getElementById("image").files[0];

  const formData = new FormData();
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);
  formData.append("image", image);

  const bookService = new BookService();
  bookService.addBook(formData);
});
