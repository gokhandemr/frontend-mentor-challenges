// Style
import style from "./style.module.css";

export default function BudgetLoading() {
  return (
    <div className={`${style.budgetContainer} ${style.loader}`}>
      <span></span>
    </div>
  );
}
