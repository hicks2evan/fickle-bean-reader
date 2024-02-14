import express, {Request, Response} from 'express';
import {getAllBooks} from './books/bookService';
const app = express()
const port = process.env.PORT;

app.get('/', (_: Request, res: Response) => {
  res.send('Healthy')
})

app.get('/books', async (_: Request, res: Response) => {
  const books = await getAllBooks();

  if(books) {
    res.send(books);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
