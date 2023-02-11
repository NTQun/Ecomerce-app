import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Pirvary Policy"} />
      <BreadCrumb title="Pirvary Policy" />
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

export default PrivacyPolicy;
