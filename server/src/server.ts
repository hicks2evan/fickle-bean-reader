import express, {Request, Response} from 'express';
import {getAllBooks, getBookByTitle} from './books/bookService';
import * as database from './database';
const app = express()
const port = process.env.PORT;

database.connect();

app.get('/', (_: Request, res: Response) => {
  res.send('Healthy.')
})

app.get('/books', async (_: Request, res: Response) => {
  const books = await getAllBooks();

  if(books) {
    res.send(books);
  }
})

app.get('/books/:title', async (req: Request, res: Response) => {
  const book = await getBookByTitle(req.params.title as string);

  if(book) {
    res.send(book);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
