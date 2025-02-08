// Style
import style from "./style.module.css";

export default function SummaryBoxLoading() {
  return (
    <div className={`${style.boxContainer} ${style.loader}`}>
      <div></div>
      <div></div>
    </div>
  );
}
