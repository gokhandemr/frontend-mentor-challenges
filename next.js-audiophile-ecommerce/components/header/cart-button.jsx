"use client";
import Image from "next/image";
import {usePathname} from "next/navigation";
// Style
import style from "./style.module.css";
// Icon
import cartIcon from "@/public/assets/shared/desktop/icon-cart.svg";
// Zustand
import useStore from "@/stores/useStore";
import {useEffect} from "react";

export default function CartButton() {
  const isCartActive = useStore((state) => state.isCartActive);
  const changeCartStatus = useStore((state) => state.changeCartStatus);
  // Zustand Responsive Menu: Container Status
  const changeResponsiveMenuStatus = useStore((state) => state.changeResponsiveMenuStatus);
  const cart = useStore((state) => state.cart);

  // cart component closes when path name changes
  const pathname = usePathname();
  useEffect(() => {
    changeCartStatus(false);
  }, [pathname]);

  return (
    <button onClick={() => (changeCartStatus(!isCartActive), changeResponsiveMenuStatus(false))} className={`${style.cart} ${cart.length > 0 ? style.cartAnimation : ""}`}>
      <Image src={cartIcon} alt="cart icon" />
      {cart.length > 0 && <span className={style.cartLength}>{cart.length}</span>}
    </button>
  );
}
