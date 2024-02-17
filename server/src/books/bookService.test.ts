import { getAllBooks, getBookByTitle } from "./bookService";
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
    bookModelMock.findBookByTitle.mockResolvedValue(exampleBook);
});

describe('bookService', () => {
    it('gets all books', async () => {
        const result = await getAllBooks();
        expect(result).toEqual([exampleBook]);
    })

    it('gets a book by title', async () => {
        const result = await getBookByTitle("bookOne");
        expect(result).toEqual(exampleBook);
    })
});