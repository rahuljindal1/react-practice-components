import { useEffect } from "react";
import classes from "./styles.module.css";
import { IoMdClose } from "react-icons/io";

export default function Modal({
  header,
  main,
  footer,
  closeModal,
  height,
  width,
}) {
  useEffect(() => {
    const handleCloseOnEsc = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keyup", handleCloseOnEsc);

    return () => {
      window.removeEventListener("keyup", handleCloseOnEsc);
    };
  });

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div
          className={classes.mainContainer}
          style={{
            width: width ? `${width}px` : "540px",
            height: width ? `${height}px` : "600px",
          }}
        >
          <header className={classes.headerWrapper}>
            <div className={classes.hederTitle}>{header}</div>
            <IoMdClose className={classes.closeIcon} onClick={closeModal} />
          </header>
          <main className={classes.mainWrapper}>{main}</main>
          <footer className={classes.footerWrapper}>{footer}</footer>
        </div>
      </div>
    </div>
  );
}
