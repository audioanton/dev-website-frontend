import styles from "@/app/ui/form.module.css";

interface ContactFormProps {
  message: (message: string, status: "success" | "error" | "info") => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ message }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    const parsedFormValues = JSON.parse(JSON.stringify(formValues));
    parsedFormValues["subscribed"] =
      formValues.subscribed === "on" ? true : false;

    fetch("/api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedFormValues),
    }).then((response) => {
      if (response.ok) {
        message("Message sent, thank you!", "success");
      } else {
        response.json().then((error) => {
          message(`Something went wrong: ${error["Errors"]}`, "error");
        });
      }
    });

    message("Sending Message", "info");
    form.reset();
  };

  return (
    <>
      <div id="formDiv" className={styles.formDiv}>
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
      </div>
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
