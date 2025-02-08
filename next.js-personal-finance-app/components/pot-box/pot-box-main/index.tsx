// Type
import {Pots} from "@/types";
// Styles
import style from "./style.module.css";

export default function PotBoxMain({pot}: {pot: Pots}) {
  const percentage = (pot.total * 100) / pot.target;

  return (
    <div className={style.main}>
      <div className={style.mainTop}>
        <p>Total Saved</p>
        <p>${new Intl.NumberFormat("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(pot.total)}</p>
      </div>
      <div className={style.mainBar}>
        <span style={{backgroundColor: pot.theme, width: `${percentage}%`}}></span>
      </div>
      <div className={style.mainBottom}>
        <p>{percentage.toFixed(2)}%</p>
        <p>Target of ${new Intl.NumberFormat("en-US", {maximumFractionDigits: 2}).format(pot.target)}</p>
      </div>
    </div>
  );
}
