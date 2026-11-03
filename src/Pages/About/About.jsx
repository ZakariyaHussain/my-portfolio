import { FaCode, FaReact, FaShoppingCart, FaWordpress } from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-[#0f0715] to-[#1a0f29] py-20"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#6c5ce7] text-center mb-16">
                    About Me
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start lg:items-center">
                    {/* About Text */}
                    <p className="text-gray-300 leading-relaxed text-lg w-full lg:w-1/2 space-y-6">
                        {/* Technical Expertise */}
                        <span className="flex items-start gap-3">
                            <span>
                                <span className="font-semibold">Professional Background:</span> I am a Web Developer with hands-on experience in WordPress development and frontend technologies. Currently, I work at the Academy of Business Professionals (ABP), where I develop, manage, and maintain WordPress-based websites.
                            </span>
                        </span>

                        {/* Career Achievements */}
                        <span className="flex items-start gap-3">
                            <span>
                                <span className="font-semibold">WordPress Experience:</span> My work includes customizing existing WordPress websites, creating and updating pages with Elementor Pro, managing online courses using MasterStudy LMS, and handling products and orders through WooCommerce. I also work with LMS configurations, Elementor templates, and form integrations.
                            </span>
                        </span>

                        {/* Passion & Goals */}
                        <span className="flex items-start gap-3">
                            <span>
                                <span className="font-semibold">Frontend Development & Learning:</span> Alongside WordPress, I have experience working with HTML, CSS, JavaScript, Tailwind CSS, and React. I have also developed personal projects using the MERN stack. With an academic background in Electrical and Electronic Engineering, I bring a problem-solving mindset to web development and continuously work on improving my technical skills.
                            </span>
                        </span>
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
                        {[
                            {
                                icon: <FaWordpress size={40} className="text-[#6c5ce7] mx-auto mb-4" />,
                                title: "WordPress & Elementor",
                                desc: "Customizing WordPress websites and creating responsive pages with Elementor Pro.",
                            },
                            {
                                icon: <FaShoppingCart size={40} className="text-[#61dafb] mx-auto mb-4" />,
                                title: "LMS & WooCommerce",
                                desc: "Managing online courses, quizzes, products, and orders.",
                            },
                            {
                                icon: <FaCode size={40} className="text-[#21759b] mx-auto mb-4" />,
                                title: "Frontend Development",
                                desc: "Working with HTML, CSS, JavaScript, and Tailwind CSS to build responsive interfaces.",
                            },
                            {
                                icon: <FaReact size={40} className="text-[#ff9f43] mx-auto mb-4" />,
                                title: "React Development",
                                desc: "Developing interactive user interfaces and personal projects using React.",
                            },
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="bg-[#1f1530] p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transform transition-transform duration-300 ease-out cursor-pointer"
                            >
                                {skill.icon}
                                <h3 className="text-lg font-bold text-white text-center">{skill.title}</h3>
                                <p className="text-gray-400 mt-2 text-center">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
