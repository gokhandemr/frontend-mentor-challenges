// Next
import Image from "next/image";
// Icon
import closeIcon from "@/public/icon-close-modal.svg";
// Style
import style from "./style.module.css";

interface ModalDeletePotProps {
  potName: string;
  handleClick: () => void;
  setActiveModal: (value: boolean) => void;
}

export default function DeletePotModal({potName, handleClick, setActiveModal}: ModalDeletePotProps) {
  return (
    <div className={style.deletePotContainer}>
      <div className={style.background} onClick={() => setActiveModal(false)}></div>

      <div className={style.deletePotBody}>
        <div className={style.deletePotHeader}>
          <div>
            <p className={style.title}>{`Delete ‘${potName}’?`}</p>
            <button className={style.closeButton} onClick={() => setActiveModal(false)}>
              <Image src={closeIcon} alt="Close" width={24} height={24} />
            </button>
          </div>
          <p className={style.description}>Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever.</p>
        </div>

        <div className={style.deletePotMain}>
          <button className={style.confirmButton} onClick={() => (handleClick(), setActiveModal(false))}>
            Yes, Confirm Deletion
          </button>
          <button className={style.cancelButton} onClick={() => setActiveModal(false)}>
            No, Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
