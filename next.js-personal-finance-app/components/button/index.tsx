// Style
import style from "./style.module.css";

export default function Button({title, setState}: {title: string; setState: (value: boolean) => void}) {
  return (
    <button className={style.buttonContainer} onClick={() => setState(true)}>
      {title}
    </button>
  );
}
