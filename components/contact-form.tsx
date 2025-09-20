import React, { useState } from "react";

const ContactForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        
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