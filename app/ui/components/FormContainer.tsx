import { useState } from "react";
import styles from "@/app/ui/message.module.css";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

interface Props {
  useModal: boolean;
}

const FormContainer: React.FC<Props> = ({ useModal }) => {
  const [[message, status], setMessage] = useState<[string, string]>(["", ""]);

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
      {useModal ? <Modal content={form} buttonLabel="Contact Me" /> : form}
      <div className={styles[status]}>{message}</div>
    </>
  );
};

export default FormContainer;
