import { useState } from "react";
import classes from "./styles.module.css";
import { FaStar } from "react-icons/fa";

export default function Rating() {
  const [hoveredTill, setHoveredTill] = useState(-1);
  const [ratedTill, setRatedTill] = useState(-1);
  const totalStars = 10;
  return (
    <div className={classes.container}>
      <div>
        {Array(totalStars)
          .fill(1)
          .map((val, index) => (
            <FaStar
              className={`${classes.defaultStar} ${
                hoveredTill >= index ? classes.defaultStarHovered : ""
              } ${ratedTill >= index ? classes.ratedStar : ""}`}
              onMouseOver={() => setHoveredTill(index)}
              onMouseOut={() => setHoveredTill(-1)}
              onClick={() => setRatedTill(index)}
              key={index}
            />
          ))}
      </div>
      <button
        className={classes.reset}
        onClick={() => {
          setRatedTill(-1);
        }}
      >
        Reset
      </button>
    </div>
  );
}
