// Styles
import style from "./style.module.css";
// Icons
import overview from "@/public/icon-nav-overview.svg";
import transactions from "@/public/icon-nav-transactions.svg";
import budgets from "@/public/icon-nav-budgets.svg";
import pots from "@/public/icon-nav-pots.svg";
import recurring from "@/public/icon-nav-recurring-bills.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const nav: {name: string; icon: string}[] = [
    {name: "Overview", icon: overview},
    {name: "Transactions", icon: transactions},
    {name: "Budgets", icon: budgets},
    {name: "Pots", icon: pots},
    {name: "Recurring Bills", icon: recurring},
  ];

  return (
    <nav className={style.navContainer}>
      <ul>
        {nav.map((item: {name: string; icon: string}, index: number) => (
          <li key={index}>
            <Link href={item.name == "Overview" ? "/" : "/" + item.name.toLocaleLowerCase().replace(" ", "-")}>
              <Image src={item.icon} alt={item.name} width={24} height={24} />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
