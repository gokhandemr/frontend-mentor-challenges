// Styles
import style from "./style.module.css";
// Types
import {Budgets, Transactions} from "@/types";
// Components
import Budget from "@/components/budget";

type RightSidePropsTypes = {
  budgets: Budgets[];
  transactions: Transactions[];
  setBudgets: React.Dispatch<React.SetStateAction<Budgets[]>>;
  themesUsed: string[];
  budgetsUsed: string[];
  transactionsCategories: string[];
};

export default function RightSide({
  budgets,
  transactions,
  setBudgets,
  themesUsed,
  budgetsUsed,
  transactionsCategories,
}: RightSidePropsTypes) {
  // Default current date - Varsayılan güncel tarih
  const currentDefaultDate = new Date("August 19, 2024");
  // Latest Spending - Son harcamalar
  const latestSpending = (category: string) => {
    return transactions.filter((transaction) => transaction.category === category).slice(0, 3);
  };
  // Spent
  const spent = (category: string) => {
    const filteredSpending = transactions.filter(
      (transaction) =>
        new Date(transaction.date).getMonth() == currentDefaultDate.getMonth() && transaction.category === category
    );
    return filteredSpending.reduce((total, spent) => total + spent.amount, 0);
  };

  return (
    <section className={style.rightSide}>
      {budgets.length > 0 ? (
        budgets.map((budget, index) => (
          <Budget
            key={index}
            budget={budget}
            spent={spent(budget.category)}
            latestSpending={latestSpending(budget.category)}
            transactionsCategories={transactionsCategories}
            themesUsed={themesUsed}
            budgetsUsed={budgetsUsed}
            setBudgets={setBudgets}
          />
        ))
      ) : (
        <p>Empty..</p>
      )}
    </section>
  );
}
