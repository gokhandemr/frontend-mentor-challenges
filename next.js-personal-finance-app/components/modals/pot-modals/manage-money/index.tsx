"use client";
// Next
import Image from "next/image";
// Icon
import closeIcon from "@/public/icon-close-modal.svg";
// Style
import style from "./style.module.css";
// Types
import {Pots} from "@/types";
import {useEffect, useState} from "react";

interface ManageMoneyModalPros {
  type: "add" | "withdraw";
  pot: Pots;
  setActiveModal: (value: boolean) => void;
  handleClick: (value: number) => void;
}

export default function ManageMoneyModal({type, pot, setActiveModal, handleClick}: ManageMoneyModalPros) {
  const [amount, setAmount] = useState<number | null>(null);
  // Pot Chart
  const [total, setTotal] = useState<number>(pot.total);

  useEffect(() => {
    // Input'ta başlangıçtaki 0 değerini kaldırmak için
    if (amount === 0) {
      setAmount(null);
    }
    setTotal(type === "add" ? pot.total + (amount ?? 0) : pot.total - (amount ?? 0));
  }, [amount, pot.total, type]);

  const percentage = (total * 100) / pot.target;

  return (
    <div className={style.manageMoneyContainer}>
      <div className={style.background} onClick={() => setActiveModal(false)}></div>

      <div className={style.manageMoneyBody}>
        <div className={style.manageMoneyHeader}>
          <div>
            <p className={style.title}>{type == "withdraw" ? `Withdraw from ‘${pot.name}’` : `Add to ‘${pot.name}’`}</p>
            <button className={style.closeButton} onClick={() => setActiveModal(false)}>
              <Image src={closeIcon} alt="Close" width={24} height={24} />
            </button>
          </div>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
            urna. In nisi neque, aliquet.
          </p>
        </div>

        <div className={style.manageMoneyMain}>
          <div className={style.manageMoneyMainTop}>
            <p>New Amount</p>
            <p>${new Intl.NumberFormat("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(total)}</p>
          </div>
          <div className={style.manageMoneyMainCenter}>
            <span style={{backgroundColor: pot.theme, width: `${percentage}%`}}></span>
          </div>
          <div className={style.manageMoneyMainBottom}>
            <p style={{color: pot.theme}}>{percentage.toFixed(2)}%</p>
            <p>Target of ${new Intl.NumberFormat("en-US", {maximumFractionDigits: 2}).format(pot.target)}</p>
          </div>
        </div>

        <div className={style.manageMoneyFooter}>
          <label>{type == "withdraw" ? "Amount to Withdraw" : "Amount to Add"}</label>
          <input type="number" min="1" value={amount ?? ""} onChange={(e) => setAmount(Number(e.target.value))} />
          <button className={style.saveButton} onClick={() => amount !== null && handleClick(amount)}>
            {type == "withdraw" ? "Confirm Withdrawal" : "Confirm Addition"}
          </button>
        </div>
      </div>
    </div>
  );
}
