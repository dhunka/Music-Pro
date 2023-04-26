import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  return (
    <Link className="link" to ={`/product/${item.id}`}>
        <div className="card">
            {item.isNew && <div className="new">New</div>}
            <div className="image">
                <img src={item.img} alt="" className="mainImg" />
                <img src={item.img2} alt="" className="mainImg" />
            </div>
            <h2>{item.title}</h2>
            <div>
                <h3>${item.oldPrice}</h3>
                <h3>${item.Price}</h3>
            </div>
        </div>
    </Link>
   )
}

export default Card