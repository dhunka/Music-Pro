import { useParams } from 'react-router-dom';
import { List } from '../../components/List/List';
import React, { useState } from 'react';
import './Productos.scss';

const Productos = () => {

  const catId = parseInt(useParams().id)

  const [maxPrice,setMaxPrice] = useState(1000)

  const [sort, setSort] = useState(null);

  return (
    <div className='productos'>
      <div className="left">
        <div className="filterItem">
          <h2>Categoria de productos</h2>

          <div className="inputItem">
            <input type="checkbox" id="1" value={1}/>
            <label htmlFor="1">Bajo Cuatro Cuerdas</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="2" value={2}/>
            <label htmlFor="2">Bajo Cinco Cuerdas</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="3" value={3}/>
            <label htmlFor="3">Bajos Activos</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="4" value={4}/>
            <label htmlFor="4">Bajos Pasivos</label>
          </div>

        </div>
        <div className="filterItem">
          <h2>Filtrados por precio</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Ordenados por</h2>
          <div className='inputItem'>
            <input type="radio" name="price" id="asc" value= "asc" onChange={e => setSort("asc")}/>
            <label htmlFor="asc">Precio(Bajos primero)</label>
          </div>
          <div className='inputItem'>
            <input type="radio" name="price" id="desc" value= "desc" onChange={e => setSort("desc")}/>
            <label htmlFor="asc">Precio(Más alto primero)</label>
          </div>
        </div>

      </div>
      <div className="right">
        <img className='catImg' 
        src="https://img.freepik.com/fotos-premium/fila-guitarras-acusticas-electricas-diferentes-colores-tienda-instrumentos-musicales_210545-1067.jpg" 
        alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Productos