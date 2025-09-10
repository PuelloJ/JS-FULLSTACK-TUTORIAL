import "./styles/app.css";
import UI from "./UI.js";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderBooks();
});

document.getElementById("book-form").addEventListener("submit", (e) => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const image = document.getElementById("image").files[0];
  
  const formData = new FormData();
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);
  formData.append("image", image);
  
  const ui = new UI();
  ui.addAnyBook(formData);
  ui.renderMessage("Adding book...", "success", 3);

  e.preventDefault();
});

document.getElementById("books-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const ui = new UI();
    ui.deleteBook(e.target.getAttribute("_id"));
    ui.renderMessage("Book deleted successfully", "danger", 3);
  }
  e.preventDefault();
});
