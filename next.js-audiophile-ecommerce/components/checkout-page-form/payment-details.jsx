import {useEffect} from "react";
import Image from "next/image";
// Style
import style from "./style.module.css";
// Icon
import cashIcon from "@/public/assets/checkout/icon-cash-on-delivery.svg";

export default function PaymentDetails({paymentDetails, setPaymentDetails}) {
  useEffect(() => {
    const emoneyNumPattern = /^\d{9}$/;
    const isEmoneyNumValid = emoneyNumPattern.test(paymentDetails.emoneyNum);
    setPaymentDetails((prev) => ({...prev, isEmoneyNumValid: isEmoneyNumValid}));

    const emoneyPinPattern = /^\d{4}$/;
    const isEmoneyPinValid = emoneyPinPattern.test(paymentDetails.emoneyPin);
    setPaymentDetails((prev) => ({...prev, isEmoneyPinValid: isEmoneyPinValid}));
  }, [paymentDetails.emoneyNum, paymentDetails.emoneyPin]);

  return (
    <div className={style.paymentDetailsContainer}>
      <h5>PAYMENT DETAILS</h5>
      <label>Payment Method</label>
      <div className={style.radioButtons}>
        <div className={`${"emoney" === paymentDetails.method ? style.active : ""}`} onClick={() => setPaymentDetails((prev) => ({...prev, method: "emoney"}))}>
          <input type="radio" checked={"emoney" === paymentDetails.method} onChange={() => setPaymentDetails((prev) => ({...prev, method: "emoney"}))} />
          <p>e-Money</p>
        </div>
        <div className={`${"cash" === paymentDetails.method ? style.active : ""}`} onClick={() => setPaymentDetails((prev) => ({...prev, method: "cash"}))}>
          <input type="radio" checked={"cash" === paymentDetails.method} onChange={() => setPaymentDetails((prev) => ({...prev, method: "cash"}))} />
          <p>Cash on Delivery</p>
        </div>
      </div>

      <div className={style.methodContainer}>
        {paymentDetails.method == "emoney" ? (
          <div>
            <div className={`${paymentDetails.emoneyNum !== "" && !paymentDetails.isEmoneyNumValid ? style.error : ""}`}>
              <div>
                <label>e-Money Number</label>
                {paymentDetails.emoneyNum !== "" && !paymentDetails.isEmoneyNumValid && <span>Wrong Format</span>}
              </div>
              <input type="number" placeholder="238521993" value={paymentDetails.emoneyNum} onChange={(e) => setPaymentDetails((prev) => ({...prev, emoneyNum: e.target.value}))} />
            </div>

            <div className={`${paymentDetails.emoneyPin !== "" && !paymentDetails.isEmoneyPinValid ? style.error : ""}`}>
              <div>
                <label>e-Money PIN</label>
                {paymentDetails.emoneyPin !== "" && !paymentDetails.isEmoneyPinValid && <span>Wrong Format</span>}
              </div>
              <input type="number" placeholder="6891" value={paymentDetails.emoneyPin} onChange={(e) => setPaymentDetails((prev) => ({...prev, emoneyPin: e.target.value}))} />
            </div>
          </div>
        ) : (
          <div className={style.cashContainer}>
            <Image src={cashIcon} alt="cash icon" />
            <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
          </div>
        )}
      </div>
    </div>
  );
}
