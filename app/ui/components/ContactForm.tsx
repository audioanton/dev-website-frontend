import React, { useState } from "react"
import styles from "@/app/ui/form.module.css"


const ContactForm: React.FC = () => {
    const [responseMessage, setResponseMessage] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formValues = Object.fromEntries(new FormData(form).entries())

        const parsedFormValues = JSON.parse(JSON.stringify(formValues))
        parsedFormValues['subscribed'] = formValues.subscribed === "on" ? true : false

        try {
            await fetch("/api/contact-form", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(parsedFormValues)
            })
            .then(
                (response) => {
                    const data = response.text()
                    if (!response.ok) {
                        throw new Error(`HTTP Error. Status: ${response.status}`)
                    }
                    console.log(data)
                })

            setResponseMessage('Thanks for contacting me!')
            form.reset()
    
        } catch (err) {
            console.log(err)
            setResponseMessage("An error ocurred")
        }
    }

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

                <button className={styles.formInput} type="submit">Submit</button>

                {responseMessage && <p>{responseMessage}</p>}

            </form>
        </div>
    );
};

function TextInput({fieldName}: {fieldName: string}) {
    return (
        <>
            <label htmlFor={fieldName}>{fieldName}</label>
            <input className={styles.formInput} type="text" name={fieldName.toLowerCase()} required />
        </>
    )
}

export default ContactForm;