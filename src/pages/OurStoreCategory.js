import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";
import { BiReset } from "react-icons/bi";
import gr from "../images/gr.svg";
import gr2 from "../images/gr2.svg";
import gr3 from "../images/gr3.svg";
import gr4 from "../images/gr4.svg";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/product/productSlice";

const OurStoreCategory = () => {
  const location = useLocation();
  const getCate = location.pathname.split("/")[3];
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const cateName = decodeURIComponent(getCate);

  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state?.product?.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState(getCate);
  const [tags, setTags] = useState([]);

  // Filter State
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setminPrice] = useState(null);
  const [maxPrice, setmaxPrice] = useState(null);
  const [sort, SetSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];

    for (let index = 0; index < productState?.length; index++) {
      const element = productState?.[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newtags.push(element.tags);
    }

    setBrands(newBrands);
    setCategories(category);
    setTags(newtags);
  }, [productState]);

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  const getProducts = () => {
    dispatch(
      getAllProducts({
        sort,
        tag,
        brand,
        category,
        minPrice,
        maxPrice,
        getCate,
      })
    );
  };

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => setCategory(item)}
                          className="text-dark"
                        >
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <Link className="filter-title" to="/product">
                Reset Filter <BiReset />
              </Link>

              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10  ">
                  <div className="form-floating ">
                    <input
                      type="number"
                      min="0"
                      className="form-control "
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setminPrice(e.target.value)}
                    />
                    <label htmlfor="floatingInput">From</label>
                  </div>
                  <div className="form-floating  ">
                    <input
                      min="0"
                      type="number"
                      className="form-control "
                      id="floatingInput"
                      placeholder="To"
                      onChange={(e) => setmaxPrice(e.target.value)}
                    />
                    <label htmlfor="floatingInput1">To</label>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-3">
                <h3 className="sub-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            onClick={() => setTag(item)}
                            key={index}
                            className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              <h3 className="sub-title">Product Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {brands &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <span
                          onClick={() => setBrand(item)}
                          key={index}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Sort By</p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                    onChange={(e) => SetSort(e.target.value)}
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0 " style={{ width: "100px" }}>
                    21 Products
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      //   src="images/gr.svg"
                      src={gr4}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      //   src="images/gr3.svg"
                      src={gr3}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      //   src="images/gr2.svg"
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={gr}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-4">
              <div className="d-flex gap-10 flex-wrap">
                {
                  <>
                    {productState?.map((item, index) => {
                      if (item.category == cateName) {
                        return (
                          <div
                            key={index}
                            className={` ${
                              location.pathname ==
                              `/product/category/${getCate}`
                                ? `gr-${grid}`
                                : "col-3"
                            } `}
                          >
                            <div className="product-card position-relative">
                              <div className="wishlist-icon position-absolute">
                                <button
                                  className="border-0 bg-transparent"
                                  onClick={(e) => {
                                    addToWish(item?._id);
                                  }}
                                >
                                  <img src={wish} alt="wishlist" />
                                </button>
                              </div>
                              <div className="product-image">
                                <img
                                  src={item?.images[0]?.url}
                                  className="img-fluid w-100"
                                  alt="product-image"
                                />
                                <img
                                  src={item?.images[1]?.url}
                                  className="img-fluid"
                                  alt="product-image"
                                />
                              </div>
                              <div className="product-details">
                                <h6 className="brand">{item?.brand}</h6>
                                <h5 className="product-title">{item.title}</h5>
                                <ReactStars
                                  edit={false}
                                  count={5}
                                  value={item?.totalrating.toString()}
                                  size={24}
                                  isHalf={true}
                                  emptyIcon={<i className="far fa-star"></i>}
                                  halfIcon={
                                    <i className="fa fa-star-half-alt"></i>
                                  }
                                  fullIcon={<i className="fa fa-star"></i>}
                                  activeColor="#ffd700"
                                />
                                <p
                                  className={`description ${
                                    grid === 12 ? "d-block" : "d-none"
                                  }`}
                                  dangerouslySetInnerHTML={{
                                    __html: item?.description,
                                  }}
                                ></p>
                                <p className="price">$ {item?.price}</p>
                              </div>

                              <div className="action-bar position-absolute">
                                <div className="d-flex flex-column ">
                                  <button className="border-0 bg-transparent">
                                    <img src={prodcompare} alt="compare" />
                                  </button>
                                </div>

                                <div className="d-flex flex-column">
                                  <Link
                                    to={`/product/${item._id}`}
                                    className="border-0 bg-transparent"
                                  >
                                    <img src={view} alt="view" />
                                  </Link>
                                </div>

                                <div className="d-flex flex-column">
                                  <button className="border-0 bg-transparent">
                                    <img src={addcart} alt="addcart" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStoreCategory;
