import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({pic, title, para}) => {
    return (

        <Parallax
        blur={{ min: -150, max: 150 }}
        bgImage={pic}
        bgImageAlt="the menu"
        strength={-200}
    >
      
      <div className="hero h-[700px]" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{para}</p>
      </div>
  </div>
</div>
    </Parallax>
    
    );
};

export default Cover;