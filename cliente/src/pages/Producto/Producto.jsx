import React from 'react';
import { useState } from 'react';
import "./Producto.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Producto = () => {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)

  const images = [
    "https://musicalharmony.cl/273-large_default/bajo-el%C3%A9ctrico-ibanez-4-cuerdas-color-negro-bk.jpg",
    "https://musicalharmony.cl/272-large_default/bajo-el%C3%A9ctrico-ibanez-4-cuerdas-color-negro-bk.jpg",
    "https://musicalharmony.cl/271-large_default/bajo-el%C3%A9ctrico-ibanez-4-cuerdas-color-negro-bk.jpg",
  ];

  return (
    <div className='producto'>
      <div className='left'>
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
          <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}/>
        </div>
      </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt="" />
        </div>
      <div className='right'>
        <h1>Titulo</h1>
        <span className='price'>$279.900</span>
        <p>Bajo de 4 cuerdas GSR perteneciente a la serie GIO basada en los Soundgears.

Estos bajos no solo se tocan y se ven mejor que cualquier otro en su rango de precio, sino que también cada bajo GSR recibe el ajuste e inspección de su contraparte más cara.

Los bajos GSR ofrecen la famosa sofisticación, comodidad, tono y facilidad de tocar de los Soundgear, pero a un precio más económico.</p>
        <div className="quantity">
          <button className='button' onClick={()=>setQuantity((prev)=>prev===1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button className='button' onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
        <AddShoppingCartIcon />AÑADIR AL CARRO
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> AÑADIR A LISTA DE DESEOS
          </div>
          <div className="item">
            <BalanceIcon /> COMPARAR PRODUCTOS
          </div>
        </div>
        <div className="info">
          <span>Marca: Ibanez</span>
          <span>Tipo: Bajo eléctrico</span>
          <span>Cuerdas: 4</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPCIÓN</span>
          <hr />
          <span>INFORMACIÓN ADICIONAL</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Producto