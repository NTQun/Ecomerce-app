import React, { useState } from "react";
import Meta from "../compoments/meta";
import BreadCrumb from "../compoments/BreadCrumb";
import ProductCard from "../compoments/ProductCard";
import ReactStars from "react-rating-stars-component";
import Color from "../compoments/Color";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xx ">
          <div className="row set-padding">
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
                        <label className="form-check-label" htmlFor="">
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
                        <label className="form-check-label" htmlFor="">
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
                    <div>
                      <Color />
                      <Color />
                      <Color />
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
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
                      <label className="form-check-label" htmlFor="color-2">
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
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0">Sort By:</p>
                    <select
                      name="sort_by"
                      className="facet-filters__sort select__select"
                      id="SortBy"
                      aria-describedby="a11y-refresh-page-message">
                      <option value="manual" selected="selected">
                        Featured
                      </option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className=" d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0 ">21 Products</p>
                    <div className="grid d-flex gap-10 align-items-center">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap ">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
