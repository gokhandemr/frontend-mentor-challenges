'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const autoRedirect = () => {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    };
    autoRedirect();
  }, []);

  return (
    <div>
      <h2>Not Found</h2>
    </div>
  );
}
