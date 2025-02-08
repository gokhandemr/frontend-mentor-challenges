// Next
import Image from "next/image";
// Styles
import style from "./style.module.css";
// Types
import {Transactions} from "@/types";

export default function Item({item}: {item: Transactions}) {
  const {date, amount, avatar, category, name, isPaid} = item;
  const transactionDate = date.includes("Monthly") ? date : `${new Date(date).getDate()} ${new Date(date).toLocaleString("en-US", {month: "short"})} ${new Date(date).getFullYear()}`;

  const transactionAmount = new Intl.NumberFormat("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(amount);

  return (
    <li className={`${isPaid !== undefined ? (isPaid ? style.paid : style.dueSoon) : ""}`}>
      <div>
        <Image src={avatar.slice(8)} alt={name} width={40} height={40} />
        <p>{name}</p>
      </div>
      <p>{category}</p>
      <p>{transactionDate}</p>
      <p className={`${amount > 0 ? style.green : ""}`}>{amount > 0 ? `+$${transactionAmount}` : `-$${transactionAmount.toString().slice(1)}`}</p>
    </li>
  );
}
