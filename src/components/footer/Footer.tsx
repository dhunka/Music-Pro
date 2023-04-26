import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1 className="text-green-400">Categorias</h1>
          <span className="text-blue-500">guitarra</span>
          <span>violin</span>
          <span>piano</span>
          <span>bateria</span>
        </div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Music Pro</span>
          <span className="copyright"></span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;