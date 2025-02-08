"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
// Style
import style from "./style.module.css";
// Zustand
import useStore from "@/stores/useStore";

export default function Cart() {
  // Zustand Cart: Product Management
  const cart = useStore((state) => state.cart);
  const removeAllProducts = useStore((state) => state.removeAllProducts);
  const updateCart = useStore((state) => state.updateCart);
  // Zustand Cart: Container Status
  const isCartActive = useStore((state) => state.isCartActive);
  const changeCartStatus = useStore((state) => state.changeCartStatus);
  // Total Price
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(cart.length > 0 ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0);
  }, [cart]);

  // Buttons
  const increaseButton = (productName) => {
    let newCart = cart.map((item) => (item.name == productName ? {...item, quantity: item.quantity + 1, price: item.price} : item));
    updateCart(newCart);
  };
  const decreaseButton = (productName, quantity) => {
    let newCart = [];
    if (quantity === 1) {
      newCart = cart.filter((item) => item.name !== productName && item);
    } else {
      newCart = cart.map((item) => (item.name == productName ? {...item, quantity: item.quantity - 1} : item));
    }
    updateCart(newCart);
  };

  return (
    isCartActive && (
      <>
        <div className={style.background} onClick={() => changeCartStatus(false)}></div>
        <div className={style.cartContainer}>
          <div>
            {cart.length > 0 ? (
              <>
                <div className={style.cartTopSection}>
                  <p className="heading-h6">CART({cart.length})</p>
                  <button onClick={removeAllProducts} className={style.removeAllButton}>
                    Remove All
                  </button>
                </div>
                <ul className={style.cartProducts}>
                  {cart &&
                    cart.map((product, i) => (
                      <li key={i}>
                        <Link href={"/" + product.slug}>
                          <Image src={product.image.desktop.slice(1)} alt={product.name} width={64} height={64} />
                          <div>
                            <p>{product.name.split(" ").slice(0, 1).join(" ")}</p>
                            <p>$ {new Intl.NumberFormat("en-US").format(product.price)}</p>
                          </div>
                        </Link>

                        <div className={style.cartButtons}>
                          <button onClick={() => decreaseButton(product.name, product.quantity)}>-</button>
                          <p>{product.quantity}</p>
                          <button onClick={() => increaseButton(product.name)}>+</button>
                        </div>
                      </li>
                    ))}
                </ul>

                <div className={style.totalPriceContainer}>
                  <p>TOTAL</p>
                  <p>
                    <strong>$ {new Intl.NumberFormat("en-US").format(totalPrice)}</strong>
                  </p>
                </div>
                <Link href={"/checkout"} className={style.checkoutLink}>
                  CHECKOUT
                </Link>
              </>
            ) : (
              <p>You have not added any products to your cart yet</p>
            )}
          </div>
        </div>
      </>
    )
  );
}
