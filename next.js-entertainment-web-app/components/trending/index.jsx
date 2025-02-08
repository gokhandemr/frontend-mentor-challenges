// Components
import Card from "@/components/card";
// Styles
import style from "./style.module.css";

export default async function Trending({results}) {
  return (
    <section className={style.container}>
      <h1>Trending</h1>
      {results && results.length > 0 && (
        <ul>
          {results.slice(0, 5).map((media, index) => (
            <li key={index}>
              <Card isTrending={true} media={media} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
