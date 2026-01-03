import React, { useState } from "react";
import styles from "@/app/ui/modal.module.css";

interface ModalProps {
  content: React.ReactNode;
  buttonLabel: string;
}

const Modal: React.FC<ModalProps> = ({ content, buttonLabel }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={toggle}>{buttonLabel}</button>
      <dialog className={styles.modal} open={open}>
        {content}
      </dialog>
    </>
  );
};

export default Modal;
