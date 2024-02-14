import express, {Request, Response} from 'express';
const app = express()
const port = process.env.PORT;

app.get('/', (_: Request, res: Response) => {
  res.send('Hello, Heroku?')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
