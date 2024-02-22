import { useState } from "react";
import classes from "./styles.module.css";

export default function TreeItem({
  parent,
  ExpandIcon,
  CollapseIcon,
  nestingLevel = 1,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const showIcon = parent.children?.length > 0;

  return (
    <div className={classes.container}>
      <div className={classes.parentGroup}>
        <div onClick={parent.onClick}>{parent.title}</div>
        {!isExpanded && showIcon && (
          <div onClick={() => setIsExpanded((prevState) => !prevState)}>
            {ExpandIcon}
          </div>
        )}
        {isExpanded && showIcon && (
          <div onClick={() => setIsExpanded((prevState) => !prevState)}>
            {CollapseIcon}
          </div>
        )}
      </div>
      <div>
        {isExpanded &&
          parent.children?.length > 0 &&
          parent.children.map((children, index) => (
            <div style={{ paddingLeft: `${24 * nestingLevel}px` }}>
              <TreeItem
                key={`${nestingLevel}.${index}`}
                parent={children.parent}
                ExpandIcon={ExpandIcon}
                CollapseIcon={CollapseIcon}
                nestingLevel={nestingLevel + 1}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
