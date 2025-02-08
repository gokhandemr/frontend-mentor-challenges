import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h2 className="heading-h3">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
