// Styles
import style from "./style.module.css";
// Types
import {Budgets, Transactions} from "@/types";
// Components
import Chart from "@/components/chart";
import SpendingSummary from "@/components/spending-summary";

export default function LeftSide({budgets, transactions}: {budgets: Budgets[]; transactions: Transactions[]}) {
  // Default current date - Varsayılan güncel tarih
  const currentDefaultDate = new Date("August 19, 2024");
  // Sum of the maximum expenditure values of the categories in Budgest - Budgest'deki kategorileirin max harcama değerlerinin toplamı
  const budgetsMaxAmount = budgets.reduce((total, budget) => total + budget.maximum, 0);
  // We filtered the ‘transactions’ data by ‘budgets’ and ‘date’ and obtained the total spend. - 'transactions' verisini 'budgets' ve 'tarihe' göre filtreleyip toplam harcamayı aldık.
  const budgetsCategories = budgets.map((budget) => budget.category);
  const filteredTransactions = transactions.filter(
    (transaction) =>
      new Date(transaction.date).getMonth() == currentDefaultDate.getMonth() &&
      budgetsCategories.includes(transaction.category)
  );
  const totalAmount = Number(
    filteredTransactions
      .reduce((total, item) => total + item.amount, 0)
      .toString()
      .slice(1)
  );

  return (
    <section className={style.leftSide}>
      <Chart
        budgetNames={budgets.map((budget) => budget.category)}
        budgetMaxAmounts={budgets.map((budget) => budget.maximum)}
        budgetColors={budgets.map((budget) => budget.theme)}
        totalAmount={totalAmount}
        budgetsMaxAmount={budgetsMaxAmount}
      />
      <SpendingSummary budgets={budgets} transactions={transactions} />
    </section>
  );
}
