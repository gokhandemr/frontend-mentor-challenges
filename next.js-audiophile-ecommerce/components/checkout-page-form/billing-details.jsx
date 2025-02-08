import {useEffect} from "react";
// Style
import style from "./style.module.css";

export default function BillingDetails({billingDetails, setBillingDetails}) {
  useEffect(() => {
    // Name Check
    const namePattern = /[^a-z ]/i;
    const isNameValid = !namePattern.test(billingDetails.name);
    setBillingDetails((prev) => ({...prev, isNameValid: isNameValid}));

    // Email Check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const isEmailValid = emailPattern.test(billingDetails.email);
    setBillingDetails((prev) => ({...prev, isEmailValid: isEmailValid}));

    // Phone Check
    const phonePattern = /^\d{3}\d{3}\d{4}$/;
    const isPhoneValid = phonePattern.test(billingDetails.phone);
    setBillingDetails((prev) => ({...prev, isPhoneValid: isPhoneValid}));
  }, [billingDetails.name, billingDetails.email, billingDetails.phone]);

  return (
    <div className={style.billingDetailsContainer}>
      <h5>BILLING DETAILS</h5>

      <div className={`${billingDetails.name !== "" && !billingDetails.isNameValid ? style.error : ""}`}>
        <div>
          <label>Name</label>
          {billingDetails.name !== "" && !billingDetails.isNameValid && <span>Wrong Format</span>}
        </div>
        <input type="text" placeholder="Alexei Ward" value={billingDetails.name} onChange={(e) => setBillingDetails((prev) => ({...prev, name: e.target.value}))} />
      </div>

      <div className={`${billingDetails.email !== "" && !billingDetails.isEmailValid ? style.error : ""}`}>
        <div>
          <label>E mail Address</label>
          {billingDetails.email !== "" && !billingDetails.isEmailValid && <span>Wrong Format</span>}
        </div>
        <input type="email" placeholder="alexei@mail.com" value={billingDetails.email} onChange={(e) => setBillingDetails((prev) => ({...prev, email: e.target.value}))} />
      </div>

      <div className={`${billingDetails.phone !== "" && !billingDetails.isPhoneValid ? style.error : ""}`}>
        <div>
          <label>Phone Number</label>
          {billingDetails.phone !== "" && !billingDetails.isPhoneValid && <span>Wrong Format</span>}
        </div>
        <input type="tel" placeholder="+1 202-555-0136" value={billingDetails.phone} onChange={(e) => setBillingDetails((prev) => ({...prev, phone: e.target.value}))} />
      </div>
    </div>
  );
}
