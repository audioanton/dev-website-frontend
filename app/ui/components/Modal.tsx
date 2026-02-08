import React, { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode | React.ElementType;
  buttonstyles?: string;
  dialogstyles?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  content,
  buttonstyles,
  dialogstyles,
}) => {
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
        className={`${dialogstyles} absolute w-[80vw] m-auto`}
        data-modal-backdrop
        ref={modalRef}
        onCancel={handleCancel}
        onClick={handleLightDismiss}
      >
        <button
          className={`${buttonstyles} text-[40px] absolute w-[60px] h-[60px] top-[0.25em] right-[0.25em] cursor-pointer`}
          onClick={handleCancel}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="min-h-[100px]">{content}</div>
      </dialog>
    </>
  );
};

export default Modal;
