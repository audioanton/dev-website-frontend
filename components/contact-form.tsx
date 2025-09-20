import React, { useState } from "react";

const ContactForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
		const formValues = Object.fromEntries(new FormData(form).entries())

        try {
            await fetch(process.env.NEXT_PUBLIC_BACKEND_URL || "localhost:8080/mail", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                //mode: "no-cors",
                body: JSON.stringify(formValues)
            }).then(
                (response) => {
                    if (!response.ok)
                        throw new Error(`HTTP Error. Status: ${response.status}`)
                    console.log(response.json())
                    return response.json()
                })

            setSuccessMessage('Thanks for contacting me!')
            form.reset()
        } catch (err) {
            console.log(err)
            alert('an error ocurred')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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