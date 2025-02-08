import Image from "next/image";
import Link from "next/link";
// Style
import style from "./style.module.css";

export default function ProductPageOthers({others}) {
  return (
    others && (
      <section className={style.container}>
        <h4 className="heading-h3">YOU MAY ALSO LIKE</h4>
        <div className={style.products}>
          {others.map(({name, slug, image}, index) => (
            <article key={index} className={style.product}>
              <Image src={image.desktop.slice(1)} alt={name} width={350} height={318} />
              <h5 className="heading-h5">{name}</h5>
              <Link href={slug}>SEE PRODUCT</Link>
            </article>
          ))}
        </div>
      </section>
    )
  );
}
