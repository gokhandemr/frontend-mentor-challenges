"use client";
// React
import {useState} from "react";
// Type
import {Pots} from "@/types";
// Styles
import style from "./style.module.css";
// Components
import PotBoxHeader from "./pot-box-header";
import PotBoxMain from "./pot-box-main";
import PotBoxFooter from "./pot-box-footer";
// Components: Modals
import ManagePotModal from "../modals/pot-modals/manage-pot";
import DeletePotModal from "../modals/pot-modals/delete-pot";
import ManageMoneyModal from "../modals/pot-modals/manage-money";

interface PotsProps {
  pot: Pots;
  setPots: React.Dispatch<React.SetStateAction<Pots[]>>;
  usedTheme: Array<string>;
}

export default function PotBox({pot, setPots, usedTheme}: PotsProps) {
  // Edit & Delete Modals
  const [editModalIsActive, setEditModalIsActive] = useState<boolean>(false);
  const [deleteModalIsActive, setDeleteModalIsActive] = useState<boolean>(false);
  // Add Money & Withdraw Modals
  const [addMoneyModalIsActive, setAddMoneyModalIsActive] = useState<boolean>(false);
  const [withdrawModalIsActive, setWithdrawModalIsActive] = useState<boolean>(false);

  const editPot = (newItem: Pots) => {
    setPots((prev: Pots[]) => prev.map((item) => (item.name == pot.name ? newItem : item)));
    setEditModalIsActive(false);
  };

  const deletePot = () => {
    setPots((prev: Pots[]) => prev.filter((item) => item.name !== pot.name));
  };

  const addMoney = (money: number) => {
    if (money < 0) return alert("The amount added cannot be less than 0");
    setPots((prev: Pots[]) => prev.map((item) => (item.name === pot.name ? {...item, total: item.total + money} : item)));
    setAddMoneyModalIsActive(false);
  };

  const withdraw = (money: number) => {
    if (money < 0) return alert("Use the “add money” button to add money!");
    setPots((prev: Pots[]) => prev.map((item) => (item.name === pot.name ? {...item, total: item.total - money} : item)));
    setWithdrawModalIsActive(false);
  };

  return (
    <div className={style.container}>
      <PotBoxHeader pot={pot} setEditModalIsActive={setEditModalIsActive} setDeleteModalIsActive={setDeleteModalIsActive} />
      <PotBoxMain pot={pot} />
      <PotBoxFooter setAddMoneyModalIsActive={setAddMoneyModalIsActive} setWithdrawModalIsActive={setWithdrawModalIsActive} />

      {editModalIsActive && <ManagePotModal type="edit" setModalIsActive={setEditModalIsActive} handleClick={editPot} item={pot} usedThemes={usedTheme} />}
      {deleteModalIsActive && <DeletePotModal potName={pot.name} handleClick={deletePot} setActiveModal={setDeleteModalIsActive} />}
      {addMoneyModalIsActive && <ManageMoneyModal type="add" pot={pot} setActiveModal={setAddMoneyModalIsActive} handleClick={addMoney} />}
      {withdrawModalIsActive && <ManageMoneyModal type="withdraw" pot={pot} setActiveModal={setWithdrawModalIsActive} handleClick={withdraw} />}
    </div>
  );
}
