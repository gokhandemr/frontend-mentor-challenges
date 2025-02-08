"use client";
// Next
import Image from "next/image";
// Styles
import style from "./style.module.css";
// Icon
import minimizeOpen from "@/public/icon-minimize-menu.svg";
import minimizeFalse from "@/public/icon-caret-right.svg";

export default function MinimizeButton() {
  const handleClick = () => {
    const header = document.querySelector<HTMLElement>("header");
    const main = document.querySelector<HTMLElement>("main");

    if (header) {
      header.classList.toggle(style.minimize);
    }

    if (main) {
      main.classList.toggle("large-main");
    }
  };

  return (
    <button onClick={handleClick} className={style.minimizeButtonContainer}>
      <Image src={minimizeOpen} alt="button icon" width={24} height={24} />
      <Image src={minimizeFalse} alt="button icon" width={24} height={24} />
      <p>Minimize Menu</p>
    </button>
  );
}
