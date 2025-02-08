// Styles
import style from "./style.module.css";

export default function DropdownSort({setSortValue}: {setSortValue: (value: string) => void}) {
  return (
    <div className={style.dropdownContainer}>
      <p>Sort by</p>
      <select onChange={(e) => setSortValue(e.target.value)}>
        <option value="Latest">Latest</option>
        <option value="Oldest">Oldest</option>
        <option value="AZ">A to Z</option>
        <option value="ZA">Z to A</option>
        <option value="Highest">Highest</option>
        <option value="Lowest">Lowest</option>
      </select>
    </div>
  );
}
