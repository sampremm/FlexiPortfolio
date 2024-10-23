import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [error, setError] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        } else {
            setError({});
            setIsSending(true);
            emailjs.send(
                "service_ufp43wu",
                "template_id_here",  // Replace with your template ID
                formData,
                "axzyjhD3URCFm3dtC" // Replace with your user ID
            ).then(
                (result) => {
                    console.log("SUCCESS!", result.status, result.text);
                    toast.success("Message sent successfully");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    toast.error("Failed to send message");
                    setError({ message: "Failed to send message. Please try again." });
                }
            ).finally(() => {
                setIsSending(false);
            });
        }
    };

    return (
        <div className='mx-auto max-w-3xl p-4 text-white' id='contact'>
            <Toaster />
            <h2 className="my-8 text-center text-4xl text-white font-semibold tracking-tighter">
                Let&apos;s Connect
            </h2>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                onSubmit={handleSubmit}
            >
                <div className='mb-4'>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className='mb-8 w-full appearance-none rounded border text-white border-gray-900 bg-transparent py-3 px-2 text-sm text-white focus:border-gray-500 focus:outline-none'
                    />
                    {error.name && (
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className='text-red-500'
                        >
                            {error.name}
                        </motion.p>
                    )}
                </div>
                <div className='mb-4'>
                    <input
                        type="email"
                        id='email'
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='mb-8 w-full appearance-none rounded border text-white border-gray-900 bg-transparent py-3 px-2 text-sm text-white focus:border-gray-500 focus:outline-none'
                    />
                    {error.email && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className='text-red-500'
                        >
                            {error.email}
                        </motion.p>
                    )}
                </div>
                <div className='mb-4'>
                    <textarea
                        id='message'
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className='mb-8 w-full appearance-none rounded border text-white border-gray-900 bg-transparent py-3 px-2 text-sm text-gray-700 focus:border-gray-500 focus:outline-none'
                    />
                    {error.message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className='text-red-500'
                        >
                            {error.message}
                        </motion.p>
                    )}
                </div>
                <button
                    type='submit'
                    className={`mb-8 rounded bg-yellow-500 px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-600 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send"}
                </button>
            </motion.form>
        </div>
    );
};

export default ContactForm;
