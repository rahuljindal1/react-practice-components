import classes from "./styles.module.css";
import { generate } from "random-words";

export default function ScrollToPosition() {
  return (
    <div className={classes.container}>
      <h1>Scroll To Position</h1>
      <button
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        Scroll To Bottom
      </button>
      <div className={classes.content}>
        {Array(500)
          .fill(0)
          .map((val, index) => (
            <div key={index}>{generate({ minLength: 10, maxLength: 30 })}</div>
          ))}
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ marginBottom: "24px" }}
      >
        Scroll To Top
      </button>
    </div>
  );
}
