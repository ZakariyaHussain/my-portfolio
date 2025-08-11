
import React from "react";
import { FaCode, FaWordpress, FaUniversity, FaRegClock } from "react-icons/fa";

const courses = [
    {
        icon: <FaCode size={40} className="text-purple-500" />,
        courseName: "Complete Web Development",
        instituteName: "Programming Hero",
        duration: "6 Months",
    },
    {
        icon: <FaWordpress size={40} className="text-blue-400" />,
        courseName: "Web Development and WordPress",
        instituteName: "Freedom IT Institutions",
        duration: "4 Months",
    },
    {
        icon: <FaWordpress size={40} className="text-blue-400" />,
        courseName: "BSc in EEE",
        instituteName: "Atish Dipankar University Of Science & Technology",
        duration: "4 Years",
    }
];

const Course = () => {
    return (
        <div className="py-16 bg-[#0f0c1a]">
            <h2 className="text-4xl font-bold text-purple-400 text-center mb-12">
                My Courses
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-[#1f1530] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-purple-500/30 hover:-translate-y-1 hover:scale-105 transform transition-all duration-300 ease-out cursor-pointer"
                    >
                        <div className="mb-4">{course.icon}</div>

                        <p className="text-white text-lg font-medium flex items-center gap-2">
                            <span className="font-semibold text-purple-300">Course Name:</span>{" "}
                            {course.courseName}
                        </p>

                        <p className="text-gray-300 flex items-center gap-2">
                            <FaUniversity className="text-purple-300" />
                            <span className="font-semibold text-purple-300">Institute Name:</span>{" "}
                            {course.instituteName}
                        </p>

                        <p className="text-gray-300 flex items-center gap-2">
                            <FaRegClock className="text-purple-300" />
                            <span className="font-semibold text-purple-300">Course Duration:</span>{" "}
                            {course.duration}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;



