"use client";
import React, {useEffect, useState} from "react";
// Next Utilities
import Link from "next/link";
import Image from "next/image";
// Zustand Global State
import useStore from "@/stores/useStore";
// Style
import style from "./style.module.css";

export default function CheckoutPageSummary() {
  // Zustand Cart & isFormCorrect & Checkout Modal Status
  const cart = useStore((state) => state.cart);
  const isFormCorrect = useStore((state) => state.isFormCorrect);
  const setIsCheckoutModalActive = useStore((state) => state.setIsCheckoutModalActive);

  // Total Price
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(cart.length > 0 ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0);
  }, [cart, isFormCorrect]);

  const handleSubmit = () => {
    setIsCheckoutModalActive(true);
  };

  return (
    <div className={style.container}>
      <h2 className="heading-h6">SUMMARY</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <div>
              <Link href={"/" + product.slug}>
                <Image src={product.image.desktop.slice(1)} alt={product.name} width={64} height={64} />
              </Link>
              <div>
                <p>{product.name.split(" ").slice(0, 1).join(" ")}</p>
                <p>$ {new Intl.NumberFormat("en-US").format(product.price)}</p>
              </div>
            </div>
            <p>x{product.quantity}</p>
          </li>
        ))}
      </ul>
      <div className={style.total}>
        <div>
          <p>TOTAL</p>
          <p>$ {new Intl.NumberFormat("en-US").format(totalPrice)}</p>
        </div>
        <div>
          <p>SHIPPING</p>
          <p>$ 50</p>
        </div>
        <div>
          <p>VAT (INCLUDED)</p>
          <p>$ {new Intl.NumberFormat("en-US").format(Math.floor((totalPrice / 100) * 20))}</p>
        </div>
        <div>
          <p>GRAND TOTAL</p>
          <p>$ {new Intl.NumberFormat("en-US").format(totalPrice + 50)}</p>
        </div>
        <button className={`${cart.length <= 0 || !isFormCorrect ? style.disabled : ""}`} onClick={handleSubmit}>
          CONTINUE & PAY
        </button>
      </div>
    </div>
  );
}
