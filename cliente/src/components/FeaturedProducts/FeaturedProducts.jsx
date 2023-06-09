import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

const FeaturedProducts = ({ type }) =>{

  const [data,setData] = useState([]);
  
  useEffect(()=>{
    const fetchData = async() => {
       try{
        const res =await axios.get(import.meta.env.VITE_REACT_APP_API_URL+"/productos?populate=*",
        {
           headers:{
             Authorization:"bearer"+ import.meta.env.VITE_REACT_APP_API_TOKEN
           }
        });
        setData(res.data.data);
       } catch(err){
         console.log(err);
       }
      };
      fetchData();
 
   },[]);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
   
        </p>
      </div>
      <div className="bottom">
        {data.map(item =>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
