import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
    {
        role: "WordPress Developer (Contractual)",
        company: "Freedom IT Institutions",
        duration: "Jan 2024 - Present",
        description:
            "Customized WordPress themes and developed custom code using HTML, CSS, and JavaScript.",
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
        <section className="bg-[#0f0c1a] py-20 min-h-screen">
            <div className="max-w-6xl mx-auto px-6 text-white">
                <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">
                    My Experience
                </h2>

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1530] rounded-xl p-6 shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                            </div>

                            <p className="text-purple-300 font-medium mb-4">{exp.company}</p>

                            <div className="flex items-center gap-2 text-gray-400 mb-4">
                                <FaCalendarAlt aria-label="Duration" />
                                <span>{exp.duration}</span>
                            </div>

                            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
