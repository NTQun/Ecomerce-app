import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Condition"} />
      <BreadCrumb title="Term And Condition" />{" "}
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row set-padding">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;
