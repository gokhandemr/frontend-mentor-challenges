// Style
import style from "./style.module.css";

export default function BudgetAmountBar({maxAmount, spent, theme}: {maxAmount: number; spent: number; theme: string}) {
  const barWidthValue = `${(spent / maxAmount) * 100 > 0 ? (spent / maxAmount) * 100 : -((spent / maxAmount) * 100)}%`;

  return (
    <div className={style.budgetAmountBarContainer}>
      <p className={style.maximumText}>{`Maximum of $${maxAmount}`}</p>

      <div className={style.bar}>
        <span style={{backgroundColor: theme, width: barWidthValue}} className={style.barValue}></span>
      </div>

      <div className={style.spentAndRemaining}>
        <div style={{borderColor: theme}}>
          <p>Spent</p>
          <p>
            $
            {new Intl.NumberFormat("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(
              spent < 0 ? -spent : spent
            )}
          </p>
        </div>
        <div>
          <p>Remaining</p>
          <p>
            $
            {new Intl.NumberFormat("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(
              maxAmount - (spent <= 0 ? -spent : spent) <= 0 ? 0 : maxAmount - (spent <= 0 ? -spent : spent)
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
