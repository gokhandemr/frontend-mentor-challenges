"use client";
import {InputFields as InputFieldsTypes} from "@/types";
// Styles
import style from "./style.module.css";
// Components
import DropdownCategory from "./dropdown-category";
import DropdownSort from "./dropdown-sort";
import SearchInput from "./search-input";

export default function InputFields({searchValue, setSearchValue, showDropdownSort, setSortValue, showDropdownCategory, categoryNames, setCategoryValue}: InputFieldsTypes) {
  return (
    <div className={style.container}>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />

      <div>
        {showDropdownSort && <DropdownSort setSortValue={setSortValue} />}
        {showDropdownCategory && <DropdownCategory categoryNames={categoryNames} setCategoryValue={setCategoryValue} />}
      </div>
    </div>
  );
}
