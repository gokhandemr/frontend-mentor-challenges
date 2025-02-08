import Image from "next/image";
// Style
import style from "./style.module.css";
// Image
import img from "../../public/assets/shared/desktop/image-best-gear.jpg";

export default function StoreDescription() {
  return (
    <section className={style.container}>
      <div className={style.desc}>
        <h4 className="heading-h2">
          Bringing you the <strong>best</strong> audio gear
        </h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a
          wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={style.image}>
        <Image src={img} alt="audiophile" fill quality={100} sizes="540px" />
      </div>
    </section>
  );
}
