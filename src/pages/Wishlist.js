import React from "react";
import Meta from "../compoments/meta";
import BreadCrumb from "../compoments/BreadCrumb";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlost-wrapper home-wrapper-2 py-5">
        <div className="container-xx">
          <div className="row set-padding">
            <div className="col-2 ">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image ">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-2 ">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image ">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-2 ">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image ">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
