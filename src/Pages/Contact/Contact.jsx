import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="py-16 bg-[#0f0c1a]">
            <h2 className="text-4xl font-bold text-purple-400 text-center mb-12">
                Contact Me
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
                {/* Contact Info */}
                <div className="bg-[#1f1530] rounded-xl shadow-lg p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                        Get in Touch
                    </h3>
                    <p className="text-gray-300 mb-6">
                        If you have any questions, project ideas, or just want to say hello,
                        feel free to reach out.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-purple-300 text-xl" aria-label="Email" />
                            <span>zakariyahussain1989@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-green-400 text-xl" aria-label="WhatsApp" />
                            <span>+880 1712337609</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-purple-300 text-xl" aria-label="Location" />
                            <span>Gazipur, Bangladesh</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[#1f1530] rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                        Send a Message
                    </h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-[#2a1f40] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-[#2a1f40] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-[#2a1f40] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
