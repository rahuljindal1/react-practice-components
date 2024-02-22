import { useState } from "react";
import classes from "./styles.module.css";
import ColorTypeSelector from "./ColorTypeSelector";

const generateRandomValue = (maxValue) => Math.floor(Math.random() * maxValue);

const generateRandomHexColor = () => {
  const allowedCodeValues = "0123456789ABCDEF";
  return `#${Array.from(
    { length: 6 },
    () => allowedCodeValues[generateRandomValue(16)]
  ).join("")}`;
};

const generateRandomRgbColor = () =>
  `rgb(${generateRandomValue(256)}, ${generateRandomValue(
    256
  )}, ${generateRandomValue(256)})`;

const generateColorCode = (isHexColor) => {
  if (isHexColor) {
    return generateRandomHexColor();
  }
  return generateRandomRgbColor();
};

export default function ColorGenerator() {
  const [selectedColorType, setSelectedColorType] = useState(1);
  const [colorCode, setColorCode] = useState(generateRandomHexColor());

  const types = [
    {
      id: 1,
      title: "Create Hex Color",
      shotName: "Hex",
    },
    { id: 2, title: "Create RGB Color", shotName: "Rgb" },
  ];

  const colorTypeSelectHandler = (colorId) => {
    setSelectedColorType(colorId);
    setColorCode(generateColorCode(colorId === 1));
  };

  const selectedType = types.find((type) => type.id === selectedColorType);

  return (
    <div className={classes.container} style={{ background: colorCode }}>
      <div className="buttonWrapper">
        <ColorTypeSelector
          selectedColorType={selectedColorType}
          colorTypeSelectHandler={colorTypeSelectHandler}
          types={types}
        />
        <button
          onClick={() =>
            setColorCode(generateColorCode(selectedColorType === 1))
          }
          className={classes.generateButton}
        >
          Generate Random {selectedType.shotName} Color
        </button>
      </div>
      <div className={classes.colorCode}>{colorCode}</div>
    </div>
  );
}
