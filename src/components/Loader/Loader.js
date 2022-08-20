import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <div>
      <div className="loader">
        <div className="circles">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </div>
        <div className="pacman">
          <span className="top"></span>
          <span className="bottom"></span>
          <span className="left"></span>
          <div className="eye"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;