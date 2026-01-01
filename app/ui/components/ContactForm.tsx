import React, { useState } from "react";
import styles from "@/app/ui/form.module.css";

const ContactForm: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseMessage("");

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
        setResponseMessage("Message sent, thank you!");
      } else {
        response.json().then((error) => {
          setResponseMessage(`Something went wrong: ${error["Errors"]}`);
        });
      }
    });

    setResponseMessage("Sending Message");
    form.reset();
  };

  return (
    <div className={styles.formDiv}>
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

        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
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
