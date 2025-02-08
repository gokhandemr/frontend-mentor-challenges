"use client";
// React
import {useState} from "react";
// Types
import {Budgets} from "@/types";
// Style
import style from "./style.module.css";
// Next
import Image from "next/image";
// Icon
import closeIcon from "@/public/icon-close-modal.svg";
import arrowIcon from "@/public/icon-caret-down.svg";

type ManageBudgetProps =
  | {
      type: "edit";
      budget: Budgets;
      themesUsed: string[];
      budgetsUsed: string[];
      transactionsCategories: string[];
      setManageModal: (value: boolean) => void;
      handleClick: (value: Budgets) => void;
    }
  | {
      type: "add";
      budget?: never;
      themesUsed: string[];
      budgetsUsed: string[];
      transactionsCategories: string[];
      setManageModal: (value: boolean) => void;
      handleClick: (value: Budgets) => void;
    };

export default function ManageBudgetModal({
  type,
  themesUsed,
  budgetsUsed,
  setManageModal,
  budget,
  transactionsCategories,
  handleClick,
}: ManageBudgetProps) {
  // List of colors
  const allColors = [
    {value: "#277C78", label: "Green"},
    {value: "#F2CDAC", label: "Yellow"},
    {value: "#82C9D7", label: "Cyan"},
    {value: "#626070", label: "Navy"},
    {value: "#C94736", label: "Red"},
    {value: "#826CB0", label: "Purple"},
    {value: "#597C7C", label: "Turquoise"},
    {value: "#93674F", label: "Brown"},
    {value: "#934F6F", label: "Magenta"},
    {value: "#3F82B2", label: "Blue"},
    {value: "#97A0AC", label: "Navy Grey"},
    {value: "#7F9161", label: "Army Green"},
    {value: "#AF81BA", label: "Pink"},
    {value: "#CAB361", label: "Gold"},
    {value: "#BE6C49", label: "Orange"},
  ];

  // Category Input
  const [category, setCategory] = useState<string>(
    type === "edit" ? transactionsCategories.filter((cat) => cat === budget.category)[0] : transactionsCategories[0]
  );
  const [categorySelectList, setCategorySelectList] = useState<boolean>(false);
  // Max Spend Input
  const [maxSpend, setMaxSpend] = useState<number>(type === "edit" ? budget.maximum : 0);
  // Theme Color Input
  const [theme, setTheme] = useState<{value: string; label: string}>(
    type === "edit" ? allColors.filter((color) => color.value === budget.theme)[0] : allColors[0]
  );
  const [themeSelectList, setThemeSelectList] = useState<boolean>(false);

  const newBudget = {category: category, maximum: maxSpend, theme: theme.value};

  return (
    <div className={style.manageBudgetModalContainer}>
      <div className={style.background} onClick={() => setManageModal(false)}></div>

      <div className={style.manageBudgetBody}>
        <div className={style.manageBudgetHeader}>
          <div>
            <p className={style.title}>{type === "add" ? "Add New Budget" : "Edit Budget"}</p>
            <button className={style.closeButton} onClick={() => setManageModal(false)}>
              <Image src={closeIcon} alt="Close" width={24} height={24} />
            </button>
          </div>
          <p className={style.description}>
            {type === "add"
              ? "Choose a category to set a spending budget. These categories can help you monitor spending."
              : "As your budgets change, feel free to update your spending limits."}
          </p>
        </div>

        <div className={style.manageBudgetMain}>
          <div className={style.inputContainer}>
            <label>Budget Category</label>
            <button
              className={style.categoryListButton}
              onClick={() => type == "add" && setCategorySelectList(!categorySelectList)}
              style={type == "edit" ? {opacity: ".2"} : {}}
            >
              <p>{category}</p>
              <span className={style.arrowIcon}>
                <Image src={arrowIcon} alt="arrow icon" width={8} height={8} />
              </span>
            </button>
            {categorySelectList && (
              <ul className={style.categoryList}>
                {transactionsCategories.map((cat, index) => (
                  <li
                    className={`${budgetsUsed.includes(cat) ? style.usedItem : ""}`}
                    key={index}
                    onClick={() => !budgetsUsed.includes(cat) && (setCategory(cat), setCategorySelectList(false))}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={style.inputContainer}>
            <label>Maximum Spend</label>
            <input type="number" value={maxSpend} onChange={(e) => setMaxSpend(Number(e.target.value))} />
          </div>

          <div className={style.inputContainer}>
            <label>Theme</label>
            <button className={style.colorListButton} onClick={() => setThemeSelectList(!themeSelectList)}>
              <p style={themesUsed.includes(theme.value) ? {opacity: ".5"} : {}}>{theme.label}</p>
              <span className={style.arrowIcon}>
                <Image src={arrowIcon} alt="arrow icon" width={8} height={8} />
              </span>
            </button>

            {themeSelectList && (
              <ul className={style.colorList}>
                {allColors.map((color) => (
                  <li
                    key={color.value}
                    className={`${themesUsed.includes(color.value) ? style.usedItem : ""}`}
                    onClick={() => !themesUsed.includes(color.value) && (setTheme(color), setThemeSelectList(false))}
                  >
                    <div>
                      <span className={style.colorCircle} style={{backgroundColor: color.value}}></span>
                      {color.label}
                    </div>
                    {themesUsed.includes(color.value) && <span className={style.themesUsed}>Already used</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className={style.saveButton} onClick={() => handleClick(newBudget)}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
