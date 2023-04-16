import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpeacialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { getAllBlogs } from "../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { getAllProducts } from "../features/product/productSlice";
import { addToWishlist } from "../features/product/productSlice";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <>
      <Container class1="home-wrapper-2 py-5 set-padding">
        <div className="row ">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>IPAD S13+ pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button" to="">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap 10 justufy-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>IPAD S13+ pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>IPAD S13+ pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h5>IPAD S13+ pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>IPAD S13+ pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="home-wrapper-2 py-5 set-padding">
        <div className="container-xx">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className=" d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all orders over 100$</p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Supprise Offers</h6>
                    <p>Save up to 25% off</p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p>Shopp with an expert</p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get Factory Default Price</p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 set-padding">
        <div className="container-xx">
          <div className="row">
            <div className="col-12">
              <div className="categories flex-wrap d-flex justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wwrapper-2 set-padding">
        <div className="container-xx">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featered Colection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2 set-padding">
        <div className="container-xx">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/famous-01.webp"
                  alt="famous"
                />
                <div className="famous-content position-absolute text-white">
                  <h5 className="text-white">Big Screen</h5>
                  <h6>Smart Watch series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo. *</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/famous-02.webp"
                  alt="famous"
                />
                <div className="famous-content position-absolute text-dark">
                  <h5>Studio Display</h5>
                  <h6>600 nits of brightness.</h6>
                  <p>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/famous-03.webp"
                  alt="famous"
                />
                <div className="famous-content position-absolute text-dark">
                  <h5>smartphones</h5>
                  <h6>Smartphone 13 Pro.</h6>
                  <p>
                    Now in Green. From $999.00 or $41.62/mo. for 24 mo.
                    Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/famous-04.webp"
                  alt="famous"
                />
                <div className="famous-content position-absolute text-dark">
                  <h5>
                    <div className="cms-banner-label">home speakers</div>
                  </h5>
                  <h6>Room-filling sound.</h6>
                  <p>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="speacial wrapper py-5 home-wrapper-2 set-padding">
        <div className="container-xx">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpeacialProduct
                      key={index}
                      title={item?.title}
                      brand={item?.brand}
                      totalrating={item?.totalrating.toString()}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                    />
                  );
                }
              })}
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wwrapper-2 set-padding">
        <div className="container-xx">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "popular") {
                  return (
                    <div key={index} className={"col-3"}>
                      <Link
                        to={""}
                        // to={`${
                        //   location.pathname == "/"
                        //     ? "/product/:id"
                        //     : location.pathname == "/product/:id"
                        //     ? "/product/:id"
                        //     : ":id"
                        // }`}
                        className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}>
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
                            src={watch2}
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
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />

                          <p className="price">$ {item?.price}</p>
                        </div>

                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column ">
                            <button className="border-0 bg-transparent">
                              <img src={prodcompare} alt="compare" />
                            </button>
                          </div>

                          <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent">
                              <img src={view} alt="view" />
                            </button>
                          </div>

                          <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent">
                              <img src={addcart} alt="addcart" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5 home-wrapper-2 set-padding">
        <div className="container-xx">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>{" "}
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wwrapper-2 set-padding">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            {blogState
              ? blogState?.map((item, index) => {
                  if (index < 3) {
                    return (
                      <div className="col-3 mb-3" key={index}>
                        <BlogCard
                          id={item?._id}
                          title={item?.title}
                          description={item?.description}
                          image={item?.images[0]?.url}
                          date={moment(item?.createdAt).format(
                            "MMMM Do YYYY, h:mm a"
                          )}
                        />
                      </div>
                    );
                  }
                })
              : []}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
