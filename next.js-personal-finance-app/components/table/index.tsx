"use client";
// React
import {useEffect, useState} from "react";
// Types
import {Transactions} from "@/types";
// Styles
import style from "./style.module.css";
// Components
import List from "./list/list-index";
import Pagination from "../pagination";
import InputFields from "./input-fields";

interface Table {
  transactionsList: Transactions[];
  showDropdownSort?: boolean;
  showDropdownCategory?: boolean;
}

export default function Table({transactionsList, showDropdownSort = false, showDropdownCategory = false}: Table) {
  const [transactions, setTransactions] = useState<Transactions[]>(transactionsList);

  // PAGINATION
  // -Total Pages: Pagination'ın sayfalara bölünmesi ve ayrıca 1'den büyükse "Pagination"'ın gözükmesi işlemlerini sağlar
  const totalPages = Math.ceil(transactions.length / 10);
  // -Active Page: Sayfa başına kaç adet transaction'ın gösterileceği de yine bu state yardımıyla yapılmakta. min: state-1*10, max: state*10
  const [activePage, setActivePage] = useState<number>(1);
  // PAGINATION

  // INPUT FIELDS
  // -Search input value
  const [searchValue, setSearchValue] = useState<string>("");
  // -Sort dropdown value
  const [sortValue, setSortValue] = useState<string>("Latest");
  // -Category dropdown values
  const [categoryValue, setCategoryValue] = useState<string>("All");
  const transactionsCategoryNames = Array.from(new Set(transactionsList.map((transaction) => transaction.category)));
  // INPUT FIELDS

  useEffect(() => {
    // Listeyi kopyalama işlemi
    let filteredTransactions = transactionsList;
    // Arama filtresi
    if (searchValue) {
      filteredTransactions = filteredTransactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    // Kategori filtresi
    if (categoryValue !== "All") {
      filteredTransactions = filteredTransactions.filter((transaction) => transaction.category === categoryValue);
    }
    // Listeleme filtresi
    const sortedTransactions = [...filteredTransactions];
    if (sortValue === "Oldest") {
      sortedTransactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortValue === "AZ") {
      sortedTransactions.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "ZA") {
      sortedTransactions.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortValue === "Highest") {
      sortedTransactions.sort((a, b) => b.amount - a.amount);
    } else if (sortValue === "Lowest") {
      sortedTransactions.sort((a, b) => a.amount - b.amount);
    } else {
      sortedTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    // Filtrelenmiş veriyi state'e yaz
    setTransactions(sortedTransactions);
    // Aktif sayfa numarasını 1'e çek
    setActivePage(1);
  }, [searchValue, sortValue, categoryValue, transactionsList]);

  return (
    <div className={style.container}>
      <InputFields
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        showDropdownSort={showDropdownSort}
        setSortValue={setSortValue}
        showDropdownCategory={showDropdownCategory}
        categoryNames={transactionsCategoryNames}
        setCategoryValue={setCategoryValue}
      />

      <List transactions={transactions.slice((activePage - 1) * 10, activePage * 10)} />
      {totalPages > 1 && <Pagination totalPages={totalPages} activePage={activePage} setActivePage={setActivePage} />}
    </div>
  );
}
