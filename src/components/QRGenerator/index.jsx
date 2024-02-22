import { useState } from "react";
import QRCode from "react-qr-code";
import useTheme from "../../hooks/useTheme";
import classes from "./styles.module.css";

export default function QRGenerator() {
  const { theme } = useTheme();
  const [qrValue, setQrValue] = useState("");
  const [generateQRCode, setGenerateQRCode] = useState("");
  const [showError, setShowError] = useState("");

  const handleClick = () => {
    const value = qrValue.trim();
    if (!value) {
      setShowError(true);
    }
    setGenerateQRCode(qrValue);
  };

  return (
    <div
      className={`${classes.container} ${
        theme === "dark" ? classes.darkTheme : ""
      }`}
    >
      <header className={classes.title}>QR Code Generator</header>
      <main className={classes.qrForm}>
        <input
          className={classes.qrValue}
          onChange={(e) => {
            setShowError(false);
            setQrValue(e.target.value.trim());
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          required
        />
        <button className={classes.qrGeneratorBtn} onClick={handleClick}>
          Generate
        </button>
      </main>
      {showError && <div>QR code value can not be empty</div>}
      {generateQRCode && (
        <div className={classes.output}>
          <QRCode value={generateQRCode} />
        </div>
      )}
    </div>
  );
}
