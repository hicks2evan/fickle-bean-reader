import { Schema, model } from 'mongoose';

const bookSchema = new Schema<Book>({
    title: { type: String, required: true },
    pages: { type: [String], required: true}
})

export const bookModel = model<Book>('Book', bookSchema);

export const getAllBooks = async function(): Promise<Book[]> {
    return await bookModel.find();
}