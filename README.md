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

<pre>
  npm i
</pre>

---

Run server by running:

<pre>
  npm start
</pre>

---


**Response Result**


<code>
GET /api/books
</code>

  Get all instances of books
  
<code>
GET /api/books/:id
</code>

  Get certain instance of a book by id
  
<code>
POST /api/books
</code>

  Create a new book
  
<code>
PUT /api/books/:id
</code>

  Update certain instance of a book by id
  
<code>  
DELETE /api/books/:id
</code>

  Delete a certain instance of a book by id
