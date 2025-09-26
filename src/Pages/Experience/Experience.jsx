import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
    {
        role: "MERN Stack Developer",
        company: "Freelance",
        duration: "Jan 2025 - Continue",
        description:
                "Developed MERN stack applications using React.js, Express.js, Node.js, and MongoDB. Built a multi-vendor medicine store with secure payment integration and sales reporting. Designed a car rental booking system with real-time availability and online payments.",
            
    },
    {
        role: "WordPress Developer",
        company: "Freelance",
        duration: "Jan 2022 - Mar 2025",
        description:
            "Customized WordPress themes and developed client websites with Elementor Pro.",
    },
    {
        role: "Engineer (Maintenance)",
        company: "Arfan CNG Re-Fueling Station Ltd.",
        duration: "Jan 2020 - Present",
        description:
            "Maintained and troubleshot gas generators, diesel generators, compressors, motor controls, PLCs, and electrical wiring.",
    },
    {
        role: "Assistant Manager (Sales & Marketing)",
        company: "Power Distribution Engineering Ltd. (PDEL)",
        duration: "Mar 2019 - Dec 2019",
        description:
            "Managed sales of electrical panels (DB, SDB, MDB), cable trays, Busbar Trunking Systems (BBT), substations, spare components, and various circuit breakers (MCB, MCCB, ACB).",
    },
    {
        role: "Senior Engineer (Sales & Marketing)",
        company: "PowerMac Engineering",
        duration: "Dec 2015 - Feb 2019",
        description:
            "Authorized distributor of HITACHI electrical products including circuit breakers, magnetic contactors, and overload relays. Also supplied Busbar Trunking Systems (BBT).",
    },
];

const Experience = () => {
    return (
        <section className="bg-[#0f0c1a] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white">
                <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">
                    My Experience
                </h2>

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1530] border-l-4 border-purple-500 rounded-r-xl p-6 shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-white">
                                {exp.role}
                            </h3>
                            <h4 className="text-purple-300 font-medium mb-3">
                                {exp.company}
                            </h4>

                            <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm">
                                <FaCalendarAlt aria-label="Duration" />
                                <span>{exp.duration}</span>
                            </div>

                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
