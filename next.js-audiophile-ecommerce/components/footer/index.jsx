import Link from "next/link";
import Image from "next/image";
// Style
import style from "./style.module.css";
// Image & Icons
import img from "../../public/assets/shared/desktop/logo.svg";
import facebook from "../../public/assets/shared/desktop/icon-facebook.svg";
import twitter from "../../public/assets/shared/desktop/icon-twitter.svg";
import instagram from "../../public/assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div>
        <Link href={"/"}>
          <Image src={img} alt="audiophile" width={143} height={25} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>HOME</Link>
            </li>
            <li>
              <Link href={"/categories/headphones"}>HEADPHONES</Link>
            </li>{" "}
            <li>
              <Link href={"/categories/speakers"}>SPEAKERS</Link>
            </li>{" "}
            <li>
              <Link href={"/categories/earphones"}>EARPHONES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className={style.desc}>
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a
          week.
        </p>
        <div className={style.socials}>
          <Link href={"#"} target="_blank">
            <Image src={facebook} alt="facebook" width={24} height={24} />
          </Link>
          <Link href={"#"} target="_blank">
            <Image src={twitter} alt="twitter" width={24} height={24} />
          </Link>
          <Link href={"#"} target="_blank">
            <Image src={instagram} alt="instagram" width={24} height={24} />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
}
