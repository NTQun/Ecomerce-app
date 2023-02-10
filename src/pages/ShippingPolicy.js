import React from "react";
import Meta from "../compoments/Meta";
import BreadCrumb from "../compoments/BreadCrumb";
const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />{" "}
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xx">
          <div className="row set-padding">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingPolicy;
