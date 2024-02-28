import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
import classes from "./styles.module.css";
import useOuterClick from "../../hooks/useOuterClick";
import { useRef, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

export default function HooksTest() {
  const containerRef = useRef();
  const [showCollapsibleText, setShowCollapsibleText] = useState();
  const { isLoading, response, error } = useFetch(URL);
  useOuterClick(containerRef, () => {
    setShowCollapsibleText((prevState) => !prevState);
  });

  if (error) {
    toast.error(error.message);
  }

  return (
    <div className={classes.container}>
      <div className={classes.useFetchHookWrapper} ref={containerRef}>
        <h2>useFetch Hook</h2>
        {isLoading && "Loading....."}
        {!isLoading && (
          <pre
            style={{
              width: "500px",
              overflow: showCollapsibleText ? undefined : "hidden",
            }}
          >
            {JSON.stringify(response, null, 4)}
          </pre>
        )}
      </div>
    </div>
  );
}
