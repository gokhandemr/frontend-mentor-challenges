// Styles
import style from "./style.module.css";

export default function DetailedSummaryBoxLoading() {
  return (
    <div className={`${style.container} ${style.loader}`}>
      <div></div>
      <div></div>
    </div>
  );
}
