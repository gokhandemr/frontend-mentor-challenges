'use client';
import Link from 'next/link';
import style from './index.module.css';
import MobileButton from './mobile-button';
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname  = usePathname();

  return (
    <nav className={style.nav}>
      <MobileButton />
      <ul>
        <li>
          <Link href='/' className={`${pathname==='/' ? style.active : ''}`}>Home</Link>
        </li>
        <li>
          <Link href='/blog' className={`${pathname==='/blog' ? style.active : ''}`}>Blog</Link>
        </li>
        <li>
          <Link href='/about-me' className={`${pathname==='/about-me' ? style.active : ''}`}>About</Link>
        </li>
        <li>
          <Link href='/newsletter' className={`${pathname==='/newsletter' ? style.active : ''}`}>Newsletter</Link>
        </li>
      </ul>
    </nav>
  );
}
