"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import Image from "next/image";
// Icon
import responsiveMenuIcon from "../../public/assets/shared/tablet/icon-hamburger.svg";
// Style
import style from "./style.module.css";
// Components
import Categories from "../categories-menu";
// Zustand
import useStore from "@/stores/useStore";

export default function ResponsiveMenu() {
  const pathname = usePathname();
  // Zustand Cart: Container Status
  const changeCartStatus = useStore((state) => state.changeCartStatus);
  // Zustand Responsive Menu: Container Status
  const isResponsiveMenuActive = useStore((state) => state.isResponsiveMenuActive);
  const changeResponsiveMenuStatus = useStore((state) => state.changeResponsiveMenuStatus);

  useEffect(() => {
    changeResponsiveMenuStatus(false);
  }, [pathname]);

  return (
    <>
      <button onClick={() => (changeResponsiveMenuStatus(!isResponsiveMenuActive), changeCartStatus(false))} className={style.responsiveMenuButton}>
        <Image src={responsiveMenuIcon} alt="icon" width={16} height={16} />
      </button>
      {isResponsiveMenuActive && (
        <nav className={style.responsiveMenu}>
          <Categories />
          <span className={style.responsiveMenuBackground} onClick={() => changeResponsiveMenuStatus(false)}></span>
        </nav>
      )}
    </>
  );
}
