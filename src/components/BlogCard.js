import React from "react";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  const { id, title, description, date, image } = props;
  return (
    <div className="blog-card">
      <div className="card-image ">
        <img
          src={image ? image : "images/blog-1.jpg"}
          className="img-fluid  w-100 d-block "
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title" style={{ overflow: "..." }}>
          {title}
        </h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 70) + "...",
          }}
        ></p>

        <Link className="button " to={"/blogs/" + id}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
