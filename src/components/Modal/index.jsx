import { useState } from "react";
import classes from "./styles.module.css";
import ConfirmationModal from "./ConfirmationModal";

export default function ModalContainer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={classes.container}>
      <button onClick={() => setShowModal(true)} className={classes.modalBtn}>
        Show Modal
      </button>
      {showModal && (
        <ConfirmationModal
          title="Confirmation Modal"
          content="This actions can not be undone. Are you sure you want to continue with this action?"
          closeModal={() => setShowModal()}
          onConfirm={() => {
            console.log("Confirmed!!!");
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
