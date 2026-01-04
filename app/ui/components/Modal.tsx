import React, { useState } from "react";
import styles from "@/app/ui/modal.module.css";

interface ModalProps {
  content: React.ReactNode;
  buttonLabel: string;
}

const Modal: React.FC<ModalProps> = ({ content, buttonLabel }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <button onClick={openModal}>{buttonLabel}</button>
      <dialog className={styles.modal} open={open} onKeyDown={handleKeyDown}>
        <button
          className={`${styles.modalCloseBtn} ${styles.modalButton}`}
          onClick={closeModal}
        >
          &times;
        </button>
        {content}
      </dialog>
    </>
  );
};

export default Modal;
