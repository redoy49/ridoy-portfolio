// // Projects.jsx
// import React from "react";
// import roommateFinder from "../assets/images/project1.png";

// const projects = [
//   {
//     name: "RoomMate Finder",
//     image: roommateFinder,
//     description:
//       "A web platform where users can find and post roommate listings by location, lifestyle, and preferences.",
//     liveLink: "https://roommatefinder.example.com",
//     githubLink: "https://github.com/your-username/roommate-finder-client",
//     techStack: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
//   },
//   {
//     name: "AI Content Generator",
//     // image: "/assets/images/ai-content.png",
//     description:
//       "An AI-powered content generator using OpenAI API for creating blog posts, summaries, and more.",
//     liveLink: "https://aicontent.example.com",
//     githubLink: "https://github.com/your-username/ai-content-client",
//     techStack: ["React", "OpenAI API", "TailwindCSS"],
//   },
//   {
//     name: "Portfolio Website",
//     // image: "/assets/images/portfolio.png",
//     description:
//       "A modern and responsive personal portfolio built with React, showcasing projects, skills, and resume.",
//     liveLink: "https://yourportfolio.com",
//     githubLink: "https://github.com/your-username/portfolio-client",
//     techStack: ["React", "TailwindCSS", "Shadcn/UI", "EmailJS"],
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] py-20"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         My Projects
//       </h2>

//       <div className="space-y-12">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="flex flex-col lg:flex-row items-center gap-8 bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden"
//           >
//             {/* Project Image */}
//             <div className="w-full lg:w-1/2">
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-full aspect-video object-contain px-2 rounded-l-xl"
//               />
//             </div>

//             {/* Project Info */}
//             <div className="w-full lg:w-1/2 p-6 space-y-4 text-center lg:text-left">
//               <h3 className="text-2xl font-semibold text-[#7081C8]">
//                 {project.name}
//               </h3>
//               <p className="text-gray-700">{project.description}</p>

//               {/* Tech Stack as badges */}
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {project.techStack.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="text-xs font-medium bg-[#eef1ff] text-[#4a56a6] px-3 py-1 rounded-md border border-[#d1d9f9]"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#7081C8] hover:bg-[#5a6bb5] text-white px-4 py-2 rounded-full font-medium transition"
//                 >
//                   Live Site
//                 </a>
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-medium transition"
//                 >
//                   GitHub Code
//                 </a>
//                 <button className="border border-[#7081C8] text-[#7081C8] hover:bg-[#7081C8] hover:text-white px-4 py-2 rounded-full transition">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// Projects.jsx
import React from "react";
import roommateFinder from "../assets/images/project1.png";
import foodExpiryTracker from "../assets/images/project3.png";
import freshFarmers from "../assets/images/project4.png";
import { 
  SiReact, SiFirebase, SiTailwindcss, SiFramer, 
  SiOpenai, SiShadcnui 
} from "react-icons/si";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    name: "RoomMate Finder",
    image: roommateFinder,
    description:
      "A web app to post or find roommate listings based on location, lifestyle, and preferences. Includes filters, real-time updates, and a user-friendly interface for easy roommate discovery and connection.",
    liveLink: "https://roommatefinder.example.com",
    githubLink: "https://github.com/your-username/roommate-finder-client",
    techStack: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
    ],
  },
  {
    name: "Expiry Tracker",
    image: foodExpiryTracker,
    description:
      "An AI-powered app to track food expiry dates, helping users reduce waste and manage groceries. It sends reminders, suggests usage ideas, and provides a visual timeline for better pantry management.",
    liveLink: "https://aicontent.example.com",
    githubLink: "https://github.com/your-username/ai-content-client",
    techStack: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "OpenAI API", icon: <SiOpenai color="#412991" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
    ],
  },
  {
    name: "Fresh Farmers",
    image: freshFarmers,
    description:
      "A web app to post or find roommate listings based on location, lifestyle, and preferences. Includes filters, real-time updates, and a user-friendly interface for easy roommate discovery and connection.",
    liveLink: "https://yourportfolio.com",
    githubLink: "https://github.com/your-username/portfolio-client",
    techStack: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Shadcn/UI", icon: <SiShadcnui color="#000" /> },
      // { name: "EmailJS", icon: <SiEmailjs color="#FF6A00" /> },
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row items-center md:gap-8 bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden"
          >
            {/* Project Image */}
            {project.image && (
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full aspect-video object-contain p-2 md:px-4 rounded-md"
                />
              </div>
            )}

            {/* Project Info */}
            <div className="w-full lg:w-1/2 p-6 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#7081C8]">
                {project.name}
              </h3>
              <p className="text-gray-700 text-justify">{project.description}</p>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-4 mt-6">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="text-2xl"
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mt-4 sm:mt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition bg-[#7081C8] hover:bg-[#5a6bb5] text-white"
                >
                  <FaLink size={14}  className="text-base sm:text-lg" />
                  Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition bg-gray-800 hover:bg-gray-700 text-white"
                >
                  GitHub Code
                </a>
                <button className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition border border-[#7081C8] text-[#7081C8] hover:bg-[#7081C8] hover:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
