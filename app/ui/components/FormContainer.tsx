import { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import modalStyles from "../modal.module.css";

interface Props {
  useModal?: boolean;
  buttonLabel?: string;
}

const FormContainer: React.FC<Props> = ({
  useModal = true,
  buttonLabel = "Contact Me",
}) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {useModal ? (
        <>
          <button className={modalStyles.modalButton} onClick={openModal}>
            {buttonLabel}
          </button>
          <Modal
            isOpen={open}
            onClose={closeModal}
            content={<ContactForm closeModal={closeModal} />}
          />
        </>
      ) : (
        <ContactForm />
      )}
    </>
  );
};

export default FormContainer;
