import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { base_url, config } from "../utils/axiosConfig";
import {
  createAnOrder,
  deleteUserCart,
  getUserCart,
  resetState,
} from "../features/user/userSlice";
const shippingSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  mobile: yup.string().required("mobile is Required"),
  email: yup.string().required("Email is Required"),
  address: yup.string().required("Address Detail are Required"),
  // typecheckout: yup.string().required("Checkout type is Required"),
  other: yup.string().required("Other is Required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth.user);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [type, setType] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });

  const [cartProductState, setCartProductState] = useState([]);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + Number(cartState[i].quantity) * cartState[i].price;
    }
    setTotalAmount(sum);
  }, [cartState]);

  useEffect(() => {
    if (
      authState.orderedProduct !== null &&
      authState?.orderedProduct?.success == true
    ) {
      navigate("/my-orders");
    }
  }, [authState]);
  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstName: authState?.firstname || "",
      lastName: authState?.lastname || "",
      email: authState?.email || "",
      mobile: authState?.mobile || "",
      address: "",
      country: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      console.log(1);
      setShippingInfo(values);
      localStorage.setItem("address", JSON.stringify(values));
      setTimeout(() => {
        checkout();
      }, 500);
    },
  });

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        quantity: cartState[index].quantity,
        color: cartState[index].color._id,
        price: cartState[index].price,
      });
    }
    setCartProductState(items);
  }, []);

  const checkout = () => {
    if (type === "COD") {
      dispatch(
        createAnOrder({
          totalPrice: totalAmount + 3,
          totalPriceAfterDiscount: totalAmount + 3,
          orderItems: cartProductState,
          // paymentInfo: result.data,
          shippingInfo: JSON.parse(localStorage.getItem("address")),
          typecheckout: type,
        })
      );
      localStorage.removeItem("address");
      dispatch(deleteUserCart());
      dispatch(resetState());
    } else checkOuteHandler();
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const checkOuteHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to Load");
      return;
    }
    const result = await axios.post(
      `${base_url}user/order/checkout`,
      { amount: totalAmount + 3 },
      config
    );
    if (!result) {
      alert("Something went Wrong");
      return;
    }
    const { amount, id: order_id, currency } = result.data.order;

    const options = {
      key: "rzp_test_3iJMbjmvX1IVGL", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Trung Quan.",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          `${base_url}user/order/paymentVerification`,
          data,
          config
        );

        setPaymentInfo({
          razorpayPaymentId: result.razorpay_payment_id,
          razorpayOrderId: result.razorpay_order_id,
        });

        dispatch(
          createAnOrder({
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount,
            orderItems: cartProductState,
            paymentInfo: result.data,
            shippingInfo: JSON.parse(localStorage.getItem("address")),
            // typecheckout:
          })
        );
        localStorage.removeItem("address");
        dispatch(deleteUserCart());
        dispatch(resetState());
      },
      prefill: {
        name: "Trung Quan",
        email: "nguyenquan07112001@gmail.com",
        contact: "+84 345384130",
      },
      notes: {
        address: "CTU",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2 px-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Shop Tech</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Trung Quan (nguyenquan07112001@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="flex-grow-1">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={formik.handleChange("firstName")}
                    defaultValue={authState?.firstname}
                    onBlur={formik.handleBlur("firstName")}
                    values={formik.values.firstName}
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    defaultValue={authState?.lastname}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    values={formik.values.lastName}
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    defaultValue={authState?.mobile}
                    onChange={formik.handleChange("phone")}
                    onBlur={formik.handleBlur("phone")}
                    values={formik.values.phone}
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.phone && formik.errors.phone}
                  </div>
                </div>{" "}
                <div className="flex-grow-1">
                  <label htmlFor="">Email</label>

                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    defaultValue={authState?.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    values={formik.values.email}
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="w-100">
                  <label htmlFor="">Address</label>

                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    values={formik.values.address}
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <label htmlFor="">Apartment, Suite ,etc</label>

                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    name="other"
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                    values={formik.values.other}
                    className="form-control"
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <label htmlFor="">Checkout type</label>

                  <select
                    name="typecheckout"
                    onChange={(e) => setType(e.target.value)}
                    values={type}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Type CheckOut
                    </option>
                    <option value="COD">COD</option>
                    <option value="OnlineCheckout">OnlineCheckout</option>
                  </select>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                    <button className="button" type="submit" onClick={checkout}>
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-2 align-align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            width={100}
                            src={item?.productId?.images[0]?.url}
                            alt="product"
                          />
                        </div>
                        <div>
                          <h5 className="total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price"> {item?.color?.title} </p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          $ {item.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">${totalAmount ? totalAmount : 0}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 3</p>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                ${totalAmount ? totalAmount + 3 : 0}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
