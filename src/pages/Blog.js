import React from "react";
import Meta from "../compoments/meta";
import BreadCrumb from "../compoments/BreadCrumb";
const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xx">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
