"use client";
// Next Utilities
import Link from "next/link";
import Image from "next/image";
// Style
import style from "./style.module.css";

export default function CategoryPageProduct({product}) {
  const {slug, name, description, image} = product;

  return (
    <article className={style.container}>
      <div className={style.image}>
        <Image src={image.desktop.slice(1)} alt={name} fill sizes="540px" />
      </div>
      <div className={style.details}>
        {product.new && <span>NEW PRODUCT</span>}
        <h3 className="heading-h2">{name}</h3>
        <p>{description}</p>
        <Link href={"../" + slug}>See Product</Link>
      </div>
    </article>
  );
}
