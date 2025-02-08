"use client";
import {useRouter} from "next/navigation";
// Style
import style from "./style.module.css";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <div className={style.container}>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
