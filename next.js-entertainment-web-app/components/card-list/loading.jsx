// Styles
import style from "./style.module.css";
// Components
import Skeleton from "@/components/skeleton";

export default function CardListLoading({count}) {
  
  return (
    <section className={style.container}>
      <h2 style={{background: "#161d2f", width: "max-content", padding: "20px 90px"}}></h2>
      <ul>
        {Array(count ? count : 16)
          .fill(null)
          .map((_, index) => (
            <li key={index}>
              <Skeleton />
            </li>
          ))}
      </ul>
    </section>
  );
}
