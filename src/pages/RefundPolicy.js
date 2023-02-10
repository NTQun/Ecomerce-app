import React from "react";
import Meta from "../compoments/Meta";
import BreadCrumb from "../compoments/BreadCrumb";
const RefundPolycy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />{" "}
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
export default RefundPolycy;
