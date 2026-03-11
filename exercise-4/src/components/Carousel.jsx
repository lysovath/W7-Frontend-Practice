import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  /* You will need to  use  state to mnage the current image */

  /* You will need to hanle the click on left and right button */
  function onLeftClick() {
    setCurrentImageIndex((prev) => {
      if (prev === 0) {
        return images.length - 1;
      } else {
        return prev - 1;
      }
    })
  }

  function onRightClick() {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }
  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={onLeftClick}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onRightClick}/>
    </div>
  );
};
