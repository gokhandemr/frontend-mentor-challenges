// Style
import style from "./style.module.css";
// Components
import Skeleton from "@/components/skeleton";

export default function TrendingLoading() {
  return (
    <section className={style.container}>
      <h1 style={{background: "#161d2f", padding: "20px 90px", width: "max-content"}}></h1>
      <ul>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <li key={index}>
              <Skeleton isTrending={true} />
            </li>
          ))}
      </ul>
    </section>
  );
}
