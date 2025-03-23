import SocialLinks from '../social-links';
import style from './index.module.css';

export default function Footer() {
  return (
    <footer className={style.container}>
      <p>Made with ❤️ and ☕️</p>
      <SocialLinks isFooter={true} />
    </footer>
  );
}
