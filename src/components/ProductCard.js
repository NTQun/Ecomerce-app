import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/product/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  const dispatch = useDispatch();
  let location = useLocation();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <div className="product-card position-relative h-100">
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
              <Link className="product-image" to={`/product/${item._id}`}>
                <img
                  src={item?.images[0]?.url}
                  className="img-fluid w-100"
                  alt="product-image"
                  style={{ maxHeight: "200px" }}
                />
                <img
                  src={item?.images[1]?.url}
                  className="img-fluid"
                  alt="product-image"
                  style={{ maxHeight: "200px" }}
                />
              </Link>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item.title}</h5>
                <ReactStars
                  edit={false}
                  count={5}
                  value={Number(item?.totalrating.toString())}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: item?.description?.substr(0, 70) + "...",
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
      })}
    </>
  );
};

export default ProductCard;
