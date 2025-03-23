import Image from 'next/image';
import Link from 'next/link';
import image from '@/public/images/image-avatar.jpg';
// Style
import style from './index.module.css';
import Nav from './nav';
import ThemeButton from './theme-button';

export default function Header() {
  return (
    <header className={style.container}>
      <Link href='/' className={style.avatar}>
        <Image src={image} alt='paulina avatar' width={40} height={40} />
      </Link>

      <div>
        <Nav />
        <ThemeButton />
      </div>
    </header>
  );
}
