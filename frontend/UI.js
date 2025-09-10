import BookService from "./services/BookService";
import { format } from "timeago.js";

const bookService = new BookService();

class UI {
  async renderBooks() {
    const books = await bookService.getBooks();

    const booksContainer = document.getElementById("books-container");

    booksContainer.innerHTML = "";

    books.forEach((book) => {
      const div = document.createElement("div");
      div.className = "card m-2";
      div.style = "width: 18rem;";
      div.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="http://localhost:3000${
                      book.imagePath
                    }" class="card-img-top img-fluid" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title
                ">${book.title}</h5>
                    <p class="card-text">Author: ${book.author}</p>
                    <p class="card-text">ISBN: ${book.isbn}</p>
                    <a href="#" class="btn btn-danger btn-delete delete" _id="${
                      book._id
                    }">Delete</a>
                </div>
            <div class="card-footer">
                <small class="text-muted">${format(
                  new Date(book.created_at)
                )}</small>
            </div>
            </div>
        `;
      booksContainer.appendChild(div);
    });
  }

  async addAnyBook(book) {
    await bookService.addBook(book);
    this.clearBookForm();
    this.renderMessage("Book added successfully", "success", 3);
    this.renderBooks();
  }

  clearBookForm() {
    document.getElementById("book-form").reset();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    const div = document.createElement("div");
    div.className = `alert alert-${colorMessage} message`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".col-md-4");
    const bookForm = document.querySelector("#book-form");

    container.insertBefore(div, bookForm);

    setTimeout(() => {
      document.querySelector(".message");
      div.remove();
    }, secondsToRemove * 1000);
  }

  async deleteBook(bookId) {
    await bookService.deleteBook(bookId);
    this.renderMessage("Book deleted successfully", "success", 3);
    this.renderBooks();
  }
}

export default UI;
