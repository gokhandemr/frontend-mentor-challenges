// Types
import {DetailedSummary} from "@/types";
// Styles
import style from "./style.module.css";

export default function DetailedSummaryBox({paidBillsResult, paidBillsLength, totalResult, totalLength, dueSoonResult, dueSoonLength}: DetailedSummary) {
  return (
    <div className={style.container}>
      <h4>Summary</h4>
      <ul>
        <li>
          <p>Paid Bills</p>
          <p>{`${paidBillsLength} ($${paidBillsResult})`}</p>
        </li>
        <li>
          <p>Total Upcoming</p>
          <p>{`${totalLength} ($${totalResult})`}</p>
        </li>
        <li>
          <p>Due Soon</p>
          <p>{`${dueSoonLength} ($${dueSoonResult})`}</p>
        </li>
      </ul>
    </div>
  );
}
