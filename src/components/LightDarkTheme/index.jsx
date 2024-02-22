import classes from "./styles.module.css";
import useTheme from "../../hooks/useTheme";

export default function LightDarkTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`${classes.container} ${
        theme === "dark" ? classes.darkTheme : ""
      }`}
    >
      <div className={classes.content}>Hello World</div>
      <button
        className={classes.changeThemeBtn}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Change Theme
      </button>
    </div>
  );
}
