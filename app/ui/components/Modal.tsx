import React, { useRef, useEffect } from "react";
import styles from "@/app/ui/modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCancel = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onClose();
  };

  const handleLightDismiss = (event: React.MouseEvent<HTMLDialogElement>) => {
    const rect = modalRef?.current?.getBoundingClientRect();

    if (!rect) return;

    const isInDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!isInDialog) {
      onClose();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <>
      <dialog
        className={styles.modal}
        ref={modalRef}
        onCancel={handleCancel}
        onClick={handleLightDismiss}
      >
        <button
          className={`${styles.modalCloseBtn} ${styles.modalButton}`}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {content}
      </dialog>
    </>
  );
};

export default Modal;
