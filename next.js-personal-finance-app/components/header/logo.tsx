// Next
import Link from "next/link";
import Image from "next/image";
// Styles
import style from "./style.module.css";
// Logos
import logo from "@/public/logo-large.svg";
import logoSmall from "@/public/logo-small.svg";

export default function Logo() {
  return (
    <Link href={"/"} className={style.logoContainer}>
      <Image src={logo} alt="personal finance app" width={121} height={22} priority />
      <Image src={logoSmall} alt="personal finance app small logo" width={24} height={24} />
    </Link>
  );
}
