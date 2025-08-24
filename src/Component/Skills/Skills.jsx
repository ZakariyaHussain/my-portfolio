import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaWordpress,
    FaGitAlt,
    FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiDaisyui } from "react-icons/si";

const skills = [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJsSquare size={40} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact size={40} className="text-cyan-400" />, name: "React" },
    { icon: <FaWordpress size={40} className="text-blue-700" />, name: "WordPress" },
    { icon: <FaGitAlt size={40} className="text-red-500" />, name: "Git & GitHub" },
    { icon: <FaNodeJs size={40} className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress size={40} className="text-gray-400" />, name: "Express.js" },
    { icon: <SiMongodb size={40} className="text-green-600" />, name: "MongoDB" },
    { icon: <SiFirebase size={40} className="text-yellow-500" />, name: "Firebase" },
    { icon: <SiTailwindcss size={40} className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <SiDaisyui size={40} className="text-pink-400" />, name: "DaisyUI" },
];

const Skills = () => {
    return (
        <section className="py-16 bg-[#0f0c1a]">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12">
                My Skills
            </h2>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-6">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="bg-[#1f1530] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                        >
                            <div className="mb-3 sm:mb-4">{skill.icon}</div>
                            <p className="text-white font-semibold text-sm sm:text-base">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
