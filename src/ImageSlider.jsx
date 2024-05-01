import React from "react";
import { Carousel } from "antd";

import bgOne from "./assets/bg1.jpg";
import bgTwo from "./assets/bg2.jpg";
import bgThree from "./assets/bg3.jpg";
import bgFour from "./assets/bg4.jpg";
import bgFive from "./assets/bg5.jpg";
import bgSix from "./assets/bg6.jpg";
import bgSeven from "./assets/bg7.jpg";
import bgEight from "./assets/bg8.jpg";

const imageStyle = {
  width: "100%",
  height: "500px",
  objectFit: "cover",
  // marginTop: "3%",
};

const images = [
  { image: <img src={bgOne} alt="bg-1" style={imageStyle} /> },
  { image: <img src={bgTwo} alt="bg-1" style={imageStyle} /> },
  { image: <img src={bgThree} alt="bg-1" style={imageStyle} /> },
  { image: <img src={bgFour} alt="bg-1" style={imageStyle} /> },
  { image: <img src={bgFive} alt="bg-1" style={imageStyle} /> },
  { image: <img src={bgSix} alt="bg-1" style={imageStyle} /> },
  { image: <img src={bgSeven} alt="bg-1" style={imageStyle} /> },
  { image: <img src={bgEight} alt="bg-1" style={imageStyle} /> },
];

const ImageSlider = () => (
  <div>
    <h1 className="p-4 text-3xl bg-gray-300 text-slate-700 shadow-xl mb-2">Image Slider</h1>
    <Carousel autoplay dots={false}>
      {images.map((img, idx) => ( 
        <div key={idx}>{img.image}</div>
      ))}
    </Carousel>
  </div>
);
export default ImageSlider;
