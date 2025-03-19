import React from "react";

const Card = ({ children, className = "" }) => {
  return <div className={`bg-white ${className}`}>{children}</div>;
};

export default Card;
