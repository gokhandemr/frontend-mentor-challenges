// Styles
import style from "./style.module.css";
// Components
import Card from "@/components/card";

export default function CardList({results, title}) {
  return (
    <section className={style.container}>
      <h2>{title}</h2>
      <ul className={`${results.length < 1 ? style.emptyList : ""}`}>
        {results.length > 0 ? (
          results.map((media, index) => (
            <li key={index}>
              <Card media={media} />
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </section>
  );
}
