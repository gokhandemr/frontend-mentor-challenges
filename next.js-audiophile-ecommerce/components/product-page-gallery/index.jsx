import Image from "next/image";
// Style
import style from "./style.module.css";

export default function ProductPageGallery({gallery, name}) {
  return (
    <section className={style.container}>
      <div>
        <Image src={gallery.first.desktop.slice(1)} alt={name} width={445} height={280} quality={100} />
        <Image src={gallery.second.desktop.slice(1)} alt={name} width={445} height={280} quality={100} />
      </div>
      <Image src={gallery.third.desktop.slice(1)} alt={name} width={635} height={592} quality={100} />
    </section>
  );
}
