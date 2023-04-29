
import "./featuredProducts.scss";
import Card  from '../Card/Card';
import axios from 'axios';
import { useState,useEffect} from 'react';

const FeaturedProducts = ({type}) => {

  const[data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
    const data = await axios.get(
      process.env.REACT_APP_API_URL + "/productos?populate=*",
      {
        headers: { 
         Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,
         },
       } 
      );
      console.log(data)
    }catch(err){
       console.log(err)
      }
   }
    fetchData();
   }, [])



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