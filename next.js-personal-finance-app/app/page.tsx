// Services
import {fetchBalance} from "@/services/balance-service";
import {fetchBudgets} from "@/services/budgets-service";
import {fetchPots} from "@/services/pots-service";
import {fetchTransactions} from "@/services/transactions-service";
// Components
import BudgetsCard from "@/components/overview-cards/budgets";
import PotsCard from "@/components/overview-cards/pots";
import RecurringBills from "@/components/overview-cards/recurring-bills";
import TransactionsCard from "@/components/overview-cards/transactions";
import PageTitle from "@/components/page-title";
import SummaryBox from "@/components/summary-box";
// Style
import style from './page.module.css'

export default async function Home() {
  const [{current, income, expenses}, pots, transactions, budgets] = await Promise.all([fetchBalance(), fetchPots(), fetchTransactions(), fetchBudgets()]);

  return (
    <>
      <PageTitle title="Overview" />
      <section className={style.top}>
        <SummaryBox title="Current Balance" value={current} isDark={true} />
        <SummaryBox title="Income" value={income} />
        <SummaryBox title="Expenses" value={expenses} />
      </section>
      <section className={style.leftSide}>
        <PotsCard response={pots} />
        <TransactionsCard response={transactions} />
      </section>
      <section className={style.rightSide}>
        <BudgetsCard budgets={budgets} transactions={transactions} />
        <RecurringBills transactions={transactions} />
      </section>
    </>
  );
}
