// Styles
import style from "./style.module.css";

export default function TableLoading() {
  return (
    <div className={style.loader}>
      <div>
        <span></span>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <span></span>
    </div>
  );
}
