import React, { useState } from "react"
import "../app/form.css"

interface FormValues {
    name: string
    email: string
    message: string
    subscribed: string
}


const ContactForm: React.FC = () => {
    const [responseMessage, setResponseMessage] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formValues = Object.fromEntries(new FormData(form).entries())

        
        const parsed = JSON.parse(JSON.stringify(formValues))
        parsed['subscribed'] = formValues.subscribed === "on" ? true : false

        // for testing - remove in production
        var sandboxed = JSON.parse(JSON.stringify(parsed))
        sandboxed['sandboxed'] = true

        console.log(sandboxed)

        try {
            await fetch("/api/contact-form", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(sandboxed)
            })
            .then(
                (response) => {
                    // read about promises
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
        <div className="form-div">
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" required />

                <label htmlFor="message">Message</label>
                <input type="text" name="message" required />

                <div>
                    <label htmlFor="subscribed">Subscribe</label>
                    <input type="checkbox" name="subscribed" defaultChecked></input>
                </div>

                <button type="submit">Submit</button>

                {responseMessage && <p>{responseMessage}</p>}


            </form>
        </div>
    );
};

export default ContactForm;