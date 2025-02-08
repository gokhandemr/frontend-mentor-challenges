// React
import {useState} from "react";
// Next
import Image from "next/image";
// Style
import style from "./style.module.css";
// Icons
import openIcon from "@/public/icon-ellipsis.svg";
import closeIcon from "@/public/icon-close-modal.svg";

type BudgetTitleProps = {
  budgetName: string;
  theme: string;
  setEditModal: (value: boolean) => void;
  setDeleteModal: (value: boolean) => void;
};

export default function BudgetTitle({budgetName, theme, setEditModal, setDeleteModal}: BudgetTitleProps) {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  return (
    <div className={style.budgetTitleContainer}>
      <div>
        <span className={style.ellipse} style={{backgroundColor: theme}}></span>
        <p className={style.title}>{budgetName}</p>
      </div>

      <button onClick={() => setDropdownMenu(!dropdownMenu)}>
        {dropdownMenu ? (
          <Image src={closeIcon} width={16} height={16} alt="button icon" />
        ) : (
          <Image src={openIcon} width={16} height={16} alt="button icon" />
        )}
      </button>
      {dropdownMenu && (
        <div className={style.dropdownMenu}>
          <button onClick={() => (setEditModal(true), setDropdownMenu(false))}>Edit Budget</button>
          <button onClick={() => (setDeleteModal(true), setDropdownMenu(false))}>Delete Budget</button>
        </div>
      )}
    </div>
  );
}
