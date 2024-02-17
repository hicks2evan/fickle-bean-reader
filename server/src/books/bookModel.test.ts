import mongoose from "mongoose";
import { findBookByTitle, findBooks } from "./bookModel";
import * as database from '../database';

beforeAll(() => {
    database.connect();
})

describe("bookModel", () => {
  it("finds all books", async () => {
    const result = await findBooks();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].title).toBeTruthy();
  });

  it("finds a book by title", async () => {
    const result = await findBookByTitle("Fickle Bean No. 1");
    expect(result).toBeDefined();
    if(result) {
      expect(result.title).toEqual("Fickle Bean No. 1");
    }
  });
});

afterAll(() => {
  mongoose.connection.close();
});
