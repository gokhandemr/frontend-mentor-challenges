// Style
import DetailedSummaryBoxLoading from "@/components/detailed-summary-box/loading";
import style from "./style.module.css";
// Components
import PageTitleLoading from "@/components/page-title/loading";
import SummaryBoxLoading from "@/components/summary-box/loading";
import TableLoading from "@/components/table/loading";

export default function Loading() {
  return (
    <>
      <PageTitleLoading />
      <section className={style.leftSide}>
        <SummaryBoxLoading />
        <DetailedSummaryBoxLoading />
      </section>
      <section className={style.rightSide}>
        <TableLoading />
      </section>
    </>
  );
}
