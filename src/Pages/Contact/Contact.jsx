import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_ifn07lg",
        "template_j7yjn2u",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "M2sbqYvafkQvC3Qvs",
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section id="contact" className="py-16 bg-[#0f0c1a]">
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
              <FaEnvelope className="text-purple-300 text-xl" />
              <span>zakariyahussain1989@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-400 text-xl" />
              <span>+880 1712337609</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-300 text-xl" />
              <span>Natore, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1f1530] rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-purple-300">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-2 rounded-lg bg-[#2a1f40] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-2 rounded-lg bg-[#2a1f40] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full px-4 py-2 rounded-lg bg-[#2a1f40] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 rounded-lg font-semibold transition duration-300"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p
                className={`text-center text-sm ${
                  status.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
