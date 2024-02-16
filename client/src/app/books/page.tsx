import Link from "next/link";

export default async function BooksPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books`);
  const books: Book[] = await response.json();

  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.title}><Link href={`books/${book.title}`}>{book.title}</Link></li>
        ))}
      </ul>
    </>
  );
}
