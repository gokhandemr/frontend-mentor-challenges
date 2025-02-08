"use client";
import {useEffect, useState} from "react";
// Next
import Image from "next/image";
import {usePathname} from "next/navigation";
// Styles
import style from "./style.module.css";
// Icons
import iconBookmarkFull from "@/public/icons/icon-bookmark-full.svg";
import iconBookmarkEmpty from "@/public/icons/icon-bookmark-empty.svg";

export default function AddToBookmarkedButton({media, mediaType}) {
  const [myList, setMyList] = useState([]);
  const pathname = usePathname();

  // Component mount olduğunda localStorage'daki veriyi al
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(storedList);
  }, []);

  const handleClick = () => {
    // LocalStorage'daki güncel veriyi al
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    const isItOnMyList = storedList.some((item) => item.id === media.id);

    let updatedList;
    if (isItOnMyList) {
      // Listeden kaldır
      updatedList = storedList.filter((item) => item.id !== media.id);
    } else {
      // Listeye ekle
      if (mediaType) {
        media.media_type = mediaType;
      }
      updatedList = [...storedList, media];
    }

    // State ve localStorage'ı güncelle
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));

    // Bookmarked sayfasında localStorage'daki verilerin anlık değişimini yakalamak için tarayıcının yenilenmesi gerekiyor
    pathname == "/bookmarked" && window.location.reload();
  };

  return (
    <button onClick={handleClick} className={`${style.container} ${mediaType ? style.singlePage : ""}`}>
      <Image src={myList.some((item) => item.id === media.id) ? iconBookmarkFull : iconBookmarkEmpty} alt="icon" width={12} height={14} />
    </button>
  );
}
