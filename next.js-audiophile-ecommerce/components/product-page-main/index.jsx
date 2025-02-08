import Image from "next/image";
// Style
import style from "./style.module.css";
// Components
import AddToCartButtons from "./add-to-cart-buttons";

export default function ProductPageMain({name, image, isNew, description, price, slug}) {
  const product = {name, image, isNew, description, price, slug};
  const priceFormat = new Intl.NumberFormat("en-US").format(price);

  return (
    <main className={style.container}>
      <div className={style.image}>
        <Image src={image.desktop.slice(1)} alt={name} fill sizes="540px" />
      </div>
      <div className={style.details}>
        {isNew && <span>NEW PRODUCT</span>}
        <h1 className="heading-h2">{name}</h1>
        <p className={style.description}>{description}</p>
        <p className={style.price}>$ {priceFormat}</p>

        <AddToCartButtons product={product} />
      </div>
    </main>
  );
}
