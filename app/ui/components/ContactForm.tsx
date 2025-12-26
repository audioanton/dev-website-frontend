import React, { useState } from "react";
import styles from "@/app/ui/form.module.css";
import { error } from "console";

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

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedFormValues),
      });

      if (!response.ok) {
        const res = await response.json();
        if (res["errors"]) {
          const errors = res["errors"].join(", ");
          setResponseMessage(errors);
        }
        throw new Error("HTTP error");
      }

      setResponseMessage("Thanks for contacting me!");
      form.reset();
    } catch (err) {
      console.log(err);
    }
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
