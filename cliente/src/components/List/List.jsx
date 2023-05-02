import React from 'react'
import Card from '../Card/Card'
export const List = () => {

    const data =[
        {
          id:1,
          img:"https://www.superprof.cl/blog/wp-content/uploads/2017/02/caracteristicas-guitarra.jpg",
          title:"guitarra electrica",
          oldPrice:19,
          Price:12,
        },
        {
          id:2,
          img:"https://www.escuelaacordes.com/sites/default/files/styles/large_retina/public/portfolio/Bateria.jpg?itok=HtzeuvOj",
          title:"guitarra electrica",
          oldPrice:17,
          Price:12,
        },
        {
          id:3,
          img:"https://www.escuelaacordes.com/sites/default/files/styles/large_retina/public/portfolio/Bateria.jpg?itok=HtzeuvOj",
          title:"guitarra electrica",
          oldPrice:17,
          Price:12,
        },
        {
          id:4,
          img:"https://www.escuelaacordes.com/sites/default/files/styles/large_retina/public/portfolio/Bateria.jpg?itok=HtzeuvOj",
          title:"guitarra electrica",
          oldPrice:17,
          Price:12,
        },
      ];

  return (
    <div className="list"> {data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}