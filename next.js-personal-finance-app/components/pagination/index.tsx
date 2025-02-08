// Next
import Image from "next/image";
// Style
import style from "./style.module.css";
// Icons
import prevIcon from "@/public/icon-caret-left.svg";
import nextIcon from "@/public/icon-caret-right.svg";

interface PaginationProps {
  totalPages: number;
  activePage: number;
  setActivePage: (value: number) => void;
}

export default function Pagination({totalPages, activePage, setActivePage}: PaginationProps) {
  const handleClick = (value: number | string) => {
    let newPage = activePage;

    if (value === "prev") newPage = Math.max(1, activePage - 1);
    else if (value === "next") newPage = Math.min(totalPages, activePage + 1);
    else if (typeof value === "number") newPage = value;

    setActivePage(newPage);
  };

  return (
    <div className={style.paginationContainer}>
      <button onClick={() => handleClick("prev")} disabled={activePage === 1}>
        <Image src={prevIcon} alt="icon" width={8} height={8} />
        Prev
      </button>
      <div>
        {Array.from({length: totalPages}, (_, i) => (
          <button key={i} onClick={() => handleClick(i + 1)} className={`${activePage == i + 1 ? style.active : ""}`}>
            {i + 1}
          </button>
        ))}
      </div>
      <button onClick={() => handleClick("next")} disabled={activePage === totalPages}>
        Next
        <Image src={nextIcon} alt="icon" width={8} height={8} />
      </button>
    </div>
  );
}
