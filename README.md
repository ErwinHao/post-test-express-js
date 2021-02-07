# Mock RESTful API


A mock RESTful API for assignment with local .json data

## BaseURL



<pre>
  localhost:5000/api
</pre>

## Endpoints



| Method |  Endpoint  |
| ------ | :--------: |
| GET    |   /books   |
| GET    | /books/:id |
| POST   |   /books   |
| PUT    | /books/:id |
| DELETE | /books/:id |

## Usage

Install required dependencies first

<code>
  npm i
</code>

---

Run server by running:

<code>
  npm start
</code>

**Response Result**

* GET /api/books

  Get all instances of books
  
* GET /api/books/:id

  Get certain instance of a book by id

* POST /api/books

  Create a new book
  
* PUT /api/books/:id

  Update certain instance of a book by id
  
* DELETE /api/books/:id

  Delete a certain instance of a book by id
