import React, { useEffect } from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';


const Home = () => {

 

  return (
    <div>
     <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>

    </div>
  )
}

export default Home