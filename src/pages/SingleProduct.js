import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import { AiOutlineHeart, AiTwotoneDelete } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getAProduct,
  getAllProducts,
  addRating,
  resetState,
  deleteRating,
  updateRating,
} from "../features/product/productSlice";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
import { addToWishlist } from "../features/product/productSlice";
import { CiEdit } from "react-icons/ci";
import { Button, Modal } from "react-bootstrap";
const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const productState = useSelector((state) => state?.product?.singleProduct);
  const productsState = useSelector((state) => state?.product?.product);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  useEffect(() => {
    const getTokenFromLocalStorage = localStorage.getItem("customer")
      ? JSON.parse(localStorage.getItem("customer"))
      : null;

    const config2 = {
      headers: {
        Authorization: `Bearer ${
          getTokenFromLocalStorage !== null
            ? getTokenFromLocalStorage.token
            : ""
        }`,
        Accept: "application/json",
      },
    };
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart(config2));
    getAllProducts();
  }, []);

  useEffect(() => {
    if (cartState) {
      for (let index = 0; index < cartState?.length; index++) {
        if (getProductId === cartState[index]?.productId?._id) {
          setAlreadyAdded(true);
        }
      }
    }
  }, []);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose Color");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      setTimeout(() => {
        navigate("/cart");
      }, 300);
    }
  };

  const getProductId = location.pathname.split("/")[2];

  const props = {
    width: 650,
    height: 650,
    zoomWidth: 650,
    img: productState?.images[0]?.url,
  };

  const [orderedProduct] = useState(true);

  const [popularProduct, setPopularProduct] = useState([]);
  const [index, setindex] = useState("");

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState?.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productState]);
  const authState = useSelector((state) => state?.auth?.user);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addRatingToProduct = () => {
    if (!authState) {
      toast.error("Please login Account");
    } else if (star === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please write review about the product");
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId })
      );
      // toast.success("Add Rating Success");
      setTimeout(() => {
        dispatch(getAProduct(getProductId));
        dispatch(resetState());
      }, 300);
    }
    return false;
  };

  const editRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please write review about the product");
      return false;
    } else {
      dispatch(
        updateRating({
          star: star,
          comment: comment,
          index: index,
          id: getProductId,
        })
      );
      toast.success("update Rating Success");
      setTimeout(() => {
        dispatch(resetState());
        window.location.reload();
      }, 300);
    }
    return false;
  };
  const value = parseInt(productState?.totalrating);

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={productState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img className="big-img p-2" src={props.img} alt="" />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item?.url ? item?.url : ""}
                      className="img-fluid"
                      alt="images product"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    edit={false}
                    count={5}
                    value={productState?.totalrating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />

                  <p className="mb-0 t-review">
                    ({productState?.ratings.length} Review)
                  </p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>

                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Color :</h3>
                      <Color
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </div>
                  </>
                )}
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Available Quantity</h3>
                  <p className="product-data">{productState?.quantity}</p>
                </div>

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity buy:</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          defaultValue={1}
                          min={1}
                          max={productState?.quantity}
                          className="form-control"
                          style={{ width: "70px" }}
                          id=""
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}

                  {productState?.quantity != 0 && (
                    <div className={alreadyAdded ? "ms-0" : "ms-5"}>
                      <button
                        className="button signup    border-0"
                        type="button"
                        onClick={() => {
                          alreadyAdded ? navigate("/cart") : uploadCart();
                        }}
                      >
                        {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  )}
                  {productState?.quantity == 0 && (
                    <div className={alreadyAdded ? "ms-0" : "ms-5"}>
                      This product is out of stock
                    </div>
                  )}
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a>
                      <AiOutlineHeart
                        className="fs-5 me-2"
                        onClick={(e) => {
                          addToWish(productState?.id);
                        }}
                      />{" "}
                      Add to Wishlist
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h4>Description</h4>
                  <div
                    className="bg-white p-3"
                    dangerouslySetInnerHTML={{
                      __html: productState?.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={value}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">
                      Based on {productState?.ratings.length} Reviews
                    </p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className="text-dark text-decoration-underline"
                      href="#/"
                    >
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>

                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={0}
                    edit={true}
                    activeColor="#ffd700"
                    onChange={(e) => {
                      setStar(e);
                    }}
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end pt-1">
                  <button
                    onClick={addRatingToProduct}
                    className="button border-0"
                  >
                    Submit Review
                  </button>
                </div>
                <div className="reviews mt-4">
                  {productState &&
                    productState?.ratings?.map((item, index) => {
                      return (
                        <div key={index} className="review mt-2  ">
                          <div className="d-flex gap-10 align-items-center">
                            <h6 className="mb-0">{item?.title}</h6>
                            <ReactStars
                              edit={false}
                              count={5}
                              value={item?.star}
                              size={24}
                              isHalf={true}
                              emptyIcon={<i className="far fa-star"></i>}
                              halfIcon={<i className="fa fa-star-half-alt"></i>}
                              fullIcon={<i className="fa fa-star"></i>}
                              activeColor="#ffd700"
                            />
                          </div>
                          <p className="text-dark mx-3">
                            <p style={{ color: "blue" }}>
                              {item?.postedby[0]?.firstname}{" "}
                              {item?.postedby[0]?.lastname}{" "}
                            </p>
                            {item?.comment}
                          </p>
                          {authState?._id == item?.postedby[0]?._id && (
                            <>
                              <button
                                className="mx-1 text-success bg-white mb-2"
                                onClick={() => {
                                  setindex(index);
                                  setIsModalOpen(true);
                                }}
                              >
                                <CiEdit />
                              </button>
                              <button
                                className="mx-1 text-danger bg-white"
                                onClick={() => {
                                  dispatch(
                                    deleteRating({
                                      id: getProductId,
                                      index: index,
                                    })
                                  );
                                  dispatch(getAProduct(getProductId));
                                }}
                              >
                                <AiTwotoneDelete />
                              </button>
                            </>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard data={popularProduct} />
        </div>
      </Container>
      <div>
        <Modal show={isModalOpen}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <ReactStars
                count={5}
                size={24}
                value={0}
                edit={true}
                activeColor="#ffd700"
                onChange={(e) => {
                  setStar(e);
                }}
              />
            </div>
            <textarea
              name=""
              id=""
              className="w-100 form-control"
              cols="30"
              rows="4"
              placeholder="New Comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                editRatingToProduct();
                setIsModalOpen(false);
              }}
            >
              Edit
            </Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SingleProduct;
