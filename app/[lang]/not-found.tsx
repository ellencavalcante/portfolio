import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <h1>Page not found · Página não encontrada</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </section>
  );
}
