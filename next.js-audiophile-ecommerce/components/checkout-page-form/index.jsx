"use client";
// React
import {useEffect, useState} from "react";
// Style
import style from "./style.module.css";
// Components
import BillingDetails from "./billing-details";
import ShippingInfo from "./shipping-info";
import PaymentDetails from "./payment-details";
// Zustand Global State
import useStore from "@/stores/useStore";

export default function CheckoutPageForm() {
  // Body Background Color
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#f1f1f1";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  // Zustand Form Validation Status
  const isFormCorrect = useStore((state) => state.isFormCorrect);
  const setIsFormCorrect = useStore((state) => state.setIsFormCorrect);

  // Billing Details
  const [billingDetails, setBillingDetails] = useState({name: "", isNameValid: false, email: "", isEmailValid: false, phone: "", isPhoneValid: false});
  // Shipping Info
  const [shippingInfo, setShippingInfo] = useState({address: "", isAddressValid: false, zip: "", isZipValid: false, city: "", isCityValid: false, country: "", isCountryValid: false});
  // Payment Details
  const [paymentDetails, setPaymentDetails] = useState({method: "emoney", emoneyNum: "", isEmoneyNumValid: false, emoneyPin: "", isEmoneyPinValid: false});

  // Form Validation
  useEffect(() => {
    const {isNameValid, name, isEmailValid, email, isPhoneValid, phone} = billingDetails;
    const {isAddressValid, address, isZipValid, zip, isCityValid, city, isCountryValid, country} = shippingInfo;
    const {method, isEmoneyNumValid, emoneyNum, isEmoneyPinValid, emoneyPin} = paymentDetails;

    if (!isNameValid || name == "") return setIsFormCorrect(false);
    if (!isEmailValid || email == "") return setIsFormCorrect(false);
    if (!isPhoneValid || phone == "") return setIsFormCorrect(false);
    if (!isAddressValid || address == "") return setIsFormCorrect(false);
    if (!isZipValid || zip == "") return setIsFormCorrect(false);
    if (!isCityValid || city == "") return setIsFormCorrect(false);
    if (!isCountryValid || country == "") return setIsFormCorrect(false);
    if (method == "emoney" && (!isEmoneyNumValid || emoneyNum == "")) return setIsFormCorrect(false);
    if (method == "emoney" && (!isEmoneyPinValid || emoneyPin == "")) return setIsFormCorrect(false);
    return setIsFormCorrect(true);
  }, [billingDetails, shippingInfo, paymentDetails]);

  return (
    <div className={style.container}>
      <h1 className="heading-h3">CHECKOUT</h1>
      <BillingDetails billingDetails={billingDetails} setBillingDetails={setBillingDetails} />
      <ShippingInfo shippingInfo={shippingInfo} setShippingInfo={setShippingInfo} />
      <PaymentDetails paymentDetails={paymentDetails} setPaymentDetails={setPaymentDetails} />
    </div>
  );
}
