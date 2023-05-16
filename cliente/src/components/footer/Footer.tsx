import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1 className="text-green-400">Categorias</h1>
          <span>guitarra</span>
          <span>violin</span>
          <span>piano</span>
          <span>bateria</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Paginas</span>
          <span>Comparar</span>
          <span>Cookies</span>
        </div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Music Pro</span>
          <span className="copyright"></span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right"></div>
        <img src="https://images-ext-1.discordapp.net/external/Abwhb5yrRek9JAuRqD2Smkt7XpbdWecQy12tLeYZsKI/https/raw.githubusercontent.com/safak/youtube2022/ecommerce/client/public/img/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;