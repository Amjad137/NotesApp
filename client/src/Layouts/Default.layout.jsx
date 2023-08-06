import React from "react";
import Navbar from "../Components/Navbar.component";
const Default =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
      </>
    );
  };

export default Default;
