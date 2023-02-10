import Meta from "../compoments/Meta";
import BreadCrumb from "../compoments/BreadCrumb";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../compoments/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import Color from "../compoments/Color";
import { AiOutlineHeart } from "react-icons/ai";
const SingleProduct = () => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const [orderedProduct, setirederedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xx">
          <div className="row set-padding">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">
                  <ReactImageZoom {...props} />
                </div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom ">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10 ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-reivew"> (2 Reviews) </p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Categories:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">GFD</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Availablity:</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex flex-column  gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrapp gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        X
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XX
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 mt-2 mb-3">
                    <h3 className="product-heading">Quanlity:</h3>
                    <div className="">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={1}
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0 " type="submit">
                        Add to Cart
                      </button>
                      <button to="/signup" className="button signup">
                        Buy It Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to WishList
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Shipping & Returns:</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      We ship all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-3">
                    <h3 className="product-heading">Product Link</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(
                          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                        );
                      }}>
                      Coppy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xx">
          <div className="row set-padding">
            <h4>Description</h4>
            <div className="col-12">
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa nisi obcaecati facilis placeat rem saepe
                  quibusdam recusandae ab neque! Sed obcaecati ea cupiditate
                  reiciendis in maiores sequi tempore totam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="review" className="reviews-wrapper  home-wrapper-2">
        <div className="container-xx">
          <div className="row set-padding">
            <div className="col-12">
              <h3>Review</h3>
              <div className="review-inner-wrapper">
                <div className="bg-white review-head d-flex justify-content-between align-items-end">
                  <div>
                    <div className="d-flex align-items-center gap-10">
                      <h4 className="mb-2">Customer Reviews</h4>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div className="">
                      <a className=" text-decoration-underline " href="">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review ">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">zinon</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dignissimos, sint magni, reiciendis unde perspiciatis,
                      quas harum porro eum deserunt suscipit qui. Placeat fugiat
                      dolore accusantium aliquid cupiditate? Animi, id hic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xx">
          <div className="row set-padding">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Products</h3>
            </div>
          </div>
          <div className="row set-padding">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
