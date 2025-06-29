// import React from 'react';

// const Header = () => {
//   return (
//     <header className="min-h-[40vh] w-11/12 container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-12 p-4 sm:p-8 lg:p-12 xl:pt-40">
//       {/* Left Section - Text Content */}
//       <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//           Master Coding. Build Real Projects. Get Hired.
//         </h1>
//         <p className="text-lg sm:text-xl text-gray-400 mb-10">
//           Structured, no-fluff courses that teach you the skills you need to succeed in the real world.
//         </p>
//         <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
//           <span>Sign Up for Free</span>
//           <svg
//             className="w-5 h-5 ml-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Right Section - Code Editor Mockup */}
//       <div className="bg-gray-900 rounded-xl shadow-2xl p-6 w-full lg:w-1/2 max-w-xl">
//         {/* Editor Header - Traffic Lights */}
//         <div className="flex items-center space-x-2 mb-4">
//           <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//         </div>

//         {/* Code Content */}
//         <pre className="text-sm sm:text-base overflow-x-auto text-white font-mono">
//           <code>
//             <span className="text-blue-400">const</span>{' '}
//             <span className="text-green-400">coder</span> = {'{'}
//             <br />
//             &nbsp;&nbsp;<span className="text-red-400">name</span>: <span className="text-yellow-400">'Master Coder'</span>,
//             <br />
//             &nbsp;&nbsp;<span className="text-red-400">skills</span>: [<span className="text-yellow-400">'React'</span>, <span className="text-yellow-400">'Node'</span>],
//             <br />
//             &nbsp;&nbsp;<span className="text-red-400">hardWorker</span>: <span className="text-purple-400">true</span>,
//             <br />
//             &nbsp;&nbsp;<span className="text-red-400">problemSolver</span>: <span className="text-purple-400">true</span>,
//             <br />
//             &nbsp;&nbsp;<span className="text-blue-400">hireable</span>: <span className="text-orange-400">function</span>() {'{'}
//             <br />
//             &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">return</span> (
//             <br />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">this</span>.<span className="text-red-400">hardWorker</span> &&
//             <br />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">this</span>.<span className="text-red-400">problemSolver</span> &&
//             <br />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">this</span>.<span className="text-red-400">skills</span>.<span className="text-green-400">length</span> &gt;= <span className="text-blue-400">5</span>
//             <br />
//             &nbsp;&nbsp;&nbsp;&nbsp;);
//             <br />
//             &nbsp;&nbsp;{'}'},
//             <br />
//             {'};'}
//           </code>
//         </pre>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import profilePhoto from "../assets/images/profile.jpg";
import arrowIcon from "../assets/images/arrow-icon-dark.png";

const Header = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-14 py-20">
      
      {/* Left content: intro */}
      <div className="w-full lg:w-[60%] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
          Hi, I'm Ridoy
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#7081C8] mb-6">
          MERN Stack Developer
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
          I build Full-stack web applications using MongoDB, Express, React, and Node.js crafting clean user interfaces and scalable backend solutions tailored to business goals and user experience.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-[#7081C8] hover:bg-[#5a6bb5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition"
        >
          Download Resume
          <img src={arrowIcon} alt="Arrow icon" className="w-4" />
        </a>
      </div>

      {/* Right content: profile photo */}
      <div className="flex justify-center lg:justify-end w-full lg:w-[40%]">
        <img
          src={profilePhoto}
          alt="Ridoy"
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg border-4 border-[#7081C8]"
        />
      </div>
    </section>
  );
};

export default Header;


