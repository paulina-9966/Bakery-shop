import React from 'react';
import { useGlobalContext } from './context';
import { GiCupcake } from 'react-icons/gi';
import { Link } from 'react-router-dom'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <div className='hero-info'>
        <h1>
          Smaczne wypieki </h1><br />
         <h3>z dostawą do domu</h3> 
        <Link to= '/about' className="btn">
          <button className='btn'>Zobacz wszystkie <GiCupcake /></button>
          </Link> 
        
      </div>
    </div>
  
  </section>
  );
};

export default Hero;
