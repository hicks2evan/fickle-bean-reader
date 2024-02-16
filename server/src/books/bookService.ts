import { findBooks } from "./bookModel";

export const getAllBooks = async function(): Promise<Book[]> {
    return findBooks();
}