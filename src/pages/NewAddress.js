import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getAdd,
  getoneAdd,
  newAdd,
  updateAdd,
} from "../features/user/userSlice";
import ProfileBar from "../components/ProfileBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomInput from "./../components/CustomInput";
const addressSchema = yup.object({
  address: yup.string().required("address required"),
});

const Newaddress = () => {
  const navigate = useNavigate();
  useEffect(() => {
    addId ? dispatch(getoneAdd(addId)) : dispatch(getAdd());
  }, []);
  const dispatch = useDispatch();
  const oneaddressState = useSelector(
    (state) => state.auth?.oneaddress?.address
  );
  console.log(oneaddressState);
  const location = useLocation();

  const addId = location.pathname.split("/")[2];

  const [edit, setEdit] = useState(true);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      address: oneaddressState || "",
    },
    validationSchema: addressSchema,

    onSubmit: (values) => {
      if (addId !== undefined) {
        const data = { id: addId, address: values };
        dispatch(updateAdd(data));
        setTimeout(() => navigate("/list-address"), 300);
      } else {
        dispatch(newAdd(values));
        formik.resetForm();
      }
    },
  });

  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5 px-5">
        <div className="row set-padding">
          <ProfileBar />
          <div className="col-10">
            <div className="col-12">
              <div>
                <h3 className="mb-4 title">
                  {addId !== undefined ? "Edit" : "Add"} Address
                </h3>
                <Link to="/list-address" className="pb-2">
                  Address List
                </Link>
                <div>
                  <form action="" onSubmit={formik.handleSubmit}>
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleBlur("address")}
                      defaultValue={oneaddressState}
                      values={formik.values.address}
                      className="form-control"
                    />
                    <div className="error">
                      {formik.touched.address && formik.errors.address}
                    </div>
                    <button
                      className="btn btn-success border-0 rounded-3 my-5"
                      type="submit"
                    >
                      {addId !== undefined ? "Edit" : "Add"} Address
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Newaddress;
