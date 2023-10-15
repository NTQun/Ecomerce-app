import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import blog from "../images/blog-1.jpg";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blog/blogSlice";
import { GrLike, GrDislike } from "react-icons/gr";

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const dispatch = useDispatch();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    dispatch(getABlog(getBlogId));
  };
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row set-padding ">
          <div className="col-2 ">
            <div className="filter-card mb-3 ">
              <h3 className="filter-title">Shop By Catergories</h3>
              <div>
                <ul className="ps-0">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to blog
                </Link>
                <h3 className="title">{blogState?.title}</h3>
                <img
                  src={
                    blogState?.images[0]?.url ? blogState?.images[0]?.url : blog
                  }
                  className="img-fluid w100 my-4"
                  alt="blog"
                  style={{ maxHeight: "350px" }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogState?.description,
                  }}
                ></p>
                <div>
                  <button to="" className="px-3 mx-3">
                    <GrLike />
                  </button>
                  <button to="" className="px-3">
                    <GrDislike />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
