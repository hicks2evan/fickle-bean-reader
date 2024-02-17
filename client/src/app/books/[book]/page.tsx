import Image from "next/image";

export default async function BookPage({
  params,
}: {
  params: { book: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books/${params.book}`
  );
  const book: Book = await response.json();

  return (
    <>
      <h1>{book.title}</h1>
      <Image src={book.pages[0]} alt="front cover" width="675" height="1050"></Image>
      {book.pages.slice(1, book.pages.length - 1).map((page, index) => (
        <Image key={`Page ${index}`} src={page} alt={`Page ${index}`} width="1350" height="1050"></Image>
      ))}
      <Image src={book.pages[book.pages.length]} alt="back cover" width="675" height="1050"></Image>
    </>
  )
}
