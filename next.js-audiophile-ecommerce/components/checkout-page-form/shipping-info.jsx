import {useEffect} from "react";
// Style
import style from "./style.module.css";

export default function ShippingInfo({shippingInfo, setShippingInfo}) {
  useEffect(() => {
    // Address Check: space, length, letter
    const trimmedAddress = shippingInfo.address.trim();
    const isAddressValid = trimmedAddress !== "" && trimmedAddress.length > 10 && !/[^a-z0-9.:,'" ]/i.test(trimmedAddress);
    setShippingInfo((prev) => ({...prev, isAddressValid: isAddressValid}));

    // ZIP Code Check: space, number
    const trimmedZipCode = shippingInfo.zip.trim();
    const isZipValid = trimmedZipCode !== "" && !/[^0-9]/.test(trimmedZipCode);
    setShippingInfo((prev) => ({...prev, isZipValid: isZipValid}));

    // City Check: space, length, letter
    const trimmedCity = shippingInfo.city.trim();
    const isCityValid = trimmedCity !== "" && trimmedCity.length > 3 && !/[^a-z0-9 ]/i.test(trimmedCity);
    setShippingInfo((prev) => ({...prev, isCityValid: isCityValid}));

    // Country Check : space, length, letter
    const trimmedCountry = shippingInfo.country.trim();
    const isCountryValid = trimmedCountry !== "" && trimmedCountry.length > 3 && !/[^a-z ]/i.test(trimmedCountry);
    setShippingInfo((prev) => ({...prev, isCountryValid: isCountryValid}));
  }, [shippingInfo.address, shippingInfo.zip, shippingInfo.city, shippingInfo.country]);

  return (
    <div className={style.shippingInfoContainer}>
      <h5>SHIPPING INFO</h5>

      <div className={`${shippingInfo.address !== "" && !shippingInfo.isAddressValid ? style.error : ""}`}>
        <div>
          <label>Addres</label>
          {shippingInfo.address !== "" && !shippingInfo.isAddressValid && <span>Wrong Format</span>}
        </div>
        <input type="text" placeholder="1137 Williams Avenue" value={shippingInfo.address} onChange={(e) => setShippingInfo((prev) => ({...prev, address: e.target.value}))} />
      </div>

      <div className={`${shippingInfo.zip !== "" && !shippingInfo.isZipValid ? style.error : ""}`}>
        <div>
          <label>ZIP Code</label>
          {shippingInfo.zip !== "" && !shippingInfo.isZipValid && <span>Wrong Format</span>}
        </div>
        <input type="text" placeholder="10001" value={shippingInfo.zip} onChange={(e) => setShippingInfo((prev) => ({...prev, zip: e.target.value}))} />
      </div>

      <div className={`${shippingInfo.city !== "" && !shippingInfo.isCityValid ? style.error : ""}`}>
        <div>
          <label>City</label>
          {shippingInfo.city !== "" && !shippingInfo.isCityValid && <span>Wrong Format</span>}
        </div>
        <input type="text" placeholder="New York" value={shippingInfo.city} onChange={(e) => setShippingInfo((prev) => ({...prev, city: e.target.value}))} />
      </div>

      <div className={`${shippingInfo.country !== "" && !shippingInfo.isCountryValid ? style.error : ""}`}>
        <div>
          <label>Country</label>
          {shippingInfo.country !== "" && !shippingInfo.isCountryValid && <span>Wrong Format</span>}
        </div>
        <input type="text" placeholder="United States" value={shippingInfo.country} onChange={(e) => setShippingInfo((prev) => ({...prev, country: e.target.value}))} />
      </div>
    </div>
  );
}
