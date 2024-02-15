import mongoose from "mongoose";
import { getAllBooks } from "./bookModel";
import * as database from '../database';

beforeAll(() => {
    database.connect();
})

describe("bookModel", () => {
  it("finds all books", async () => {
    const result = await getAllBooks();
    //expect(result.length).toBeGreaterThan(0);
    //expect(result[0].title).toBeTruthy();
  });
});

afterAll(() => {
  mongoose.connection.close();
});
