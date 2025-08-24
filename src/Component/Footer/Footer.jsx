import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0f0c1a] text-gray-400 py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left - Brand */}
                <div className="text-center md:text-left">
                    <img
                        src="logo.png"
                        alt="Logo"
                        className="w-36 h-16 object-contain mx-auto md:mx-0"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Middle - Social Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/ZakariyaHussain"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-purple-400 transition duration-300"
                    >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/zakariya-hussain/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href="https://wa.me/8801712337609"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="hover:text-green-400 transition duration-300"
                    >
                        <FaWhatsapp size={22} />
                    </a>
                </div>

                {/* Right - Quick Links */}
                <div className="text-sm flex space-x-6 text-center md:text-right">
                    <a href="#about" className="hover:text-purple-400 transition">
                        About
                    </a>
                    <a href="#projects" className="hover:text-purple-400 transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-purple-400 transition">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
