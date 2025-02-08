// Styles
import style from "./style.module.css";

export default function DropdownCategory({categoryNames, setCategoryValue}: {categoryNames: string[]; setCategoryValue: (value: string) => void}) {
  return (
    <div className={`${style.dropdownContainer} ${style.dropdownCategoryContainer}`}>
      <p>Category</p>
      <select onChange={(e) => setCategoryValue(e.target.value)}>
        <option value="All">All Transactions</option>
        {categoryNames.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
