import { getAllBooks } from "./bookService";

describe('bookService', () => {
    it('gets all books', async () => {
        const result = await getAllBooks();
        expect(result).toEqual([]);
    })
});