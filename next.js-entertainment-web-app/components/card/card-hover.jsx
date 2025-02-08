"use client";
// Next
import Image from "next/image";
// Icons
import iconPlay from "@/public/icons/icon-play.svg";
// Style
import style from "./style.module.css";

export default function CardHover() {
  return (
    <div className={style.hoverContainer}>
      <button>
        <Image src={iconPlay} alt="hover icon" width={30} height={30} />
        Play
      </button>
    </div>
  );
}
