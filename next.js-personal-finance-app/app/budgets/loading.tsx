// Styles
import style from "./style.module.css";
// Components
import PageTitleLoading from "@/components/page-title/loading";
import ChartLoading from "@/components/chart/loading";
import SpendingSummaryLoading from "@/components/spending-summary/loading";
import BudgetLoading from "@/components/budget/loading";

export default function Loading() {
  return (
    <>
      <PageTitleLoading />
      <section className={style.leftSide}>
        <ChartLoading />
        <SpendingSummaryLoading />
      </section>
      <section className={style.rightSide}>
        {Array.from({length: 4}).map((_, index) => (
          <BudgetLoading key={index} />
        ))}
      </section>
    </>
  );
}
