const Book = require('../data/books.json').books;
const { v4: uuidv4 } = require('uuid');

exports.getBooks = (req, res, next) => {
  
  const books = Book.map(book => book)

  return res.status(200).json({
    message: 'Books retrieved',
    books
  })
}

exports.getBook = (req, res, next) => {
  const id = +req.params.id;

  const fetchedBook = Book.find(book => book.id === id);


  if(fetchedBook){
    return res.status(200).json({
      message: `Book with id ${id} retrieved!`,
      book: fetchedBook
    });
  } else {
    return res.status(404).json({
      message: "Resource not found"
    })
  }
}

exports.postBook = (req, res, next) => {
  const {  judul, sinopsis, penulis, genre } = req.body;

  const id = Book[Book.length - 1].id + 1;
  const isbn = uuidv4();

  const newBook = {id, isbn, ...req.body}

  if( judul && sinopsis && penulis && genre.length > 0) {
    Book.push(newBook);

    return res.status(202).json({
      message: "Added new book successfully!",
      books: Book
    })
  } else {
    return res.status(422).json({
      message: "Missing credentials"
    })
  }
}

exports.putBook = (req, res, next) => {
  const id = +req.params.id;

  const fetchedBook = Book.find(book => book.id === id);

  if(fetchedBook){
    const updatedBook = {...fetchedBook, ...req.body};

    return res.status(202).json({
      message: `Book #${id} updated successfully!`,
      book: updatedBook
    })
  } else {
    return res.status(404).json({
      message: 'Resource not found',
    })
  }
}

exports.deleteBook = (req, res, next) => {
  const id = +req.params.id;

  const fetchedBook = Book.find(book => book.id === id);

  if(fetchedBook) {
  const books = Book.filter(book => book.id !== id );

  return res.status(200).json({
    message: `Book #${id} deleted successfully!`,
    books
  })
} else {
  return res.status(404).json({
    message: 'Resource not found',
  })
}

}