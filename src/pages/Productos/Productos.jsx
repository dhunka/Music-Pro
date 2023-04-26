import { useParams } from 'react-router-dom'
import { List } from '../../components/List/List'
import React, { useState } from 'react'
import './Productos.scss'

const Productos = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const{sort,setSort} = useState(null)
  return (
    <div className='productos'>
      <div className="left">
        <div className="filterItem">
          <h2>Categoria de productos</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1}/>
            <label htmlFor="1">Baterias</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2}/>
            <label htmlFor="2">bajos</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3}/>
            <label htmlFor="3">guitarras</label>
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
          <input type="radio" name="price" id="asc" value= "asc" onChange={e => setSort("desc")}/>
          <label htmlFor="asc">Precio(Bajos primero)</label>
        </div>
      </div>
      <div className="right">
        <img className='catImg' 
        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress=tinysrgb&w=1600" 
        alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Productos