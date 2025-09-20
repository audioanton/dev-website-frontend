import React, { useState } from "react";
import "../app/form.css";

const ContactForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
		const formValues = Object.fromEntries(new FormData(form).entries())
        var sandboxed = JSON.parse(JSON.stringify(formValues))
        sandboxed['sandboxed'] = true

        try {
            await fetch("/api/mail", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                // body: JSON.stringify(formValues)
                body: JSON.stringify(sandboxed)
            }).then(
                (response) => {
                    if (!response.ok)
                        throw new Error(`HTTP Error. Status: ${response.status}`)
                    console.log(response)
                    return response
                })

            setSuccessMessage('Thanks for contacting me!')
            form.reset()
        } catch (err) {
            console.log(err)
            alert('an error ocurred')
        }
    }

    return (
        <div className="form-div">
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" required />

                <label htmlFor="message">Message</label>
                <input type="text" name="message" required />

                <button type="submit">Submit</button>

                {successMessage && <p>{successMessage}</p>}


            </form>
        </div>
    );
};

export default ContactForm;