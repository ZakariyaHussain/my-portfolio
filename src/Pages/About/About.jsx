// const About = () => {
//     return (
//         <div className="py-20 px-5 max-w-5xl mx-auto">
//             <h2 className="text-3xl font-bold text-center">About Me</h2>
//             <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
// 💻 Technical Expertise:
// Professional Frontend Web Developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and WordPress development. Experienced in building custom-coded projects and managing WordPress CMS solutions.

// 🎯 Career Achievements:
// Delivered 300+ WordPress projects and 50+ custom-coded websites with a focus on responsive and user-friendly design. Successfully blended engineering knowledge with web development skills to deliver scalable and maintainable solutions.

// 🌟 Passion & Goals:
// Passionate about creating seamless, modern web experiences that empower businesses and users. Dedicated to continuous learning and growth in frontend technologies and WordPress ecosystems. Aiming to contribute to innovative web projects that make a difference.
//             </p>
//         </div>
//     );
// };

// export default About;


import { FaCode, FaLaptopCode, FaReact, FaWordpress } from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-[#0f0715] to-[#1a0f29] py-20"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-[#6c5ce7] text-center mb-16">
                    About Me
                </h2>

                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* About Text */}
                    <p className="text-gray-300 leading-relaxed text-lg lg:w-1/2">
                        💻 <span className="font-semibold">Technical Expertise:</span> Professional Frontend Web Developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and WordPress development. Experienced in building custom-coded projects and managing WordPress CMS solutions.
                        <br />
                        <br />
                        🎯 <span className="font-semibold">Career Achievements:</span> Delivered{" "}
                        <span className="text-[#6c5ce7] font-medium">
                            300+ WordPress projects
                        </span>{" "}
                        and{" "}
                        <span className="text-[#6c5ce7] font-medium">
                            50+ custom-coded websites
                        </span>{" "}
                        with a focus on responsive and user-friendly design. Successfully blended engineering knowledge with web development skills to deliver scalable and maintainable solutions.
                        <br />
                        <br />
                        🌟 <span className="font-semibold">Passion & Goals:</span> Passionate about creating seamless, modern web experiences that empower businesses and users. Dedicated to continuous learning and growth in frontend technologies and WordPress ecosystems. Aiming to contribute to innovative web projects that make a difference.
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
                        {[
                            {
                                icon: <FaCode size={40} className="text-[#6c5ce7] mx-auto mb-4" />,
                                title: "Clean Coding",
                                desc: "Writing maintainable and scalable code with best practices.",
                            },
                            {
                                icon: <FaReact size={40} className="text-[#61dafb] mx-auto mb-4" />,
                                title: "React Development",
                                desc: "Building dynamic and interactive web with React.",
                            },
                            {
                                icon: <FaWordpress size={40} className="text-[#21759b] mx-auto mb-4" />,
                                title: "WordPress Solutions",
                                desc: "Custom themes, plugins, and CMS solutions.",
                            },
                            {
                                icon: (
                                    <FaLaptopCode size={40} className="text-[#ff9f43] mx-auto mb-4" />
                                ),
                                title: "Responsive Design",
                                desc: "Ensuring a seamless experience across all devices.",
                            },
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="bg-[#1f1530] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transform transition-transform duration-300 ease-out cursor-pointer"
                            >
                                {skill.icon}
                                <h3 className="text-lg font-bold text-white">{skill.title}</h3>
                                <p className="text-gray-400 mt-2">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;
