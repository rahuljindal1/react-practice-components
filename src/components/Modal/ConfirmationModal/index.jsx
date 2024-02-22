import Modal from "../Modal";
import classes from "./styles.module.css";

export default function ConfirmationModal({
  title,
  content,
  closeModal,
  onConfirm,
}) {
  const Footer = (
    <div className={classes.btnGroup}>
      <button onClick={onConfirm} className={classes.confirmBtn}>
        Confirm
      </button>
      <button onClick={closeModal} className={classes.cancelBtn}>
        Cancel
      </button>
    </div>
  );

  return (
    <Modal
      width={500}
      height={360}
      header={title}
      main={content}
      footer={Footer}
      closeModal={closeModal}
    />
  );
}
