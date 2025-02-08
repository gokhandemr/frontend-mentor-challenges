// Next
import Image from "next/image";
import Link from "next/link";
// Styles
import style from "./style.module.css";
// Icons
import budgetsIcon from "@/public/icon-caret-right.svg";
// Components
import Chart from "@/components/chart";
// Types
import {Budgets, Transactions} from "@/types";

export default function BudgetsCard({budgets, transactions}: {budgets: Budgets[]; transactions: Transactions[]}) {
  // Varsayılan güncel tarih
  const currentDefaultDate = new Date("August 19, 2024");

  // Budgest'deki kategorileirin max harcama değerlerinin toplamı
  const budgetsMaxAmount = budgets.reduce((total, budget) => total + budget.maximum, 0);

  //'transactions' verisini 'budgets' ve 'tarihe' göre filtreleyip toplam harcamayı aldık.
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
    <div className={style.container}>
      <div className={style.header}>
        <p>Budgets</p>
        <Link href={"/budgets"}>
          See Details
          <Image src={budgetsIcon} alt="budgets icon" width={8} height={8} />
        </Link>
      </div>

      <div className={style.main}>
        <Chart
          budgetNames={budgets.map((budget) => budget.category)}
          budgetMaxAmounts={budgets.map((budget) => budget.maximum)}
          budgetColors={budgets.map((budget) => budget.theme)}
          totalAmount={totalAmount}
          budgetsMaxAmount={budgetsMaxAmount}
        />
        <ul className={style.budgetsSmall}>
          {budgets.map((budget, index) => (
            <li key={index}>
              <span style={{backgroundColor: `${budget.theme}`}}></span>
              <p>{budget.category}</p>
              <p>{budget.maximum}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
