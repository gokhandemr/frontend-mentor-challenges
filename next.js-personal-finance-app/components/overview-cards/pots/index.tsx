// Next
import Image from "next/image";
import Link from "next/link";
// Icons
import pot from "@/public/icon-pot.svg";
import detailsIcon from "@/public/icon-caret-right.svg";
// Styles
import style from "./style.module.css";
// Types
import {Pots} from "@/types";

export default function PotsCard({response}: {response: Pots[]}) {
  const totalSaved = response.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <p>Pots</p>
        <Link href={"/pots"}>
          See Details
          <Image src={detailsIcon} alt="detail icon" width={8} height={8} />
        </Link>
      </div>

      <div className={style.bottomContainer}>
        <div className={style.totalSaved}>
          <Image src={pot} alt="pot icon" width={40} height={40} />
          <div>
            <p>Total Saved</p>
            <p>${totalSaved}</p>
          </div>
        </div>

        <div className={style.savingsSmall}>
          {response.slice(0, 4).map((item: {name: string; total: number; theme: string}, index) => (
            <div key={index} className={style.saving}>
              <span style={{backgroundColor: `${item.theme}`}}></span>
              <p>{item.name}</p>
              <p>${item.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
