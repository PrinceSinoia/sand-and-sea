// import React, { useState } from 'react';
// import styled from 'styled-components';















// const images = [
//   {
//     defaultImage: "img 1.png",
//     hoverImage: 'Img 2.png',
//   },
//   {
//     defaultImage: 'Img 3.png',
//     hoverImage: 'Img 4.png',
//   },
//   {
//     defaultImage: 'Img 5.png',
//     hoverImage: 'Img 6.png',
//   },
//   // ... add more image objects here
// ];

// const GalleryContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const GalleryImage = styled.img`
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
//   margin: 10px;
// `;

// const Gallery = () => {
//   const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

//   return (
//     <GalleryContainer>
//       {images.map((image, index) => (
//         <GalleryImage
//           key={index}
//           src={hoveredImageIndex === index ? image.hoverImage : image.defaultImage}
//           onMouseEnter={() => setHoveredImageIndex(index)}
//           onMouseLeave={() => setHoveredImageIndex(null)}
//           alt={`Image ${index + 1}`}
//         />
//       ))}
//       {/* <img src={image1} alt=""/> */}
//     </GalleryContainer>
//   );
// }

// export default Gallery;
