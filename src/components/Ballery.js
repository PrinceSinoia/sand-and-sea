import React, { useRef, useEffect } from 'react';
// import hoverEffect from 'hover-effect';
import image1 from "../images/about-img.png";
import image2 from "../images/hover1.png";
import fluid from '../fluid.jpg';
import HoverImage from 'react-hover-image';

// Import the remaining images and update the paths accordingly

const Ballery = () => {
 

  return (
    <div className="gallery">
       <HoverImage src={image1} className="hover-image" hoverClass="hover-transition" hoverSrc={image2} alt="Image 1" />
      {/* <HoverImage src={image2} hoverSrc={image2Hover} alt="Image 2" /> */}
      {/* Repeat the above structure for the remaining images */}
    </div>
  );
};

export default Ballery;