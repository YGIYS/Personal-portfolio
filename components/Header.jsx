// components/Header.js
"use client"





import "../app/globals.css";


import React, { useState } from "react";
import { useCallback } from "react";
import cn from "classnames";
import { useTheme } from '../app/ThemeContext'
import { useEffect } from "react";
import Link from "next/link";
const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

   const [isOpen, setIsOpen] = useState(false);
   const [activeSection, setActiveSection] = useState("home");


  // useEffect(() => {
     
  //    setActiveSection("home");
     
  //  }, [activeSection]);
   useEffect(() => {
     document.body.className = isDarkMode ? "dark" : "light";
   }, [isDarkMode]);
  
    const scrollToSection = useCallback(
      (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      },
      [activeSection] // Dependency array
    );


//   const ClasTogle = () => {
//     let clasName = "bg-transparent text-gray-500";
//     if (activeSection  === "Experience" ) {
//    clasName = "bg-lime-400";
// } if (isDarkMode ) 
//   }
  

  return (
    <>
      <div
        className={` ${
          isDarkMode ? " headerBgrnd" : "light-header"
        } container  flex justify-center items-center sticky top-0 z-20 py-3`}
      >
        <div className={`  navbar   flex-row  `}>
          <div className=" navbar-start ml-20 ">
            <a
              className={`${
                isDarkMode
                  ? `btn brightness-100 btn-ghost text-xl font-bold border-lime-200 border-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#87ceeb,0_0_15px_#87ceeb,0_0_30px_#87ceeb]"
 text-transparent bg-clip-text bg-gradient-to-r from-white   to-sky-400 hover:brightness-100 hover:bg-blue-700  outline-none outline-blue-700 [text-stroke:2px_#ff0] `
                  : ` btn brightness-100 btn-ghost text-xl font-bold border-lime-400 border-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#87ceeb,0_0_15px_#87ceeb,0_0_30px_#87ceeb]
 text-transparent bg-clip-text bg-gradient-to-r from-black   to-sky-400 hover:brightness-200  outline-none outline-blue-700 [text-stroke:2px_#ff0]" `
              } 
`}
            >
              MoeruMonoTachi
            </a>
          </div>
          <div className="navbar-center  justify-around hidden lg:flex">
            <ul
              className={` px-1 ml-28 grid grid-cols-5 gap-5 text-sm  text-center `}
            >
              <li
                className={cn(
                  "rounded cursor-pointer   p-2 hover:text-white",
                  (() => {
                    if (activeSection === "Home" && isDarkMode) {
                      return "bg-blue-400 text-white";
                    } else if (activeSection === "Home" && !isDarkMode) {
                      return "bg-lime-400 hover:bg-lime-400";
                    } else {
                      return "hover:bg-blue-400";
                    }
                  })()
                )}
                onClick={() => {
                  setActiveSection("Home");
                  scrollToSection("Home");
                }}
              >
                <Link href={"#Home"}>Home</Link>
              </li>
              <li
                className={cn(
                  "rounded cursor-pointer   p-2 hover:text-white",
                  (() => {
                    if (activeSection === "Service" && isDarkMode) {
                      return "bg-blue-400 text-white";
                    } else if (activeSection === "Service" && !isDarkMode) {
                      return "bg-lime-400 hover:bg-lime-400";
                    } else {
                      return "hover:bg-blue-400";
                    }
                  })()
                )}
                onClick={() => {
                  setActiveSection("Service");
                  scrollToSection("Service");
                }}
              >
                <Link href="#Services"> Services</Link>
              </li>
              <li
                className={cn(
                  "rounded cursor-pointer   p-2 hover:text-white",
                  (() => {
                    if (activeSection === "Experience" && isDarkMode) {
                      return "bg-blue-400 text-white";
                    } else if (activeSection === "Experience" && !isDarkMode) {
                      return "bg-lime-400 hover:bg-lime-400";
                    } else {
                      return "hover:bg-blue-500";
                    }
                  })()
                )}
                onClick={() => {
                  setActiveSection("Experience");
                  scrollToSection("Experience");
                }}
              >
                <Link href={"#Experience"}>Experience</Link>
              </li>

              <li
                className={cn(
                  "rounded cursor-pointer  p-2 hover:text-white",
                  (() => {
                    if (activeSection === "About" && isDarkMode) {
                      return "bg-blue-400 ";
                    } else if (activeSection === "About" && !isDarkMode) {
                      return "bg-lime-400 text-white hover:bg-lime-400";
                    } else {
                      return "hover:bg-blue-500";
                    }
                  })()
                )}
                onClick={() => {
                  setActiveSection("About");
                  scrollToSection("About");
                }}
              >
                <Link href={"#About"}>About</Link>
              </li>
              <li
                className={cn(
                  ` rounded cursor-pointer p-2 hover:text-white `,
                  (() => {
                    if (activeSection === "Contact" && isDarkMode) {
                      return "bg-blue-400";
                    } else if (activeSection === "Contact" && !isDarkMode) {
                      return "bg-lime-400 text-white hover:bg-lime-400";
                    } else {
                      return "hover:bg-blue-500";
                    }
                  })()
                )}
                onClick={() => {
                  setActiveSection("Contact");
                  scrollToSection("Contact");
                }}
              >
                <Link href={"#Contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <label className="swap swap-rotate rounded-full ml-14">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller "
              value="synthwave"
              onChange={toggleTheme}
              // checked={togleChek}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-amber-400  rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-black bg-amber-200 rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="navbar-end mr-4">
            <div className="dropdown">
              <div
                tabIndex={4}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                tabIndex={4}
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
                } menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 mr-10 mx-auto w-52 p-2 shadow`}
              >
                <li>
                  <Link href={"/"}>
                    {" "}
                    <div
                      className={cn(
                        "rounded p-1 cursor-pointer",
                        activeSection === "home" // Condition outside the object
                          ? isDarkMode
                            ? "bg-lime-400 hover:bg-lime-400"
                            : "bg-primary" // Classes based on isDarkMode
                          : "" // No extra classes if not active
                      )}
                      onClick={() => {
                        setActiveSection("home");
                        scrollToSection("home");
                        setIsOpen(false);
                      }}
                    >
                      Home
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    {" "}
                    <div
                      className={cn(
                        "rounded p-1 cursor-pointer",
                        activeSection === "Services" // Condition outside the object
                          ? isDarkMode
                            ? "bg-lime-400 hover:bg-lime-400"
                            : "bg-primary" // Classes based on isDarkMode
                          : "" // No extra classes if not active
                      )}
                      onClick={() => {
                        setActiveSection("Services");
                        scrollToSection("Services");
                        setIsOpen(false);
                      }}
                    >
                      Services
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={"#Experience"}>
                    {" "}
                    <div
                      className={cn(
                        "rounded p-1 cursor-pointer",
                        activeSection === "Experience" // Condition outside the object
                          ? isDarkMode
                            ? "bg-lime-400 hover:bg-lime-400"
                            : "bg-primary" // Classes based on isDarkMode
                          : "" // No extra classes if not active
                      )}
                      onClick={() => {
                        setActiveSection("Experience");
                        scrollToSection("Experience");
                        setIsOpen(false);
                      }}
                    >
                      Experience
                    </div>{" "}
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    {" "}
                    <div
                      className={cn(
                        "rounded p-1 cursor-pointer",
                        activeSection === "About" // Condition outside the object
                          ? isDarkMode
                            ? "bg-lime-400 hover:bg-lime-400"
                            : "bg-primary" // Classes based on isDarkMode
                          : "" // No extra classes if not active
                      )}
                      onClick={() => {
                        setActiveSection("About");
                        scrollToSection("About");
                        setIsOpen(false);
                      }}
                    >
                      About
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    {" "}
                    <div
                      className={cn(
                        "rounded p-1 cursor-pointer",
                        activeSection === "Contact" // Condition outside the object
                          ? isDarkMode
                            ? "bg-lime-400 hover:bg-lime-400"
                            : "bg-primary" // Classes based on isDarkMode
                          : "" // No extra classes if not active
                      )}
                      onClick={() => {
                        setActiveSection("Contact");
                        scrollToSection("Contact");
                        setIsOpen(false);
                      }}
                    >
                      Contact
                    </div>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header

// "use client";

// import "../app/globals.css";
// import { useTheme } from "../app/ThemeContext";
// import Link from "next/link";

// const Header = () => {
//   const { isDarkMode, setIsDarkMode } = useTheme();

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div
//       className={`container mx-auto flex justify-center items-center sticky top-0 ${
//         isDarkMode ? "bg-black" : "bg-slate-300"
//       }`}
//     >
//       <div
//         className={`navbar bg-base-100 ${isDarkMode ? "bg-black" : "bg-white"}`}
//       >
//         <div className="navbar-start">
//           <a className="btn btn-ghost text-xl ml-20">MoeruMonoTachi</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 ml-28">
//             <li>
//               <Link href={"/"}> Home</Link>
//             </li>
//             <li>
//               <Link href={"/"}> Services </Link>
//             </li>
//             <li>
//               <Link href={"/"}> Experience </Link>
//             </li>
//             <li>
//               <Link href={"/"}> About </Link>
//             </li>
//             <li>
//               <Link href={"/"}> Contact </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end mr-4">
//           <div className="dropdown">
//             <div tabIndex={4} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={4}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 mr-10 mx-auto w-52 p-2 shadow"
//             >
//               <li>
//                 <Link href={"/"}> Home</Link>
//               </li>
//               <li>
//                 <Link href={"/"}> Services </Link>
//               </li>
//               <li>
//                 <Link href={"/"}> Experience </Link>
//               </li>
//               <li>
//                 <Link href={"/"}> About </Link>
//               </li>
//               <li>
//                 <Link href={"/"}> Contact </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Theme Toggle */}
//         <label className="swap swap-rotate mr-20">
//           <input
//             type="checkbox"
//             className="theme-controller w-3"
//             checked={isDarkMode}
//             onChange={toggleTheme}
//           />
//           {/* Sun Icon - Shown in Dark Mode */}
//           <svg
//             className={`h-7 w-10 fill-current ${
//               isDarkMode ? "hidden" : "block"
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Z" />
//           </svg>
//           {/* Moon Icon - Shown in Light Mode */}
//           <svg
//             className={`h-7 w-10 fill-current ${
//               isDarkMode ? "block" : "hidden"
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Header;


