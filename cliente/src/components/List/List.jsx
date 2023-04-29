import React from 'react'
import Card from '../Card/Card'
export const List = () => {
    
    const data =[
        {
          id:1,
          img:"",
          img2:"",
          title:"guitarra electrica",
          isNew:true,
          oldPrice:19,
          Price:12
        },
        {
          id:2,
          img:"assets/Screenshot_3.png",
          img2:"",
          title:"guitarra electrica",
          isNew:true,
          oldPrice:17,
          Price:12
        }
      ]

  return (
    <div className="list"> {data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}
