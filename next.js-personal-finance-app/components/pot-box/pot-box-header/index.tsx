// React
import {useState} from "react";
// Type
import {Pots} from "@/types";
// Styles
import style from "./style.module.css";
// Icons
import openIcon from "@/public/icon-ellipsis.svg";
import closeIcon from "@/public/icon-close-modal.svg";
import Image from "next/image";

interface PotBoxHeaderProps {
  pot: Pots;
  setEditModalIsActive: (value: boolean) => void;
  setDeleteModalIsActive: (value: boolean) => void;
}

export default function PotBoxHeader({pot, setEditModalIsActive, setDeleteModalIsActive}: PotBoxHeaderProps) {
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <span style={{backgroundColor: pot.theme}}></span>
        <p>{pot.name}</p>
      </div>
      <button onClick={() => setDropdownMenu(!dropdownMenu)}>
        {dropdownMenu && <Image src={closeIcon} alt="Edit Button" width={16} height={16} />}
        {!dropdownMenu && <Image src={openIcon} alt="Edit Button" width={16} height={16} />}
      </button>

      {dropdownMenu && (
        <div className={style.dropdownMenu}>
          <button onClick={() => (setEditModalIsActive(true), setDropdownMenu(false))}>Edit</button>
          <button onClick={() => (setDeleteModalIsActive(true), setDropdownMenu(false))}>Delete</button>
        </div>
      )}
    </div>
  );
}
