"use client";
import {useState} from "react";
// Next
import Image from "next/image";
import {useRouter} from "next/navigation";
// Styles
import style from "./style.module.css";
// Icons
import iconSearch from "@/public/icons/icon-search.svg";

export default function Search() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?s=${value}`);
  };

  return (
    <form role="search" onSubmit={handleSubmit} className={style.container}>
      <button type="submit">
        <Image src={iconSearch} alt="search" width={24} height={24} />
      </button>
      <input type="text" name="s" placeholder="Search for movies or TV series" value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
}
