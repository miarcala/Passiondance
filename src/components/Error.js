import Link from "next/link";

export default function Error(props) {
  return (
    <section className="container error text-center">
      <strong>404</strong>
      <h2>Oops! Page Not Found</h2>
      <Link href="/" className="btn btn-filled btn-round">
        Back to Home
      </Link>
    </section>
  );
}
