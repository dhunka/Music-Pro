import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <div>
     <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>

    </div>
  )
}

export default Home