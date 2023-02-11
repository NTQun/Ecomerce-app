import React from "react";

const Container = (props) => {
  return (
    <section className={props.class1}>
      <div className="container-xx set-padding">{props.children}</div>
    </section>
  );
};

export default Container;
