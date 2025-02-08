"use client";
import React, {useEffect, useState} from "react";
// Next
import Image from "next/image";
import {useRouter} from "next/navigation";
// Icon
import confirmationIcon from "@/public/assets/checkout/icon-order-confirmation.svg";
// Zustand Global State
import useStore from "@/stores/useStore";
// Style
import style from "./style.module.css";
import Link from "next/link";

export default function CheckoutConfirmationModal() {
  const router = useRouter();
  // Zustand Cart
  const cart = useStore((state) => state.cart);
  const removeAllProducts = useStore((state) => state.removeAllProducts);
  // Checkout Modal Status
  const isCheckoutModalActive = useStore((state) => state.isCheckoutModalActive);
  const setIsCheckoutModalActive = useStore((state) => state.setIsCheckoutModalActive);
  // Total Price
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(cart.length > 0 ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0);
  }, [cart]);
  // Show More Button
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    removeAllProducts();
    setIsCheckoutModalActive(false);
    router.push("/");
  };

  return (
    isCheckoutModalActive && (
      <div className={style.container}>
        <div className={style.containerContent}>
          <Image src={confirmationIcon} width={64} height={64} alt="Order Confirmation Icon" />
          <p className="heading-h3">
            THANK YOU
            <br /> FOR YOUR ORDER
          </p>
          <p>You will receive an email confirmation shortly.</p>

          <div>
            <ul>
              {(!showMore ? cart.slice(0, 1) : cart).map((product, index) => (
                <li key={index}>
                  <div>
                    <Image src={product.image.desktop.slice(1)} alt={product.name} width={50} height={50} />
                    <div>
                      <p>{product.name.split(" ").slice(0, 1).join(" ")}</p>
                      <p>$ {new Intl.NumberFormat("en-US").format(product.price)}</p>
                    </div>
                  </div>
                  <p>x{product.quantity}</p>
                </li>
              ))}

              {cart.length > 1 && (
                <>
                  <span className={style.divider}></span>
                  <button onClick={() => setShowMore((prev) => !prev)}>{!showMore ? `and ${cart.length - 1} other item(s)` : "View less"}</button>
                </>
              )}
            </ul>
            <div>
              <p>GRAND TOTAL</p>
              <p>$ {new Intl.NumberFormat("en-US").format(totalPrice + 50)}</p>
            </div>
          </div>
          <button className={style.backToHomeButton} onClick={handleClick}>
            BACK TO HOME
          </button>
        </div>
      </div>
    )
  );
}
