import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

const Navigation = () => {
  const { setIsDataPresent } = useContext(ProductCategoryContext);

  return (
    <nav>
      <div className="nav-section">
        <div>
          <Link to="/" onClick={() => setIsDataPresent(false)}>
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
            onClick={() => setIsDataPresent(false)}
          >
            BROWSE STYLES
          </Link>
          <Link
            className="route-links"
            to="/about"
            onClick={() => setIsDataPresent(false)}
          >
            ABOUT
          </Link>
          <Link
            className="route-links"
            to="/contact"
            onClick={() => setIsDataPresent(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
