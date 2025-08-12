
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
        icon: <FaUniversity size={40} className="text-green-400" />,
        courseName: "BSc in EEE",
        instituteName: "Atish Dipankar University Of Science & Technology",
        duration: "4 Years",
    },
    // Just added more course here next time
];

const Course = () => {
    return (
        <div className="py-16 bg-[#0f0c1a]">
            <h2 className="text-4xl font-bold text-purple-400 text-center mb-12">
                My Courses & Education
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-[#1f1530] rounded-xl shadow-lg p-6 hover:shadow-purple-500/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
                    >
                        {/* Header with icon + course name */}
                        <div className="flex items-center gap-4 border-b border-purple-500/30 pb-3 mb-4">
                            {course.icon}
                            <h3 className="text-xl font-semibold text-white">{course.courseName}</h3>
                        </div>

                        {/* Details */}
                        <div className="space-y-3 text-gray-300">
                            <p className="flex items-center gap-2">
                                <FaUniversity className="text-purple-300" />
                                <span className="text-sm">
                                    <span className="font-semibold text-purple-300">Institute:</span>{" "}
                                    {course.instituteName}
                                </span>
                            </p>

                            <p className="flex items-center gap-2">
                                <FaRegClock className="text-purple-300" />
                                <span className="text-sm">
                                    <span className="font-semibold text-purple-300">Duration:</span>{" "}
                                    {course.duration}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;

