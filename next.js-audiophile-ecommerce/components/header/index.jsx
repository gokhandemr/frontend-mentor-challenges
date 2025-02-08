import Image from "next/image";
import Link from "next/link";
// Style
import style from "./style.module.css";
// Logo and Icons
import logo from "../../public/assets/shared/desktop/logo.svg";
// Components
import ResponsiveMenu from "./responsive-menu";
import CartButton from "./cart-button";
import Cart from "./cart";

export default async function Header() {
  return (
    <>
      <header className={`${style.container}`}>
        <ResponsiveMenu />
        <div className={style.wrapper}>
          <Link href={"/"} className={style.logo}>
            <Image src={logo} alt="logo" />
          </Link>
          <nav className={style.menu}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/categories/headphones"}>Headphones</Link>
              </li>
              <li>
                <Link href={"/categories/speakers"}>Speakers</Link>
              </li>
              <li>
                <Link href={"/categories/earphones"}>Earphones</Link>
              </li>
            </ul>
          </nav>
          <CartButton />
        </div>
        <span className={style.separator}></span>
      </header>
      <Cart />
    </>
  );
}
