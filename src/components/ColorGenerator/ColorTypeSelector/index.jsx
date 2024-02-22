import classes from "./styles.module.css";

export default function ColorTypeSelector({
  selectedColorType,
  colorTypeSelectHandler,
  types,
}) {
  return types.map((type) => (
    <button
      disabled={selectedColorType === type.id ? classes.active : ""}
      onClick={() => colorTypeSelectHandler(type.id)}
    >
      {type.title}
    </button>
  ));
}
