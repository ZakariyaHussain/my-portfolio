import React from 'react';
import image from '../../assets/hero/me.png';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className="bg-[#0f0715] min-h-screen flex items-center pt-20 pb-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mx-auto max-w-7xl w-full px-6">

                {/* Profile Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={image}
                        alt="Zakariya Hussain"
                        className="w-64 h-64 rounded-full border-4 border-[#6c5ce7] shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <p className="text-[#a29bfe] font-semibold uppercase tracking-wider">
                        Hello, I'm
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Zakariya Hussain
                    </h1>
                    <p className="mt-3 text-lg text-gray-300">
                        Frontend Developer & <span className="text-[#6c5ce7] font-medium">WordPress Expert</span>
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                        <a
                            href="https://www.linkedin.com/in/zakariya-hussain/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-[#6c5ce7] hover:bg-[#a29bfe] text-white flex items-center gap-2 border-none"
                        >
                            <FaLinkedin size={20} />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/ZakariyaHussain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-white hover:bg-gray-200 text-[#0f0715] flex items-center gap-2 border-none"
                        >
                            <FaGithub size={20} />
                            GitHub
                        </a>

                        <a
                            href="https://drive.google.com/uc?export=download&id=1Lu1agsbyBzV1PhsHnxs6gKphIeTxyk77"
                            download
                            className="btn bg-[#6c5ce7] hover:bg-[#a29bfe] text-white flex items-center gap-2 border-none"
                        >
                            <FaDownload size={20} />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
