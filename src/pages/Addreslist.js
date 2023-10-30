import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteAdd, getAdd } from "../features/user/userSlice";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CustomModal from "./../components/CustomModal";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import ProfileBar from "../components/ProfileBar";
const Listaddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addId, setAddId] = useState("");

  const [open, setOpen] = useState(false);
  const showModal = (e) => {
    setOpen(true);
    setAddId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const addressState = useSelector((state) => state.auth.address);
  useEffect(() => {
    dispatch(getAdd());
  }, []);
  const data1 = [];
  for (let i = 0; i < addressState?.length; i++) {
    data1.push({
      key: i + 1,
      name: addressState[i]?.address,
      action: (
        <>
          <Link
            to={`/new-address/${addressState[i]._id}`}
            className=" fs-3 text-success"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(addressState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteAddress = (e) => {
    dispatch(deleteAdd(e));

    setOpen(false);
    setTimeout(() => {
      // window.location.reload();
      dispatch(getAdd());
    }, 200);
  };

  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  return (
    <>
      {" "}
      <BreadCrumb title="Address list" />
      <Container class1="cart-wrapper home-wrapper-2 py-5 px-5">
        <div className="row set-padding">
          <ProfileBar />
          <div className="col-10">
            <div className="d-flex">
              <h3 className="mb-4 title">Address</h3>
              <button
                className="bg-success text-white mb-3"
                onClick={() => navigate("/new-address")}
                style={{ position: "absolute", right: "100px" }}
              >
                <AiOutlinePlusCircle /> Add new Address
              </button>
            </div>
            <div>
              <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
              hideModal={hideModal}
              open={open}
              performAction={() => {
                deleteAddress(addId);
              }}
              title="Are you sure you want to delete this address?"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Listaddress;
