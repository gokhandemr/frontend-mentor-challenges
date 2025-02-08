import style from "./style.module.css";

export default function Skeleton({isTrending}) {
  return <span className={`${style.loader} ${isTrending ? style.trendingCard : ""}`}></span>;
}
