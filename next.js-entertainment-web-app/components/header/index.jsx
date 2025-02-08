// Next
import Image from "next/image";
import Link from "next/link";
// Styles
import style from "./style.module.css";
// Logo & Icons
import logo from "@/public/logo.svg";
import avatar from "@/public/icons/image-avatar.png";
import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className={style.container}>
      <div>
        <Link href="/" className={style.logo}>
          <Image src={logo} alt="logo" width={32} height={25} />
        </Link>
        <NavLinks />
      </div>
      <div>
        <Link href="#">
          <Image src={avatar} alt="user" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
}
