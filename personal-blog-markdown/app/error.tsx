'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Something went wrong!</h2>
      <button style={{ padding: '8px 16px', margin: '8px 0' }} onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
