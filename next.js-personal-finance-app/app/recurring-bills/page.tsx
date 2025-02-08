// Services
import {fetchTransactions} from "@/services/transactions-service";
// Components
import PageTitle from "@/components/page-title";
import Table from "@/components/table";
import SummaryBox from "@/components/summary-box";
import DetailedSummaryBox from "@/components/detailed-summary-box";
// Icon
import totalBillsIcon from "@/public/icon-recurring-bills.svg";
// Style
import style from "./style.module.css";

export default async function RecurringBillsPage() {
  const response = await fetchTransactions();
  // Varsayılan güncel tarih
  const currentDefaultDate = new Date("August 19, 2024");

  // Yinelenen faturalar
  const recurringTransactions = response.filter((transaction) => transaction.recurring == true);

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

  // Components Values
  // SummaryBox
  const totalBills = -(paidBillsResult + totalUpcomingResult).toFixed(2);
  // DetailedSummaryBox
  const paidBills = {result: -paidBillsResult.toFixed(2), length: thisMonthTransactions.length};
  const totalUpcoming = {result: -totalUpcomingResult.toFixed(2), length: remainingDays.length};
  const dueSoon = {result: -dueSoonResult.toFixed(2), length: 2};
  // Table: thisMonthTransactions listesi sort metodu tarihe göre sıralandı, concat ile remaningDays'le birleştirildi ve map ile tarihleri Recurring Page'ine uygun olarak değiştirildi.
  const tableList = thisMonthTransactions
    .map((item) => ({...item, isPaid: true}))
    .sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate())
    .concat(
      remainingDays.map((item, index) => ({
        ...item,
        isPaid: index <= 1 ? false : undefined, // Undefined olabilir
      })) as {
        isPaid: boolean;
        avatar: string;
        name: string;
        category: string;
        date: string;
        amount: number;
        recurring: boolean;
      }[]
    )
    .map((item) => ({...item, date: `Monthly - ${new Date(item.date).getDate()}st`}));

  return (
    <>
      <PageTitle title="Recurring Bills" />
      <section className={style.leftSide}>
        <SummaryBox title="Total Bills" value={totalBills} icon={totalBillsIcon} isDark={true} />
        <DetailedSummaryBox
          paidBillsResult={paidBills.result}
          paidBillsLength={paidBills.length}
          totalResult={totalUpcoming.result}
          totalLength={totalUpcoming.length}
          dueSoonResult={dueSoon.result}
          dueSoonLength={dueSoon.length}
        />
      </section>
      <section className={style.rightSide}>
        <Table transactionsList={tableList} showDropdownSort={true} />
      </section>
    </>
  );
}
