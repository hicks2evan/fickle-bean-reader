import { findBooks, findBookByTitle } from "./bookModel";

export const getAllBooks = async function(): Promise<Book[]> {
    return findBooks();
}

export const getBookByTitle = async function(title: string): Promise<Book | null> {
    return findBookByTitle(title);
}