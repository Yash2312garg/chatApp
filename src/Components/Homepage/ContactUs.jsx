import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset status message
        setStatus('');

        // Validate form inputs
        if (!name || !email || !message) {
            setStatus('Please fill out all fields.');
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL;

            const response = await axios.post(`${apiUrl}/contactus`, {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                setStatus('Message sent successfully!');
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Something went wrong. Please try again later.');
        }
    };

    return (
        <section className="mt-20 py-10 rounded-lg">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Get in Touch</h3>
            <form className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg transition-all duration-300 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Your Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg transition-all duration-300 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg transition-all duration-300 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        rows="4"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#333] text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-out transform hover:scale-105"
                >
                    Send Message
                </button>
                {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
            </form>
        </section>
    );
};

export default ContactForm;
