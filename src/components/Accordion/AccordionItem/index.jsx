import classes from "./styles.module.css";

export default function AccordionItem({ item, selected, selectionHandler }) {
  const show = selected.includes(item.id);
  return (
    <div
      onClick={() => selectionHandler(item.id)}
      className={classes.container}
    >
      <div className={classes.titleContainer}>
        <div className={classes.title}>{item.title}</div>
        <div className={classes.titleIcon}>{show ? "-" : "+"}</div>
      </div>
      {show && <div className={classes.description}>{item.description}</div>}
    </div>
  );
}
