import React, { useEffect, useContext } from "react";
import Outfits from "./Outfits";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

const OutfitForWomen = () => {
  const { setTargetGroup } = useContext(ProductCategoryContext);

  useEffect(() => {
    setTargetGroup("FEMALE");
  }, []);

  return <Outfits />;
};

export default OutfitForWomen;
