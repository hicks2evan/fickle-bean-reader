import { getAllBooks } from "./bookService";

describe('bookService', () => {
    test('getAllBooks should return empty array for now', async () => {
        const result = await getAllBooks();
        expect(result).toEqual([]);
    })
});