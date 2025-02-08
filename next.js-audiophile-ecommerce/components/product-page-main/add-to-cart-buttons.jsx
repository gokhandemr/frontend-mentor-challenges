"use client";
import {useEffect, useState} from "react";
// Zustand
import useStore from "@/stores/useStore";
// Style
import style from "./style.module.css";

export default function AddToCartButtons({product}) {
  // Zustand Store
  const cart = useStore((state) => state.cart);
  const updateCart = useStore((state) => state.updateCart);
  // Product quantity
  const [quantity, setQuantity] = useState(1);
  // Loading Spinner
  const [isLoaderActive, setIsLoaderActive] = useState(false);

  const handleClick = () => {
    if (quantity > 0) {
      setIsLoaderActive(true);
      const oldItem = cart.find((item) => item.name == product.name);
      const newQuantity = oldItem ? oldItem.quantity + quantity : quantity;
      const newItem = {name: product.name, image: product.image, description: product.description, price: product.price, quantity: newQuantity, slug: product.slug};

      const filter = cart.filter((item) => item.name == product.name);
      const newCart = filter.length > 0 ? cart.map((item) => (item.name == product.name ? newItem : item)) : [...cart, newItem];

      updateCart(newCart);

      setTimeout(() => {
        setIsLoaderActive(false);
      }, 500);
    } else {
      alert("Please select quantity");
    }
  };

  return (
    <div className={style.addToCartContainer}>
      <div className={style.counter}>
        <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={handleClick} className={style.addToCartButton}>
        {isLoaderActive ? (
          <div className={style.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          "ADD TO CART"
        )}
      </button>
    </div>
  );
}
