import React from "react";
import Meta from "../compoments/Meta";
import BreadCrumb from "../compoments/BreadCrumb";
import Color from "../compoments/Color";
const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Porducts"} />
      <BreadCrumb title="Compare Porducts" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xx">
          <div className="row set-padding">
            <div className="col-2">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="porduct-card-image ">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
                <div className="product-detail ">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail ">
                  <h5>Type:</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail ">
                  <h5>Availablity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail ">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail ">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="porduct-card-image ">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
                <div className="product-detail ">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail ">
                  <h5>Type:</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail ">
                  <h5>Availablity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail ">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail ">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
