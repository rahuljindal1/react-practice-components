import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import { search } from "./db";
import { useLocation } from "react-router-dom";
import { debounce } from "../../utilities/debounce";
import { useRef } from "react";

export default function AutoComplete() {
  const location = useLocation();

  const [keyword, setKeyword] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const debouncedSearchHandlerRef = useRef();

  const queryParams = new URLSearchParams(location.search);
  const searchType = queryParams.get("searchType") || "debounced";

  const onChangeHandler = (e) => {
    const value = e.target.value.trim();
    setKeyword(value);
  };

  const searchHandler = (keyword) => {
    const items = search(keyword);
    setFilteredItems(items);
  };

  useEffect(() => {
    if (keyword) {
      if (searchType === "debounced") {
        debouncedSearchHandlerRef.current(keyword);
      }
    } else {
      setFilteredItems([]);
    }
  }, [keyword]);

  useEffect(() => {
    debouncedSearchHandlerRef.current = debounce(searchHandler, 1000);
  }, []);

  if (searchType !== "debounced" && searchType !== "throttle") {
    return (
      <div
        className={classes.container}
        style={{ color: "red", fontWeight: "bold" }}
      >
        Search type can only be any of [debounced, throttle]
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <input type="text" value={keyword} onChange={onChangeHandler} />
      <div className={classes.itemList}>
        {filteredItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
