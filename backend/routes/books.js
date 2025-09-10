const { Router } = require("express");
const router = Router();

const Books = require("../models/Book");

router.get("/", async (req, res) => {
  const books = await Books.find();
  res.json(books);
});

router.post("/", async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = `/uploads/${req.file.filename}`;
  const newBook = new Books({ title, author, isbn, image: imagePath });
  await newBook.save();
  res.status(201).json({ message: "Book saved successfully" });
});

router.delete("/:id", async (req, res) => {
  await Books.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted successfully" });
});

module.exports = router;
