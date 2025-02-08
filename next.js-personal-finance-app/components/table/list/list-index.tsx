// Styles
import style from "./style.module.css";
// Types
import {Transactions} from "@/types";
// Components
import Item from "./list-item";

export default function List({transactions}: {transactions: Transactions[]}) {
  return (
    <div className={style.listContainer}>
      <div className={style.listContainerHeader}>
        <p>Recipient / Sender</p>
        <p>Category</p>
        <p>Transaction Date</p>
        <p>Amount</p>
      </div>

      <ul>
        {transactions.length > 0 ? (
          transactions.map((item, index) => (
            <Item key={index} item={item} />
          ))
        ) : (
          <p className={style.emptyList}>No transactions found.</p>
        )}
      </ul>
    </div>
  );
}
