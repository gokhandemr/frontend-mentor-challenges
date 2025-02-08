// Next
import Image from "next/image";
// Styles
import style from "./style.module.css";
// Icons
import icon from "@/public/icon-search.svg";

export default function SearchInput({searchValue, setSearchValue}: {searchValue: string; setSearchValue: (name: string) => void}) {
  return (
    <div className={style.searchInputContainer}>
      <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search transaction" />
      <button type="submit">
        <Image src={icon} alt="search icon" width={16} height={16} />
      </button>
    </div>
  );
}
