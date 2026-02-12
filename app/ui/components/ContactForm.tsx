import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { useState } from "react";

interface ContactFormProps {
  subtitleFont: NextFont;
}

const ContactForm = ({ subtitleFont }: ContactFormProps) => {
  const [message, setMessage] = useState("");

  const outlineDark =
    "[text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000]";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    const parsedFormValues = JSON.parse(JSON.stringify(formValues));
    parsedFormValues["subscribed"] =
      formValues.subscribed === "on" ? true : false;

    const message = (message: string) => {
      setMessage(message);
    };

    fetch("/api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedFormValues),
    }).then((response) => {
      if (response.ok) {
        message("Message sent, thank you!");
      } else {
        response
          .json()
          .then((error) => {
            message(`Something went wrong: ${error["Errors"]}`);
          })
          .catch((error: SyntaxError) => {
            message("Something went wrong!");
          });
      }
    });

    message("Sending Message");
    form.reset();
  };

  function TextInput({ fieldName }: { fieldName: string }) {
    return (
      <div
        className={`relative w-full mb-2 bg-gray-600/95 border-2 border-black rounded-[1px] shadow-xl/50 inset-ring-2 inset-ring-gray-500/50 shadow-black p-3`}
      >
        <label
          className={`absolute top-[-10px] left-3 text-shadow-lg/60 uppercase text-neutral-400 text-sm font-bold ${outlineDark} ${subtitleFont}`}
          htmlFor={fieldName.toLowerCase()}
        >
          {fieldName}
        </label>
        <input
          className={`border-b-2 text-2xl border-black w-full h-10`}
          type="text"
          name={fieldName.toLowerCase()}
          required
        />
      </div>
    );
  }

  return (
    <div className="md:grid md:grid-cols-4 w-full gap-3">
      <div className="hidden md:block col-span-1">
        <Image
          className="mask-b-from-80% mask-r-from-90% mask-l-from-90%"
          src={"/anton_red.png"}
          alt="a picture of me in garbage bags"
          width={300}
          height={300}
        />
        <h2
          className={`text-2xl uppercase text-sky-400 [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000] ${subtitleFont} ${outlineDark}`}
        >
          Get in touch
        </h2>
      </div>
      <form onSubmit={handleSubmit} className={`md:col-span-3`}>
        <TextInput fieldName="name" />
        <TextInput fieldName="email" />
        <TextInput fieldName="message" />

        <div className="md:grid md:grid-cols-2 justify-between my-3 gap-3 h-10">
          <div className="flex gap-3 items-center justify-center relative w-full bg-gray-600/95 border-2 border-black rounded-[1px] shadow-xl/50 inset-ring-2 inset-ring-gray-500/50 shadow-black p-3">
            <label
              className={`text-shadow-lg/60 uppercase text-neutral-400 text-sm font-bold ${outlineDark} ${subtitleFont}`}
              htmlFor="subscribed"
            >
              Subscribe
            </label>
            <input type="checkbox" name="subscribed" defaultChecked></input>
          </div>

          <button
            className={`relative w-full bg-gray-600/95 border-2 border-black rounded-[1px] shadow-xl/50 inset-ring-2 inset-ring-gray-500/50 shadow-black p-3 text-shadow-lg/60 uppercase text-neutral-400 text-sm font-bold ${outlineDark} ${subtitleFont}`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
