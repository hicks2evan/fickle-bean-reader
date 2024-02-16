import { getAllBooks } from "./bookService";
import * as bookModel from './bookModel';

jest.mock('./bookModel');
const bookModelMock = jest.mocked(bookModel);

const exampleBook: Book = {
    title: 'bookOne',
    pages: [
        'sampleUrl'
    ]
}

beforeAll(() => {
    bookModelMock.findBooks.mockResolvedValue([exampleBook]);
});

describe('bookService', () => {
    it('gets all books', async () => {
        const result = await getAllBooks();
        expect(result).toEqual([exampleBook]);
    })
});