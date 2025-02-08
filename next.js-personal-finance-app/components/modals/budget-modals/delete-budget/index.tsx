// Next
import Image from "next/image";
// Style
import style from "./style.module.css";
// Icon
import closeModalIcon from "@/public/icon-close-modal.svg";

type DeleteBudgetProps = {
  name: string;
  setDeleteModal: (value: boolean) => void;
  deleteBudget: (value: string) => void;
};

export default function DeleteBudgetModal({name, setDeleteModal, deleteBudget}: DeleteBudgetProps) {
  return (
    <div className={style.deleteBudgetContainer}>
      <div className={style.background} onClick={() => setDeleteModal(false)}></div>

      <div className={style.deleteBudgetBody}>
        <div className={style.deleteBudgetHeader}>
          <div>
            <p className={style.title}>{`Delete ‘${name}’?`}</p>
            <button className={style.closeButton} onClick={() => setDeleteModal(false)}>
              <Image src={closeModalIcon} alt="close modal icon" width={24} height={24} />
            </button>
          </div>
          <p className={style.description}>
            Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will
            be removed forever.
          </p>
        </div>

        <div className={style.deleteBudgetMain}>
          <button className={style.confirmButton} onClick={() => (deleteBudget(name), setDeleteModal(false))}>
            Yes, Confirm Deletion
          </button>
          <button className={style.cancelButton} onClick={() => setDeleteModal(false)}>
            No, Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
