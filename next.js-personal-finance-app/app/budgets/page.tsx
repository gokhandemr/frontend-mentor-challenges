"use client";
// React
import {useEffect, useState} from "react";
// Services
import {fetchBudgets} from "@/services/budgets-service";
import {fetchTransactions} from "@/services/transactions-service";
// Types
import {Budgets, Transactions} from "@/types";
// Components: Budgets Page
import LeftSide from "./left-side";
import RightSide from "./right-side";
// Components
import PageTitle from "@/components/page-title";
import ManageBudgetModal from "@/components/modals/budget-modals/manage-budget";
import Button from "@/components/button";
import Loading from "./loading";

export default function BudgetsPage() {
  const [budgets, setBudgets] = useState<Budgets[]>([]);
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  // Loading State
  const [loading, setLoading] = useState<boolean>(true);
  // Add Modal State
  const [addModal, setAddModal] = useState(false);

  // Fetch Pots
  useEffect(() => {
    (async () => {
      const [budgetsResponse, transactionsResponse] = await Promise.all([fetchBudgets(), fetchTransactions()]);
      setBudgets(budgetsResponse);
      setTransactions(transactionsResponse);
      setLoading(false);
    })();
  }, []);

  // Loading
  if (loading) {
    return <Loading />;
  }

  // Manage Budget Modal
  // Transactions Categories Array, Themes Used and Budgets Used
  const transactionsCategories = [...new Set(transactions.map((transaction) => transaction.category))];
  const themesUsed = budgets.map((budget) => budget.theme);
  const budgetsUsed = budgets.map((budget) => budget.category);

  const addBudget = (newBudget: Budgets) => {
    if (budgets.filter((budget) => budget.category === newBudget.category).length > 0)
      return alert("Budget already available!");

    if (newBudget.category === "") return alert("Category name cannot be empty!");
    if (newBudget.maximum <= 0) return alert("Set the maximum amount!");
    if (themesUsed.includes(newBudget.theme)) return alert("This color has been used before");
    setBudgets([...budgets, newBudget]);
    setAddModal(false);
  };

  return (
    <>
      <PageTitle title="Budgets" />
      <Button title="+ Add New Budget" setState={setAddModal} />

      <LeftSide budgets={budgets} transactions={transactions} />
      <RightSide
        budgets={budgets}
        transactions={transactions}
        setBudgets={setBudgets}
        transactionsCategories={transactionsCategories}
        themesUsed={themesUsed}
        budgetsUsed={budgetsUsed}
      />
      {addModal && (
        <ManageBudgetModal
          type="add"
          themesUsed={themesUsed}
          budgetsUsed={budgetsUsed}
          transactionsCategories={transactionsCategories}
          setManageModal={setAddModal}
          handleClick={addBudget}
        />
      )}
    </>
  );
}
