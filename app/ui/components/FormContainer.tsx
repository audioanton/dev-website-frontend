import { useState } from "react";
import styles from "@/app/ui/message.module.css";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

interface Props {
  useModal: boolean;
  buttonLabel?: string;
}

const FormContainer: React.FC<Props> = ({
  useModal,
  buttonLabel = "Contact Me",
}) => {
  const [[message, status], setMessage] = useState<[string, string]>(["", ""]);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const fadeOut = () => {
    setTimeout(() => {
      setMessage(["", ""]);
    }, 3000);
  };

  const renderMessage = (
    message: string,
    status: "success" | "error" | "info",
  ) => {
    setMessage([message, status]);
    fadeOut();
  };

  const form = <ContactForm message={renderMessage} />;

  return (
    <>
      {useModal ? (
        <>
          <button className={styles.modalButton} onClick={openModal}>
            {buttonLabel}
          </button>
          <Modal isOpen={open} onClose={closeModal} content={form} />
        </>
      ) : (
        form
      )}
      <div className={styles[status]}>{message}</div>
    </>
  );
};

export default FormContainer;
