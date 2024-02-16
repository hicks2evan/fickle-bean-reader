import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <Link href='/books'>Books</Link>
      </div>
    </main>
  );
}
