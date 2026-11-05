import React from "react";
import {
    FaWordpress,
    FaShoppingCart,
    FaGraduationCap,
    FaStore,
    FaWpforms,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaCode,
    FaGitAlt,
    FaGithub,
    FaTable,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiDaisyui, SiElementor } from "react-icons/si";

const skillsSet = [
  {
    category: "WordPress & CMS",
    skills: [
      { icon: <FaWordpress size={40} className="text-[#21759B]" />, name: "WordPress" },
      { icon: <SiElementor size={40} className="text-[#d72b5c]" />, name: "Elementor" },
      { icon: <SiElementor size={40} className="text-[#f59e0b]" />, name: "Elementor Pro" },
      { icon: <FaShoppingCart size={40} className="text-[#96588A]" />, name: "WooCommerce" },
      { icon: <FaGraduationCap size={40} className="text-[#10b981]" />, name: "MasterStudy LMS" },
      { icon: <FaStore size={40} className="text-[#ff5722]" />, name: "WoodMart" },
      { icon: <FaWpforms size={40} className="text-[#e11d48]" />, name: "Fluent Forms" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { icon: <FaHtml5 size={40} className="text-[#E34F26]" />, name: "HTML5" },
      { icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, name: "CSS3" },
      { icon: <FaJsSquare size={40} className="text-[#F7DF1E]" />, name: "JavaScript (ES6+)" },
      { icon: <FaReact size={40} className="text-[#61DAFB]" />, name: "React.js" },
      { icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />, name: "Tailwind CSS" },
      { icon: <SiDaisyui size={40} className="text-[#1AD1A5]" />, name: "DaisyUI" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { icon: <FaNodeJs size={40} className="text-[#5FA04E]" />, name: "Node.js" },
      { icon: <SiExpress size={40} className="text-gray-300" />, name: "Express.js" },
      { icon: <SiMongodb size={40} className="text-[#47A248]" />, name: "MongoDB" },
      { icon: <SiFirebase size={40} className="text-[#FFCA28]" />, name: "Firebase" },
      { icon: <FaCode size={40} className="text-[#009688]" />, name: "REST API" },
    ],
  },
  {
    category: "Tools & Integrations",
    skills: [
      { icon: <FaGitAlt size={40} className="text-[#F05032]" />, name: "Git" },
      { icon: <FaGithub size={40} className="text-white" />, name: "GitHub" },
      { icon: <FaTable size={40} className="text-[#34A853]" />, name: "Google Sheets Integration" },
    ],
  },
];

const Skills = () => {
    return (
        <section className="py-16 bg-[#0f0c1a]">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12">
                My Skills
            </h2>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {
                    skillsSet.map((cat, i) => (
                        <div key={i}>
                            <h3 className="text-xl font-semibold text-purple-300 mb-6 border-b border-purple-900 pb-2">
                                {cat.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 mb-8">
                                {cat.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-[#1f1530] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="mb-3 sm:mb-4">{skill.icon}</div>
                                        <p className="text-white font-semibold text-sm sm:text-base">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default Skills;
