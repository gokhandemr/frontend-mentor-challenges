// Next
import Image from "next/image";
// Icon
import icon from "@/public/logo-large.svg";

export default function Loading() {
  return (
    <div className="loading-container">
      <Image src={icon} alt="loading icon" width={350} height={65} />
      <span className="loader"></span>
    </div>
  );
}
