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

  function TextInput({
    fieldName,
    isTextarea,
    placeholder,
  }: {
    fieldName: string;
    isTextarea?: boolean;
    placeholder?: string;
  }) {
    const regular = () => (
      <input
        className={`border-b-2 text-2xl border-black w-full h-full focus:outline-none`}
        type="text"
        name={fieldName.toLowerCase()}
        placeholder={placeholder}
        required
      />
    );

    const area = () => (
      <textarea
        className={`border-b-2 text-2xl border-black w-full h-50 resize-none focus:outline-none`}
        name={fieldName.toLowerCase()}
        placeholder={placeholder}
        required
      ></textarea>
    );

    return (
      <div
        className={`relative w-full mb-2 bg-gray-600/90 border-2 border-black rounded-[1px] shadow-xl/50 inset-ring-2 inset-ring-gray-500/50 shadow-black p-3`}
      >
        <label
          className={`absolute top-[-10px] left-3 text-shadow-lg/60 uppercase text-neutral-400 text-sm font-bold ${outlineDark} ${subtitleFont}`}
          htmlFor={fieldName.toLowerCase()}
        >
          {fieldName}
        </label>
        {isTextarea ? area() : regular()}
      </div>
    );
  }

  return (
    <div className="md:grid md:grid-cols-4 w-full gap-3">
      <h2
        className={`text-center md:text-start relative md:left-1/4 col-span-4 mb-3 text-5xl md:text-6xl uppercase text-amber-500 [text-shadow:_1px_1px_1_#000,_-1px_-1px_1_#000,_1px_-1px_1_#000,_-1px_1px_1_#000] ${subtitleFont} ${outlineDark}`}
      >
        Get in touch
      </h2>
      <div className="col-span-1 hidden md:block">
        <Image
          className=" mask-b-from-80% mask-r-from-90% mask-l-from-90%"
          src={"/anton_red.png"}
          alt="a picture of me in garbage bags"
          width={300}
          height={300}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`md:col-span-3 w-8/10 md:w-full mx-auto`}
      >
        <TextInput fieldName="name" />
        <TextInput fieldName="email" />
        <TextInput
          fieldName="message"
          isTextarea={true}
          placeholder="Wow, you seem quite cool."
        />

        <div className="h-10">
          <button
            className={`hover:cursor-pointer shadow-black shadow-xl/50 transition-shadow duration-200 hover:border-sky-500/50 hover:shadow-sky-500/50 relative w-full md:w-1/2 bg-gray-600/95 border-2 border-black rounded-[1px]  inset-ring-2 inset-ring-gray-500/50  p-3 text-shadow-lg/60 uppercase text-neutral-400 text-sm font-bold ${outlineDark} ${subtitleFont}`}
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
