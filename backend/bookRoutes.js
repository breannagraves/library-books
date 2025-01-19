
const express = require('express');
const Book = require('./models/book');
// node 


const router = express.Router();

// const corsOptions = {
//     origin: 'http://localhost:3002/',
//     credentials: true,
//     optionSuccessStatus: 200
// }

// // router.use(cors(corsOptions));

// router.use(function (req, res, next) {

//     res.setHeader('Access-Control-Allow-Origin', "*");
//     res.setHeader('Access-Control-Allow-Headers', true);
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });



// Create a new book
router.post('/books', async (req, res) => {
  const { id, title, author, publisher, isbn, avail, who, due} = req.body;

  try {
    const book = new Book({ id, title, author, publisher, isbn, avail, who, due });
    await book.save();
    res.send(book);
    console.log(book);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all Avail books
router.get('/books/avail', async (req, res) => {
  try {
    const books = await Book.find({avail: true});
    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
      
});

// Get all Unavail books
router.get('/books/unavail', async (req, res) => {
  try {
    const books = await Book.find({avail: false});
    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Update a book
router.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(typeof id);
  console.log("avail", req.body)
  const { title, author, publisher, isbn, avail, who, due } = req.body;
  try {
    const book = await Book.updateOne({id:id}, {title, author, publisher, isbn, avail, who, due });
    res.send(book);

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    res.send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});




module.exports = router;


