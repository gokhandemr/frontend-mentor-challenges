// Styles
import style from "./style.module.css";

export default function PotBoxLoading() {
  return (
    <div className={`${style.loader} ${style.container}`}>
      <span></span>
      <span></span>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
