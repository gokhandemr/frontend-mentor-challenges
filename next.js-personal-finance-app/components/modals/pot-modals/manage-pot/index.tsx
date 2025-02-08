"use client";
// React
import {useState} from "react";
// Types
import {Pots} from "@/types";
// Style
import style from "./style.module.css";
// Next
import Image from "next/image";
// Icon
import closeIcon from "@/public/icon-close-modal.svg";
import arrowIcon from "@/public/icon-caret-down.svg";

type ManagePotProps =
  | {
      type: "add";
      setModalIsActive: (value: boolean) => void;
      item?: Pots;
      handleClick: (newItem: Pots) => void;
      usedThemes: Array<string>;
    }
  | {
      type: "edit";
      setModalIsActive: (value: boolean) => void;
      item: Pots;
      handleClick: (newItem: Pots) => void;
      usedThemes: Array<string>;
    };

export default function ManagePotModal({type, setModalIsActive, item, handleClick, usedThemes}: ManagePotProps) {
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
  // States
  const [name, setName] = useState<string>(type === "edit" ? item.name : "");
  const [target, setTarget] = useState<number>(type === "edit" ? item.target : 0);
  const [theme, setTheme] = useState<{value: string; label: string}>(
    type === "edit" ? allColors.filter((color) => color.value === item.theme)[0] : allColors[0]
  );
  const [colorListIsActive, setColorListIsActive] = useState<boolean>(false);
  // New Item
  const newItem = {name: name, target: target, total: type === "edit" ? item.total : 0, theme: theme.value};

  return (
    <div className={style.managePotContainer}>
      <div className={style.background} onClick={() => setModalIsActive(false)}></div>

      <div className={style.managePotBody}>
        <div className={style.managePotHeader}>
          <div>
            <p className={style.title}>{type === "add" ? "Add New Pot" : "Edit Pot"}</p>
            <button className={style.closeButton} onClick={() => setModalIsActive(false)}>
              <Image src={closeIcon} alt="Close" width={24} height={24} />
            </button>
          </div>
          <p className={style.description}>
            {type === "add"
              ? "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
              : "If your saving targets change, feel free to update your pots."}
          </p>
        </div>

        <div className={style.managePotMain}>
          <div className={style.inputContainer}>
            <label>Pot Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className={style.inputContainer}>
            <label>Target</label>
            <input type="number" value={target} onChange={(e) => setTarget(Number(e.target.value))} />
          </div>

          <div className={style.inputContainer}>
            <label>Theme</label>
            <button className={style.colorListButton} onClick={() => setColorListIsActive(!colorListIsActive)}>
              <span className={style.colorCircle} style={{backgroundColor: theme.value}}></span>
              <p>{theme.label}</p>
              <span className={style.arrowIcon}>
                <Image src={arrowIcon} alt="arrow icon" width={8} height={8} />
              </span>
            </button>

            {colorListIsActive && (
              <ul className={style.colorList}>
                {allColors.map((color) => (
                  <li
                    key={color.value}
                    className={`${usedThemes.includes(color.value) ? style.usedItem : ""}`}
                    onClick={() => !usedThemes.includes(color.value) && (setTheme(color), setColorListIsActive(false))}
                  >
                    <span className={style.colorCircle} style={{backgroundColor: color.value}}></span>
                    {color.label}
                    {usedThemes.includes(color.value) && <span className={style.usedThemes}>Already used</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className={style.saveButton} onClick={() => handleClick(newItem)}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
