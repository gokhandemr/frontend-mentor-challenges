import Image from "next/image";
import Link from "next/link";
// Style
import style from "./style.module.css";
// Images
import circles from "../../public/assets/home/desktop/pattern-circles.svg";
import zx9 from "@/public/assets/home/desktop/image-speaker-zx9.png";
import zx7 from "@/public/assets/home/desktop/image-speaker-zx7.jpg";
import earphones from "@/public/assets/home/desktop/image-earphones-yx1.jpg";

export default function FeaturedProducts() {
  const featuredProducts = [
    {title: "ZX9 speaker", desc: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.", img: zx9, slug: "/zx9-speaker"},
    {title: "ZX7 speaker", img: zx7, slug: "/zx7-speaker"},
    {title: "YX1 earphones", img: earphones, slug: "/yx1-earphones"},
  ];
  return (
    <section className={style.container}>
      <div>
        <div className={style.productImage}>
          <Image src={featuredProducts[0].img} alt={featuredProducts[0].title} width={410} height={493} quality={100} />
          <Image src={circles} alt="speaker zx9 circles" className={style.circles} width={1000} height={1000} />
        </div>
        <div className={style.productDetails}>
          <h2 className="heading-h1">{featuredProducts[0].title}</h2>
          <p>{featuredProducts[0].desc}</p>
          <Link href={featuredProducts[0].slug}>SEE PRODUCT</Link>
        </div>
      </div>

      <div>
        <div className={style.productDetails}>
          <h3 className="heading-h5">{featuredProducts[1].title}</h3>
          <Link href={featuredProducts[1].slug}>SEE PRODUCT</Link>
        </div>
        <div className={style.productImage}>
          <Image src={featuredProducts[1].img} alt={featuredProducts[1].title} fill sizes="540px" quality={100} />
        </div>
      </div>

      <div>
        <div className={style.productImage}>
          <Image src={featuredProducts[2].img} alt={featuredProducts[2].title} fill sizes="540px" quality={100} />
        </div>
        <div className={style.productDetails}>
          <h3 className="heading-h5">{featuredProducts[2].title}</h3>
          <Link href={featuredProducts[2].slug}>SEE PRODUCT</Link>
        </div>
      </div>
    </section>
  );
}
