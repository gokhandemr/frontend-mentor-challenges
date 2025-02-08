"use client";
// React
import {useState} from "react";
// Types
import {Budgets, Transactions} from "@/types";
// Style
import style from "./style.module.css";
// Components
import BudgetTitle from "./budget-title";
import BudgetAmountBar from "./budget-amount-bar";
import BudgetLatestSpending from "./budget-latest-spending";
// Components: Modals
import DeleteBudgetModal from "../modals/budget-modals/delete-budget";
import ManageBudgetModal from "../modals/budget-modals/manage-budget";

type BudgetPropsType = {
  budget: Budgets;
  spent: number;
  latestSpending: Transactions[];
  transactionsCategories: string[];
  themesUsed: string[];
  budgetsUsed: string[];
  setBudgets: React.Dispatch<React.SetStateAction<Budgets[]>>;
};

export default function Budget({
  budget,
  spent,
  latestSpending,
  transactionsCategories,
  themesUsed,
  budgetsUsed,
  setBudgets,
}: BudgetPropsType) {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  // Modal: Delete Budget Function
  const deleteBudget = (name: string) => {
    setBudgets((prev: Budgets[]) => prev.filter((budget) => budget.category !== name));
  };
  // Modal: Edit Budget Function
  const editBudget = (newBudget: Budgets) => {
    setBudgets((prev: Budgets[]) => prev.map((budget) => (budget.category == newBudget.category ? newBudget : budget)));
    setEditModal(false);
  };

  return (
    <div className={style.budgetContainer}>
      <BudgetTitle
        budgetName={budget.category}
        theme={budget.theme}
        setEditModal={setEditModal}
        setDeleteModal={setDeleteModal}
      />
      <BudgetAmountBar maxAmount={budget.maximum} spent={spent} theme={budget.theme} />
      <BudgetLatestSpending latestSpending={latestSpending} />

      {deleteModal && (
        <DeleteBudgetModal name={budget.category} setDeleteModal={setDeleteModal} deleteBudget={deleteBudget} />
      )}
      {editModal && (
        <ManageBudgetModal
          type="edit"
          themesUsed={themesUsed}
          budgetsUsed={budgetsUsed}
          transactionsCategories={transactionsCategories}
          setManageModal={setEditModal}
          budget={budget}
          handleClick={editBudget}
        />
      )}
    </div>
  );
}
