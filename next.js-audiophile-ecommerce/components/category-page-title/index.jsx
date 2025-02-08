import style from "./style.module.css";

export default function CategoryPageTitle({title}) {
  return <h2 className={`heading-h2 ${style.container}`}>{title}</h2>;
}
