// Next
import Image from "next/image";
// Style
import style from "./style.module.css";

export default function SummaryBox({title, value, icon, isDark}: {title: string; value: number; icon?: string; isDark?: boolean}) {
  return (
    <div className={`${style.boxContainer} ${isDark ? style.dark : ""}`}>
      {icon && <Image src={icon} alt="summary box icon" width={40} height={40} />}
      <p className={style.title}>{title}</p>
      <p className={style.amount}>
        $
        {new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value)}
      </p>
    </div>
  );
}
