import React from "react";
import Meta from "../compoments/Meta";
import BreadCrumb from "../compoments/BreadCrumb";
const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Condition"} />
      <BreadCrumb title="Term And Condition" />{" "}
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

export default TermAndContions;
