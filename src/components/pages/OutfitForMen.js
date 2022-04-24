import React, { useEffect, useContext } from "react";
import Outfits from "./Outfits";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

const OutfitForMen = () => {
  const { setTargetGroup } = useContext(ProductCategoryContext);

  // to set the target group upon page refresh on /aurpriseme/men route
  useEffect(() => {
    setTargetGroup("MALE");
  }, []);

  return <Outfits />;
};

export default OutfitForMen;
