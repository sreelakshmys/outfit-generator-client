import React, { createContext, useState, useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";

export const ProductCategoryContext = createContext();

const ProductCategoryContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //conditional value which must be updated in onClick function of a <Link>.
  const [targetGroup, setTargetGroup] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isNoDataText, setIsNoDataText] = useState(false);
  const [isDataPresent, setIsDataPresent] = useState(false);
  const [isToaster, setIsToaster] = useState(false);

  const handleCountryOptionChange = (event) => {
    setCountryCode(event.target.value);
    setIsNoDataText(false);
    setIsToaster(false);
    setIsDataPresent(false);
  };

  const handleSurpriseMeButtonClick = useCallback(() => {
    setIsDataPresent(false);
    const URL = process.env.REACT_APP_HOST;

    async function getproducts() {
      if (!countryCode) {
        setIsToaster(true);
      } else {
        setIsToaster(false);
      }
      try {
        const apiData = await fetch(`${URL}/${targetGroup}/${countryCode}`);
        if (apiData.ok) {
          setIsNoDataText(false);
          const jsonData = await apiData.json();
          setProducts(jsonData);
          console.log(jsonData);
          setIsDataPresent(true);
        } else {
          setIsNoDataText(true);
          setIsDataPresent(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getproducts();
  }, [targetGroup, countryCode]);

  return (
    <ProductCategoryContext.Provider
      value={{
        products: products,
        handleCountryOptionChange: handleCountryOptionChange,
        setTargetGroup: setTargetGroup,
        handleSurpriseMeButtonClick: handleSurpriseMeButtonClick,
        countryCode: countryCode,
        isNoDataText: isNoDataText,
        isToaster: isToaster,
        targetGroup: targetGroup,
        isDataPresent: isDataPresent,
        setIsDataPresent: setIsDataPresent,
        setCountryCode: setCountryCode,
      }}
    >
      {children}
    </ProductCategoryContext.Provider>
  );
};

export default ProductCategoryContextProvider;
