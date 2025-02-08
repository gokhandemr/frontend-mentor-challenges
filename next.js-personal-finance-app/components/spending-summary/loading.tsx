// Styles
import style from "./style.module.css";

export default function SpendingSummaryLoading() {
  return (
    <>
      <div className={style.loaderTitle}>
        <span></span>
      </div>
      <div className={style.loader}></div>
    </>
  );
}
