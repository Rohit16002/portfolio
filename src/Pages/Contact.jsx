import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted successfully:', formData);
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <section id="contact" className="py-6 px-4 md:px-16 bg-gray-900 min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg mt-16">
                <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-4 border rounded-md focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                            placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-4 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-4 border rounded-md focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                            placeholder="Your Message"
                            rows="6"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-transform transform hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
