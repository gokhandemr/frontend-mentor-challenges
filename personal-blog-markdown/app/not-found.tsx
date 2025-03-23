import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/' style={{ padding: '8px 16px', margin: '8px 0', background: 'grey', color: 'white', display: 'inline-block' }}>
        Return Home
      </Link>
    </div>
  );
}
