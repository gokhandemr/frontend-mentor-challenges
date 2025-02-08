// Next
import Image from "next/image";
import Link from "next/link";
// Icon
import icon from "@/public/icon-caret-right.svg";
// Styles
import style from "./style.module.css";
// Types
import {Transactions} from "@/types";

export default function RecurringBills({transactions}: {transactions: Transactions[]}) {
  // Varsayılan güncel tarih
  const currentDefaultDate = new Date("August 19, 2024");

  // Yinelenen faturalar
  const recurringTransactions = transactions.filter((transaction) => transaction.recurring == true);

  //  Bu ayın ödenmiş olanları
  const thisMonthTransactions = recurringTransactions.filter(
    (transaction) => new Date(transaction.date).getMonth() == currentDefaultDate.getMonth()
  );
  const paidBillsResult = thisMonthTransactions.reduce((total, {amount}) => total + amount, 0);

  //  Geçen ay ödenilen faturalardan yola çıkarak bu ay ödenmesi gerekenlerin kalanı. Kalanları yakalamak için bugünkü günden sonra gelen faturaları aldık.
  const remainingDays = recurringTransactions.filter((x) => new Date(x.date).getDate() > currentDefaultDate.getDate());
  const totalUpcomingResult = remainingDays.reduce((total, {amount}) => total + amount, 0);

  //  Yaklaşan en yakın tarihli ilk iki faturanın toplamı
  const dueSoonSort = remainingDays.sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
  const dueSoonResult = dueSoonSort.slice(0, 2).reduce((total, item) => total + item.amount, 0);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Recurring Bills</p>
        <Link href={"/recurring-bills"}>
          See Details
          <Image src={icon} alt="Recurring Bills Icon" width={8} height={8} />
        </Link>
      </div>

      <ul className={style.main}>
        <li>
          <p>Paid Bills</p>
          <p>${-paidBillsResult.toFixed(2)}</p>
        </li>
        <li>
          <p>Total Upcoming</p>
          <p>${-totalUpcomingResult.toFixed(2)}</p>
        </li>
        <li>
          <p>Due Soon</p>
          <p>${-dueSoonResult.toFixed(2)}</p>
        </li>
      </ul>
    </div>
  );
}
