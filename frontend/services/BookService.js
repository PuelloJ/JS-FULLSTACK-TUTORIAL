class BookService {
  constructor() {
    this.URI = "http://localhost:3000/api/books";
  }

  async getBooks() {
    const response = await fetch(this.URI);
    return await response.json();
  }

  async addBook(book) {
    const response = await fetch(this.URI, {
      method: "POST",
      body: book,
    });
    console.log(await response.json());
    return await response.json();
  }

  async deleteBook(id) {
    const response = await fetch(`${this.URI}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    return await response.json();
  }
}

export default BookService;
