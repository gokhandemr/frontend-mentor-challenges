// Styles
import style from "./style.module.css";

interface PotBoxFooterProps {
  setAddMoneyModalIsActive: (value: boolean) => void;
  setWithdrawModalIsActive: (value: boolean) => void;
}

export default function PotBoxFooter({setAddMoneyModalIsActive, setWithdrawModalIsActive}: PotBoxFooterProps) {
  return (
    <div className={style.footer}>
      <button onClick={() => setAddMoneyModalIsActive(true)}>+ Add Money</button>
      <button onClick={() => setWithdrawModalIsActive(true)}>Withdraw</button>
    </div>
  );
}
