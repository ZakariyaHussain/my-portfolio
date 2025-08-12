import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0f0c1a] text-gray-400 pb-8 pt-16">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left - Brand */}
                <div className="text-center md:text-left">
                    <img
                        src="logo.png"
                        alt="Logo"
                        className="w-36 h-16 object-contain"
                    />
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Middle - Social Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/ZakariyaHussain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition duration-300"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/zakariya-hussain/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://wa.me/8801712337609"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition duration-300"
                    >
                        <FaWhatsapp size={20} />
                    </a>
                </div>

                {/* Right - Quick Links */}
                <div className="text-sm space-x-4 text-center md:text-right">
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
