import React from "react";
import newsletter from "../images/newsletter.png";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container-xxl ">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for new letter</h2>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xx ">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="text-white fs-6">
                <address>
                  Hno:056 - May Hat, Hau Thanh,
                  <br /> Long Phu, Soc Trang
                  <br /> PinCode: 96000
                </address>
                <a
                  href="tel: +84 345384130"
                  className="mt-3 d-block mb-1 text-white">
                  +84 345384130
                </a>
                <a
                  href="mailto:quanb1910130@student.ctu.edu.vn"
                  className="mt-2 d-block mb-0 text-white">
                  quanb1910130@student.ctu.edu.vn
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#/">
                    <BsLinkedin className=" fs-4" />
                  </a>
                  <a className="text-white" href="#/">
                    <BsGithub className=" fs-4" />
                  </a>
                  <a className="text-white" href="#/">
                    <BsFacebook className=" fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/term-conditions">
                  Terms & Condition
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Fag
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Conttact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Watchs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xx ">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Dev's
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
