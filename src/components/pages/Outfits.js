import React, { useRef, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";
import Navigation from "../parts/Navigation";
import RandomOutfit from "./RandomOutfit";

const Outfits = () => {
  // To configure toaster, based in docs of the npm package
  const toastId = useRef(null);

  const {
    countryCode,
    handleCountryOptionChange,
    handleSurpriseMeButtonClick,
    isNoDataText,
    isToaster,
    targetGroup,
    isDataPresent,
    gender,
  } = useContext(ProductCategoryContext);

  // useEffect to display the toaster when country is not selected
  useEffect(() => {
    const notify = () => {
      if (isToaster) {
        toastId.current = toast.error("Please select the country!", {
          theme: "dark",
        });
      } else {
        toast.dismiss(toastId.current);
      }
    };
    notify();
  }, [isToaster]);

  return (
    <section className="outfit-section">
      <Navigation />
      <div>
        <h2 className="center-align target-group-heading">
          {targetGroup === "FEMALE" ? "WOMEN" : ""}
          {targetGroup === "MALE" ? "MEN" : ""}
        </h2>
        <h3 className="center-align">Select the country store</h3>
        <div className="country-radio-div">
          <label className="radio-label">
            <input
              type="radio"
              className="radio-input"
              name="country"
              value="de"
              checked={countryCode === "de"}
              onChange={handleCountryOptionChange}
            />
            <div className="radio-design"></div>
            <div className="radio-text">GERMANY</div>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              className="radio-input"
              name="country"
              value="en"
              checked={countryCode === "en"}
              onChange={handleCountryOptionChange}
            />
            <div className="radio-design"></div>
            <div className="radio-text">ENGLAND</div>
          </label>
        </div>
      </div>
      <div className="surprise-me-button-div">
        <button
          onClick={handleSurpriseMeButtonClick}
          className="browse-styles-button"
        >
          SURPRISE ME
        </button>
        <ToastContainer />
      </div>
      {isNoDataText && !isToaster && (
        <h2 className="center-align">
          Oops! We are out of stock for{" "}
          {countryCode === "en" ? "England" : "Deutschland"}
        </h2>
      )}

      {isDataPresent ? <RandomOutfit /> : <></>}
    </section>
  );
};

export default Outfits;
