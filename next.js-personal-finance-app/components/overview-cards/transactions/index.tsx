// Next
import Link from "next/link";
import Image from "next/image";
// Icons
import detailsIcon from "@/public/icon-caret-right.svg";
// Style
import style from "./style.module.css";
// Types
import {Transactions} from "@/types";

export default function TransactionsCard({response}: {response: Transactions[]}) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Transactions</p>
        <Link href={"/transactions"}>
          View All
          <Image src={detailsIcon} alt="icon" width={8} height={8} />
        </Link>
      </div>

      <ul className={style.main}>
        {response ? (
          response.slice(0, 5).map(({name, avatar, amount, date}: {name: string; avatar: string; amount: number; date: string}, index) => (
            <li key={index}>
              <div>
                <Image src={avatar.slice(8)} alt={name} width={40} height={40} />
                <p>{name}</p>
              </div>
              <div>
                <p className={`${amount > 0 ? style.green : ""}`}>{amount > 0 ? `$${amount.toFixed(2)}` : `-$${amount.toFixed(2).toString().slice(1)}`}</p>
                <p>{`${new Date(date).getDate()} ${new Date(date).toLocaleString("en-US", {month: "short"})} ${new Date(date).getFullYear()}`}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Empty</p>
        )}
      </ul>
    </div>
  );
}
