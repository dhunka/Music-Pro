import React from "react";
import "./Card.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Card = () => {
    const data = [
        {
         id:1,
         img:"https://www.superprof.cl/blog/wp-content/uploads/2017/02/caracteristicas-guitarra.jpg",
         title:"guitarra electrica",
         desc: "guitarra muy buena",
         oldPrice:19,
         Price:12,
        },
        {
         id:2,
         img:"https://www.escuelaacordes.com/sites/default/files/styles/large_retina/public/portfolio/Bateria.jpg?itok=HtzeuvOj",
         title:"Bajo",
         desc: "Bajo de cuatro cuerdas",
         oldPrice:17,
         Price:12,
        },
       ];
      return(
        <div className='cart'>
            <h1>Productos en tu carrito</h1>
            {data?.map(item=>(
              <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price">
                        1 x ${item.Price}
                    </div>
                </div>
                <DeleteOutlinedIcon className="delete"/>
              </div>
            ))}
           <div className="total">
             <span>SUBTOTAL</span>
             <span>$123</span>
           </div>
           <button>Pasar por la caja</button>
           <span className="recet">Reset Cart</span>
        </div>
    );

}
export default Card;
