import React, { useState } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  commentOrder,
  deleteComment,
  getOrders,
  singleOrder,
  updateComment,
} from "../features/user/userSlice";
import { useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

import { AiFillDelete } from "react-icons/ai";
import CustomModal from "./../components/CustomModal";
import { toast } from "react-toastify";

const SingpleOrder = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const [edit, setEdit] = useState(true);
  const [comment, setComment] = useState(null);

  const hideModal = () => {
    setOpen(false);
  };
  const orderState = useSelector((state) => state?.auth?.singleOrder);
  useEffect(() => {
    dispatch(singleOrder(orderId));
  }, [orderId]);

  const commentHandle = () => {
    if (orderState?.comment) {
      console.log("update");
      dispatch(updateComment({ id: orderId, comment: comment }));
      setTimeout(() => {
        dispatch(singleOrder(orderId));
      }, 500);
    } else {
      console.log("create");

      dispatch(commentOrder({ id: orderId, comment: comment }));
      setTimeout(() => {
        dispatch(singleOrder(orderId));
      }, 500);
    }
  };
  const [open, setOpen] = useState(false);

  const showModal = (e) => {
    setOpen(true);
  };

  const deleteProduct = () => {
    dispatch(deleteComment(orderId));
    toast("Delete comment Success");
    setOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };
  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container class1="checkout-wrapper py-5 home-wrapper-2 px-5">
        <div className="row ">
          <div className="col-12 ">
            <div className="row">
              <div className="col-2">
                <h5>Order Id </h5>
              </div>
              <div className="col-2">
                <h5>Total Amount </h5>
              </div>
              <div className="col-2 ">
                <h5>Type Checkout </h5>
              </div>
              <div className="col-2">
                <h5>Address </h5>
              </div>
              <div className="col-2">
                <h5>Status </h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div
              style={{ backgroundColor: "#febd69" }}
              className="row pt-3 my-3"
            >
              <div className="col-2">
                <p>{orderState?._id}</p>
              </div>
              <div className="col-2">
                <p>{orderState?.totalPrice} </p>
              </div>
              <div className="col-2">
                <p>{orderState?.typecheckout}</p>
              </div>
              <div className="col-2">
                <p>{orderState?.shippingInfo?.address}</p>
              </div>
              <div className="col-2">
                <p>{orderState?.orderStatus}</p>
              </div>

              <div className="col-12">
                <div
                  className="row  py-3"
                  style={{ backgroundColor: "#2b4663" }}
                >
                  <div className="col-2">
                    <h6 className="text-white">Product Name </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="text-white">Product Image </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="text-white">Quantity</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="text-white">Price </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="text-white">Color </h6>
                  </div>
                  <div></div>
                </div>
                {orderState?.orderItems?.map((i, index) => {
                  return (
                    <div
                      className="row  p-3"
                      style={{ backgroundColor: "#192e45" }}
                      key={index}
                    >
                      <div className="col-2">
                        <p className="text-white">{i?.product?.title} </p>
                      </div>
                      <div className="col-2">
                        <img
                          src={i?.product?.images[0]?.url}
                          alt="IMG Product"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </div>
                      <div className="col-2">
                        <p className="text-white ">{i?.quantity} </p>
                      </div>
                      <div className="col-2">
                        <p className="text-white">{i?.price} </p>
                      </div>
                      <div className="col-2">
                        <ul className="colors ps-0 mx-3">
                          <li style={{ backgroundColor: i?.color?.title }}></li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="" className=" mx-2 ">
            Comment
          </label>
          {edit == true && (
            <FiEdit className="fs-3 mx-3" onClick={() => setEdit(false)} />
          )}{" "}
          {edit === false && (
            <button
              type="button"
              onClick={commentHandle}
              className="btn btn-primary"
            >
              {orderState?.comment ? "Save" : "Add"}
            </button>
          )}
          <div className="mt-2">
            <textarea
              name=""
              id=""
              disabled={edit}
              className="w-100 form-control"
              cols="30"
              defaultValue={orderState?.comment ? orderState?.comment : ""}
              rows="4"
              placeholder="Comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </div>
          {orderState?.comment && (
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => {
                showModal(orderState?._id);
              }}
            >
              <AiFillDelete /> Delete Comment
            </button>
          )}
        </div>
        <CustomModal
          hideModal={hideModal}
          open={open}
          performAction={() => {
            deleteProduct();
          }}
          title="Are you sure you want to delete this comment?"
        />
      </Container>
    </>
  );
};

export default SingpleOrder;
