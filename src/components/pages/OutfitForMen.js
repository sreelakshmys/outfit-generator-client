import React, { useEffect, useContext } from "react";
import Outfits from "./Outfits";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

const OutfitForMen = () => {
  const { setTargetGroup } = useContext(ProductCategoryContext);

  useEffect(() => {
    setTargetGroup("MALE");
  }, []);

  return <Outfits />;
};

export default OutfitForMen;
