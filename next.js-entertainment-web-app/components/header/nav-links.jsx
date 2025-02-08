"use client";
// Next
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// Styles
import style from "./style.module.css";
// Icons
import iconHome from "@/public/icons/icon-nav-home.svg";
import iconMovies from "@/public/icons/icon-nav-movies.svg";
import iconTvSeries from "@/public/icons/icon-nav-tv-series.svg";
import iconBookmark from "@/public/icons/icon-nav-bookmark.svg";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={style.navLinks}>
      <ul>
        <li className={`${pathname == "/" ? style.active : ""}`}>
          <Link href="/">
            <Image src={iconHome} alt="home" width={20} height={20} />
          </Link>
        </li>
        <li className={`${pathname == "/movie" ? style.active : ""}`}>
          <Link href="/movie">
            <Image src={iconMovies} alt="Movie" width={20} height={20} />
          </Link>
        </li>
        <li className={`${pathname == "/tv" ? style.active : ""}`}>
          <Link href="/tv">
            <Image src={iconTvSeries} alt="Tv Series" width={20} height={20} />
          </Link>
        </li>
        <li className={`${pathname == "/bookmarked" ? style.active : ""}`}>
          <Link href="/bookmarked">
            <Image src={iconBookmark} alt="Bookmarked Movies" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
