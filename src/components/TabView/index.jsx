import { useState } from "react";
import classes from "./styles.module.css";

export default function TabView({ config }) {
  const [currentTab, setCurrentTab] = useState(0);

  if (!config || !config.length) {
    return <></>;
  }

  const currentTabConfig = config.find(
    (tabConfig, index) => index === currentTab
  );

  return (
    <div className={classes.container}>
      <div className={classes.tabContainer}>
        {config.map((tabConfig, index) => (
          <div
            className={`${classes.tab} ${
              currentTab === index ? classes.active : ""
            }`}
            key={index}
            onClick={() => {
              setCurrentTab(index);
            }}
          >
            {tabConfig.label}
          </div>
        ))}
      </div>
      {!Boolean(currentTabConfig.content) && (
        <div style={{ color: "red" }}>No content Found</div>
      )}
      {Boolean(currentTabConfig.content) && currentTabConfig.content}
    </div>
  );
}
