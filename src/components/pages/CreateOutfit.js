import React, { useContext } from "react";
import Navigation from "../parts/Navigation";
import { Link } from "react-router-dom";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

const CreateOutfit = () => {
  const { setTargetGroup } = useContext(ProductCategoryContext);

  return (
    <section className="create-outfit-section">
      <Navigation />
      <h2 className="create-outfit-section-heading">Get Started!</h2>

      <div className="gender-category">
        <Link
          onClick={() => setTargetGroup("FEMALE")}
          className="category-links"
          to="/surpriseme/women"
        >
          <div className="card">
            <div className="card_image">
              <img
                className="category-images"
                src={require("../../assets/images/women-tile-image.jpg")}
                alt="womens section"
              />
            </div>
            <div className="card_title title-white">
              <p>WOMEN</p>
            </div>
          </div>
        </Link>

        <Link
          onClick={() => setTargetGroup("MALE")}
          className="category-links"
          to="/surpriseme/men"
        >
          <div className="card">
            <div className="card_image">
              <img
                className="category-images"
                src={require("../../assets/images/men-tile-image.jpg")}
                alt="mens section"
              />
            </div>
            <div className="card_title title-white">
              <p>MEN</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CreateOutfit;
