import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
//import image1 from "../../assets/projeect/screencapture-car-booking.png";
import image1 from "../../assets/projeect/car-booking.jpg";
//import image2 from "../../assets/projeect/screencapture-grocery-shop.png";
import image2 from "../../assets/projeect/grocery-shop.jpg";
import image3 from "../../assets/projeect/screencapture-dev-board.png";

const projects = [
    {
        name: "Car Rental Booking System",
        description:
            "A full-stack car rental booking platform built with React, Tailwind CSS, Firebase, Node.js, and MongoDB — featuring real-time availability, secure authentication, and responsive design.",
        tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase"],
        github: "https://github.com/ZakariyaHussain/car-booking-client-side",
        live: "https://car-booking-cc582.web.app/",
        image: image1,
    },
    {
        name: "Grocery Shop E-commerce",
        description:
            "A modern grocery shop e-commerce UI design built with HTML, Tailwind CSS, and DaisyUI. Fully responsive and visually appealing, focusing on clean layouts and smooth user experience (UI only, no backend functionality).",
        tech: ["HTML5", "CSS3", "TailwindCSS", "DaisyUI"],
        github: "https://github.com/ZakariyaHussain/grocery-shop",
        live: "https://zakariyahussain.github.io/grocery-shop/",
        image: image2,
    },
    {
        name: "Dev Board",
        description:
            "A fully functional Dev Board. Users can track tasks, mark them as complete, view remaining task count, and see a history of completed tasks with timestamps. Includes a 'Clear History' option to reset the history log.",
        tech: ["HTML5", "CSS3", "TailwindCSS", "DaisyUI", "JavaScript"],
        github: "https://github.com/ZakariyaHussain/dev_board",
        live: "https://zakariyahussain.github.io/dev_board/",
        image: image3,
    },
];

const Project = () => {
    return (
        <div id="projects" className="py-16 bg-[#0f0c1a]">
            <h2 className="text-4xl font-bold text-purple-400 text-center mb-12">
                My Projects
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#1f1530] rounded-xl shadow-lg hover:shadow-purple-500/30 overflow-hidden hover:-translate-y-1 hover:scale-105 transform transition-all duration-300 ease-out"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-6 flex flex-col justify-between h-[300px]">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-purple-400 flex items-center gap-2"
                                    >
                                        <FaGithub /> Code
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-purple-400 flex items-center gap-2"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
