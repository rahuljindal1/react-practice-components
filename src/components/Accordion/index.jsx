import { useState } from "react";
import classes from "./styles.module.css";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [isSingleSelectionEnabled, setIsSingleSelectionEnabled] =
    useState(true);
  const [selected, setSelected] = useState([]);
  const list = [
    {
      id: 1,
      title: "This is the title of my first accordion type type item.",
      description: "This is the description of title 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "This is the description of title 2",
    },
    {
      id: 3,
      title: "Title 3",
      description: "This is the description of title 3",
    },
    {
      id: 4,
      title: "Title 4",
      description: "This is the description of title 4",
    },
  ];

  const selectionHandler = (id) => {
    if (isSingleSelectionEnabled) {
      return setSelected([id]);
    }

    if (selected.includes(id)) {
      setSelected(selected.filter((itemId) => itemId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className={classes.container}>
      <button
        onClick={() => setIsSingleSelectionEnabled((prevState) => !prevState)}
        className={classes.typeSelector}
      >
        {isSingleSelectionEnabled
          ? "Enable Multi Selection"
          : "Enable Single Selection"}
      </button>
      <div className={classes.listContainer}>
        {list.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            selected={selected}
            selectionHandler={selectionHandler}
          />
        ))}
      </div>
    </div>
  );
}
