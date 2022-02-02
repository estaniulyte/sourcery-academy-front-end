import React from "react";
import "./loader.scss";
import PropTypes from "prop-types";

const Loader = ({ color = "white" }) => {
  return (
    <svg
      className="loader"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.84056 13.4917C3.0062 13.8603 2.84167 14.2933 2.47307 14.459C2.10447 14.6246 1.67137 14.4601 1.50573 14.0915C0.932822 12.8166 0.632568 11.4285 0.632568 10C0.632568 4.47726 5.10983 0 10.6326 0C16.1553 0 20.6326 4.47726 20.6326 10C20.6326 15.5227 16.1553 20 10.6326 20C8.28596 20 6.06229 19.1881 4.28524 17.7281C3.97299 17.4715 3.92783 17.0105 4.18436 16.6982C4.4409 16.386 4.90198 16.3408 5.21422 16.5973C6.73191 17.8442 8.62807 18.5366 10.6326 18.5366C15.3471 18.5366 19.1692 14.7145 19.1692 10C19.1692 5.28549 15.3471 1.46341 10.6326 1.46341C5.91805 1.46341 2.09598 5.28549 2.09598 10C2.09598 11.2208 2.35204 12.4046 2.84056 13.4917Z"
        fill={color}
      />
    </svg>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
};

Loader.defaultProps = {
  color: "white",
};

export default Loader;
