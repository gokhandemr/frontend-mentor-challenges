// Style
import style from "./style.module.css";

export default function InTheBox({includes}) {
  return (
    <div className={style.inTheBoxContainer}>
      <h3 className="heading-h3">IN THE BOX</h3>
      <ul>
        {includes &&
          includes.map(({item, quantity}, index) => (
            <li key={index}>
              <span>{quantity}</span>
              <p>{item}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
