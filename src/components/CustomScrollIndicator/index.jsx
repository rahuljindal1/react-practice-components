import { useEffect, useState } from "react";
import { scrollIndicatorData } from "../../data/scroll-indicator";
import classes from "./styles.module.css";

export default function CustomScrollIndicator() {
  const [scrollProgressFilledPercentage, setScrollProgressFilledPercentage] =
    useState(0);
  const data = scrollIndicatorData;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const currentScrollHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollPercentCompleted = Math.round(
        (currentScrollHeight * 100) / totalScroll
      );
      setScrollProgressFilledPercentage(scrollPercentCompleted);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={classes.container}>
      <div className={classes.scrollContainer}>
        <div className={classes.title}>Custom Scroll Indicator</div>
        <div className={`${classes.progressBar}`}>
          <div
            className={`${classes.filled}`}
            style={{ width: `${scrollProgressFilledPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={classes.data}>
        {data.map((ele, index) => (
          <div key={index} className={classes.dataElem}>
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
}
