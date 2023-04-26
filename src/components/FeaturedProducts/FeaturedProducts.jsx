import React from 'react'
import "./featuredProducts.scss";
import Card  from '../Card/Card';

const FeaturedProducts = ({type}) => {

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
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>lorem ipsum dolor</p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
export default FeaturedProducts