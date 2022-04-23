import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

const Navigation = () => {
  const { setCountryCode, setIsDataPresent } = useContext(
    ProductCategoryContext
  );

  const handleNavigationOnClick = () => {
    setIsDataPresent(false);
    setCountryCode("");
  };

  return (
    <nav>
      <div className="nav-section">
        <div>
          <Link to="/" onClick={handleNavigationOnClick}>
            <img
              className="logo"
              src={require("../../assets/images/logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link
            className="route-links"
            to="/surpriseme"
            onClick={handleNavigationOnClick}
          >
            BROWSE STYLES
          </Link>
          <Link
            className="route-links"
            to="/about"
            onClick={handleNavigationOnClick}
          >
            ABOUT
          </Link>
          <Link
            className="route-links"
            to="/contact"
            onClick={handleNavigationOnClick}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
