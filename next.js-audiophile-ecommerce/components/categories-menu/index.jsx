import Image from "next/image";
import Link from "next/link";
// Style
import style from "./style.module.css";
// Images & Icons
import headphones from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "../../public/assets/shared/desktop/icon-arrow-right.svg";

export default function CategoriesMenu() {
  const categories = [
    {name: "Headphones", slug: "headphones", image: headphones},
    {name: "Speakers", slug: "speakers", image: speakers},
    {name: "Earphones", slug: "earphones", image: earphones},
  ];

  return (
    <section className={style.container}>
      {categories.map((cat, i) => (
        <div className={style.category} key={i}>
          <Image src={cat.image} width={200} alt={cat.name} className={style.categoryIMG} />
          <div>
            <h6 className="heading-h6">{cat.name}</h6>
            <Link href={"/categories/" + cat.slug}>
              SHOP
              <Image src={arrow} alt="icon arrow" width={5} height={10} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
