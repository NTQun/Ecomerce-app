import React from "react";
import Meta from "../compoments/meta";
import BreadCrumb from "../compoments/BreadCrumb";
import ReactStars from "react-rating-stars-component";
const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Catergories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <div className="form-check">
                    <h5 className="sub-title">Availablity</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlfor="">
                          In Stock (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label class="form-check-label" htmlfor="">
                          Out of Stock (0)
                        </label>
                      </div>
                    </div>
                    <h5 className="sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control py-1"
                          id="floatingInput"
                          placeholder="From"
                        />
                        <label htmlFor="floatingInput">From</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control py-1"
                          id="floatingInput"
                          placeholder="To"
                        />
                        <label htmlFor="floatingInput">To</label>
                      </div>
                    </div>
                    <h5 className="sub-title">Colors</h5>
                    <div className="d-flex flex-wrap">
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlfor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlfor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center">
                    <span className="badge bg-lightt text-secondary rounded-3 py-2 px-3">
                      HeadPhone
                    </span>
                    <span className="badge bg-lightt text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-lightt text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-lightt text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/w-50-1.avif"
                        className="img-fluid"
                        alt="headphone"
                      />
                    </div>
                    <div className="w-50 mb-3">
                      <h5>
                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/w-50-2.avif"
                        className="img-fluid"
                        alt="headphone"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
