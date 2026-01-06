import styles from "@/app/ui/form.module.css";
import messageStyles from "@/app/ui/message.module.css";

interface ContactFormProps {
  closeModal?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ closeModal }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    const parsedFormValues = JSON.parse(JSON.stringify(formValues));
    parsedFormValues["subscribed"] =
      formValues.subscribed === "on" ? true : false;

    const message = (message: string, status: "success" | "error" | "info") => {
      const messageDiv = document.getElementById("messageContainer");

      if (!messageDiv) return;

      messageDiv.classList.remove(
        messageStyles["success"],
        messageStyles["info"],
        messageStyles["error"],
      );
      messageDiv.classList.add(messageStyles[status]);
      messageDiv.textContent = message;

      setTimeout(() => {
        messageDiv.classList.remove(messageStyles[status]);
        messageDiv.textContent = "";
      }, 3000);
    };

    fetch("/api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedFormValues),
    }).then((response) => {
      if (response.ok) {
        message("Message sent, thank you!", "success");
      } else {
        response
          .json()
          .then((error) => {
            message(`Something went wrong: ${error["Errors"]}`, "error");
          })
          .catch((error: SyntaxError) => {
            message("Something went wrong!", "error");
          });
      }
    });

    message("Sending Message", "info");
    form.reset();

    if (closeModal) {
      closeModal();
    }
  };

  return (
    <>
      <h3 className={styles.title}>Contact Me</h3>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <TextInput fieldName="Name" />
        <TextInput fieldName="Email" />
        <TextInput fieldName="Message" />

        <div>
          <label htmlFor="subscribed">Subscribe</label>
          <input type="checkbox" name="subscribed" defaultChecked></input>
        </div>

        <button
          className={`${styles.formInput} ${styles.formButton}`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

function TextInput({ fieldName }: { fieldName: string }) {
  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        className={styles.formInput}
        type="text"
        name={fieldName.toLowerCase()}
        required
      />
    </>
  );
}

export default ContactForm;
