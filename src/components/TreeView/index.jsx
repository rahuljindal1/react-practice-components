import TreeItem from "./TreeItem";
import classes from "./styles.module.css";

export default function TreeView({ config }) {
  const { parent, ExpandIcon, CollapseIcon } = { ...config };

  return (
    <div className={classes.container}>
      <TreeItem
        parent={parent}
        ExpandIcon={ExpandIcon}
        CollapseIcon={CollapseIcon}
      />
    </div>
  );
}
