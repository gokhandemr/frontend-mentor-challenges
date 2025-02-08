// Types
import {Budgets, Transactions} from "@/types";
// Styles
import style from "./style.module.css";

type SpendingSummaryTypes = {
  budgets: Budgets[];
  transactions: Transactions[];
};
export default function SpendingSummary({budgets, transactions}: SpendingSummaryTypes) {
  const amountSpent = (category: string) => {
    const currentDefaultDate = new Date("August 19, 2024");
    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.category === category && new Date(transaction.date).getMonth() == currentDefaultDate.getMonth()
    );
    const calculatedTransactions =
      filteredTransactions.length > 1 ? filteredTransactions.reduce((total, item) => total + item.amount, 0) : 0;

    return `${new Intl.NumberFormat("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(
      calculatedTransactions < 0 ? -calculatedTransactions : 0
    )}`;
  };

  return (
    <div className={style.spendingSummaryContainer}>
      <p className={style.title}>Spending Summary</p>
      <ul>
        {budgets.map((budget, index) => (
          <li key={index}>
            <div>
              <span className={style.rectangle} style={{backgroundColor: budget.theme}}></span>
              <p>{budget.category}</p>
            </div>
            <p>
              <strong className={style.amountSpent}>${amountSpent(budget.category)}</strong> of $
              {new Intl.NumberFormat("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(
                budget.maximum
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
