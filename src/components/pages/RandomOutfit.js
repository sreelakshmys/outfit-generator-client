import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";
import { v4 as uuidv4 } from "uuid";

const RandomOutfit = () => {
  const { products } = useContext(ProductCategoryContext);

  const getImage = (images) => {
    const outfitImage = images.find((image) => {
      if (image?.type === "CUTOUT") {
        return image;
      } else {
        return 0;
      }
    });
    return outfitImage;
  };

  const getDescription = (descriptions) => {
    return descriptions.find(
      (descriptionItem) => descriptionItem?.language === "EN"
    );
  };

  return (
    <div>
      {products.map((item) => (
        <div className="container" key={uuidv4()}>
          <div className="outfit-div">
            <span className="image-span">
              {item?.outerWear.length ? (
                <img
                  className="outfit-image"
                  src={`https://api.newyorker.de/csp/images/image/public/${
                    getImage(item?.outerWear[0]?.variants[0]?.images).key
                  }?res=high&frame=1_1`}
                  alt="outfit"
                />
              ) : (
                <></>
              )}

              {item?.outerWear?.length > 1 ? (
                <img
                  className="outfit-image"
                  src={`https://api.newyorker.de/csp/images/image/public/${
                    getImage(item?.outerWear[1]?.variants[0]?.images).key
                  }?res=high&frame=1_1`}
                  alt="outfit"
                />
              ) : (
                <></>
              )}
            </span>{" "}
            <span className="image-span">
              {item?.underWear?.length > 0 ? (
                <img
                  className="outfit-image"
                  src={`https://api.newyorker.de/csp/images/image/public/${
                    getImage(item?.underWear[0]?.variants[0]?.images).key
                  }?res=high&frame=1_1`}
                  alt="outfit"
                />
              ) : (
                <></>
              )}
              {item?.underWear?.length > 0 ? (
                <img
                  className="outfit-image"
                  src={`https://api.newyorker.de/csp/images/image/public/${
                    getImage(item?.underWear[1]?.variants[0]?.images).key
                  }?res=high&frame=1_1`}
                  alt="outfit"
                />
              ) : (
                <></>
              )}
            </span>{" "}
            <span className="image-span">
              {item?.accessories?.length ? (
                <img
                  className="outfit-image"
                  src={`https://api.newyorker.de/csp/images/image/public/${
                    getImage(item?.accessories[0]?.variants[0]?.images).key
                  }?res=high&frame=1_1`}
                  alt="outfit"
                />
              ) : (
                <></>
              )}
            </span>
          </div>
          <div className="outfit-div product-details">
            <h3>Products displayed</h3>

            {item?.outerWear?.length && (
              <div className="product-detail">
                <span>
                  {getDescription(item?.outerWear[0]?.descriptions).description}
                </span>
                <span>
                  {` - ${item?.outerWear[0]?.variants[0].current_price} ${item?.outerWear[0]?.variants[0]?.currency}`}
                </span>
              </div>
            )}

            {item?.outerWear?.length > 1 && (
              <div className="product-detail">
                <span>
                  {getDescription(item?.outerWear[1]?.descriptions).description}
                </span>
                <span>
                  {` - ${item?.outerWear[1]?.variants[0].current_price} ${item?.outerWear[1]?.variants[0]?.currency}`}
                </span>
              </div>
            )}

            {item?.underWear?.length > 0 && (
              <div className="product-detail">
                <span>
                  {getDescription(item?.underWear[0]?.descriptions).description}
                </span>
                <span>
                  {` - ${item?.underWear[0]?.variants[0].current_price} ${item?.underWear[0]?.variants[0]?.currency}`}
                </span>
              </div>
            )}

            {item?.underWear?.length > 1 && (
              <div className="product-detail">
                <span>
                  {getDescription(item?.underWear[1]?.descriptions).description}
                </span>
                <span>
                  {` - ${item?.underWear[1]?.variants[0].current_price} ${item?.underWear[1]?.variants[0]?.currency}`}
                </span>
              </div>
            )}

            {item?.accessories?.length > 0 && (
              <div className="product-detail">
                <span>
                  {
                    getDescription(item?.accessories[0]?.descriptions)
                      .description
                  }
                </span>
                <span>
                  {` - ${item?.accessories[0]?.variants[0].current_price} ${item?.accessories[0]?.variants[0]?.currency}`}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomOutfit;
