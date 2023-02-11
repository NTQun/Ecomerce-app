import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12 ">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Moblile Number"
                    className="form-control"
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control "
                  />
                </div>
                <div>
                  <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Signup
                    </button>
                  </div>
                  <Link to="/login" className="mt-3 text-info">
                    If you have account. Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
