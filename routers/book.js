const express = require('express');
const router = express.Router();

const { getBooks, getBook, postBook, putBook, deleteBook } = require('../controllers/bookController')

router.get('/books', getBooks);

router.get('/books/:id', getBook)

router.post('/books', postBook)

router.put('/books/:id', putBook)

router.delete('/books/:id', deleteBook)

module.exports = router;