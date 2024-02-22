import { useEffect, useState } from "react";
import { imagesList } from "./data";
import classes from "./styles.module.css";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const images = [...imagesList];

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex === images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex((prevState) => prevState + 1);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentImageIndex]);

  const leftButtonClickHandler = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex((prevState) => prevState - 1);
    }
  };

  const rightButtonClickHandler = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex((prevState) => prevState + 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <img
          src={images[currentImageIndex]}
          alt="slider"
          className={classes.sliderImage}
        />
        <div className={classes.leftMove} onClick={leftButtonClickHandler}>
          <FaRegArrowAltCircleLeft />
        </div>
        <div className={classes.rightMove} onClick={rightButtonClickHandler}>
          <FaRegArrowAltCircleRight />
        </div>
        <div className={classes.tracker}>
          {images.map((image, index) => (
            <div
              className={`${classes.dot} ${
                index === currentImageIndex ? classes.activeDot : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
