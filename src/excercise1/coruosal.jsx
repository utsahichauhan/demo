// create crousal image using useeefect place 4 image in public directory and change image at interval of 4 sec
// implement countdown timer using useEffect 
import React, { useState, useEffect } from "react";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg"
]; // Place these images in the public directory

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }}
      />
    </div>
  );
}

export default ImageCarousel;
