

import { Link, NavLink } from "react-router";

const Navbar = () => {
    // const navLinks = (
    //     <>
    //         <li>
    //             <NavLink
    //                 to="/"
    //                 // className={({ isActive }) =>
    //                 //     `px-3 py-2 rounded-md transition-colors duration-300 ${isActive ? "text-[#6c5ce7]" : "text-white hover:text-[#a29bfe]"
    //                 //     }`
    //                 // }
    //             >
    //                 Home
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink
    //                 to="/about"
    //                 // className={({ isActive }) =>
    //                 //     `px-3 py-2 rounded-md transition-colors duration-300 ${isActive ? "text-[#6c5ce7]" : "text-white hover:text-[#a29bfe]"
    //                 //     }`
    //                 // }
    //             >
    //                 About Me
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink
    //                 to="#project"
    //                 // className={({ isActive }) =>
    //                 //     `px-3 py-2 rounded-md transition-colors duration-300 ${isActive ? "text-[#6c5ce7]" : "text-white hover:text-[#a29bfe]"
    //                 //     }`
    //                 // }
    //             >
    //                 Project
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink
    //                 to="/contact"
    //                 // className={({ isActive }) =>
    //                 //     `px-3 py-2 rounded-md transition-colors duration-300 ${isActive ? "text-[#6c5ce7]" : "text-white hover:text-[#a29bfe]"
    //                 //     }`
    //                 // }
    //                 className="px-3 py-2 rounded-md transition-colors duration-300"
    //             >
    //                 Contact
    //             </NavLink>
    //         </li>
    //     </>
    // );

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="text-white px-3 py-2 rounded-md transition-colors duration-300">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="text-white px-3 py-2 rounded-md transition-colors duration-300">
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink to="/project" className="text-white px-3 py-2 rounded-md transition-colors duration-300">
                    Project
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="text-white px-3 py-2 rounded-md transition-colors duration-300">
                    Contact
                </NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-[#0f0715] shadow-md fixed top-0 left-0 w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#0f0715] rounded-box mt-3 w-52 p-2 shadow text-white"
                    >
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
                    <img src="logo.png" alt="logo" className="w-35 h-12" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            <div className="navbar-end">
                <a
                    href="https://drive.google.com/file/d/1QdFuooGqimRoL8lB4Aduh6KFQlzbqMED/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="btn bg-[#6c5ce7] hover:bg-[#a29bfe] text-white border-none transition-all duration-300 hover:scale-105"
                >
                    My CV
                </a>
            </div>
        </div>
    );
};

export default Navbar;

