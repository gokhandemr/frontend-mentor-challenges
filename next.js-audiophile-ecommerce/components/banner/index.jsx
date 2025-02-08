import Image from "next/image";
import Link from "next/link";
// Style
import style from "./style.module.css";
// Images
import bannerImage from "@/public/assets/home/tablet/image-header.jpg";
import responsiveImage from "@/public/assets/home/tablet/image-header.jpg";

export default function Banner() {
  const banner = {
    tag: "New product",
    title: "XX99 Mark II Headphones",
    desc: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    slug: "/xx99-mark-two-headphones",
    img: bannerImage,
    responsiveImg: responsiveImage,
  };

  return (
    <section className={style.container}>
      <div>
        <div className={style.productDetails}>
          <span className={style.tag}>{banner.tag}</span>
          <h1 className={`heading-h1 ${style.title}`}>{banner.title}</h1>
          <p className={style.desc}>{banner.desc}</p>
          <Link href={banner.slug} className={style.bannerLink}>
            SEE PRODUCT
          </Link>
        </div>
        <div className={style.bannerBackground}>
          <Image src={banner.img} alt={banner.title} quality={100} fill sizes="702px" />
          <Image src={banner.responsiveImg} alt={banner.title} quality={100} fill sizes="702px" className={style.responsiveIMG} />
        </div>
      </div>
    </section>
  );
}
