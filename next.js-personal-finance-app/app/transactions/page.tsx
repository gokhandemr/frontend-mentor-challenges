// Components
import PageTitle from "@/components/page-title";
import Table from "@/components/table";
// Services
import {fetchTransactions} from "@/services/transactions-service";

export default async function TransactionsPage() {
  const response = await fetchTransactions();

  return (
    <>
      <PageTitle title="Transactions" />
      <Table transactionsList={response} showDropdownCategory={true} showDropdownSort={true} />
    </>
  );
}
