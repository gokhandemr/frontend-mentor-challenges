// Types
import {Transactions} from "@/types";
// Next
import Image from "next/image";
import Link from "next/link";
// Style
import style from "./style.module.css";

export default function BudgetLatestSpending({latestSpending}: {latestSpending: Transactions[]}) {
  // Boşsa
  if (latestSpending.length < 1) return <p>Empty..</p>;

  return (
    <div className={style.budgetLatestSpendingContainer}>
      <div>
        <p className={style.title}>Latest Spending</p>
        <Link className={style.link} href="/transactions">
          Sell All
        </Link>
      </div>
      <ul className={style.list}>
        {latestSpending.map((item, index) => (
          <li key={index}>
            <div>
              <Image src={item.avatar.slice(8)} alt={item.name} width={40} height={40} />
              <p className={style.name}>{item.name}</p>
            </div>

            <div>
              <p className={style.amount} style={item.amount > 0 ? {color: "green"} : {}}>
                {item.amount > 0
                  ? `+$${new Intl.NumberFormat("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(
                      item.amount
                    )}`
                  : `-$${new Intl.NumberFormat("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})
                      .format(item.amount)
                      .toString()
                      .slice(1)}`}
              </p>
              <p className={style.date}>
                {new Date(item.date).getDate()} {new Date(item.date).toLocaleString("en-US", {month: "short"})}{" "}
                {new Date(item.date).getFullYear()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
