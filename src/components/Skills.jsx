// import React from "react";

// const skillsData = {
//   Frontend: [
//     "HTML5",
//     "CSS3",
//     "Tailwind CSS",
//     "Bootstrap",
//     "JavaScript",
//     "React.js",
//     "Next.js",
//   ],
//   Backend: [
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "Mongoose",
//     "REST API",
//     "JWT",
//   ],
//   Tools: [
//     "Git & GitHub",
//     "VS Code",
//     "Figma",
//     "Chrome DevTools",
//     "Postman",
//     "Netlify / Vercel",
//   ],
// };

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] py-20"
//     >
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
//         <p className="text-gray-600 text-base sm:text-lg">
//           A categorized overview of my technical expertise.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {Object.entries(skillsData).map(([category, skills]) => (
//           <div
//             key={category}
//             className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-[#7081C8] hover:shadow-xl transition"
//           >
//             <h3 className="text-xl font-semibold text-[#7081C8] mb-4">
//               {category}
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               {skills.map((skill, index) => (
//                 <li
//                   key={index}
//                   className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition"
//                 >
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React from "react";
// import { BiLogoVisualStudio } from "react-icons/bi";
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaChrome } from "react-icons/fa";
// import { 
//   SiTailwindcss, 
//   SiMongodb, 
//   SiExpress, 
//   SiPostman, 
//   SiVercel, 
//   SiJavascript,   
// } from "react-icons/si";

// const skills = {
//   Frontend: [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//     { name: "React", icon: <FaReact className="text-cyan-500" /> },
//     { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
//   ],
//   Backend: [
//     { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//   ],
//   Tools: [
//     { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
//     { name: "VS Code", icon: <BiLogoVisualStudio  className="text-blue-500" /> },
//     { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
//     { name: "Chrome DevTools", icon: <FaChrome className="text-blue-500" /> },
//     { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
//     { name: "Netlify / Vercel", icon: <SiVercel className="text-black" /> },
//   ],
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] py-20">
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold mb-2">My Skills</h2>
//         <p className="text-gray-600">Technologies I use to build and deploy applications</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         {Object.entries(skills).map(([category, items]) => (
//           <div key={category}>
//             <h3 className="text-2xl font-semibold mb-6">{category}</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//               {items.map((skill, idx) => (
//                 <div key={idx} className="flex flex-col items-center gap-2">
//                   <div className="text-4xl">{skill.icon}</div>
//                   <p className="text-sm font-medium text-center">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiShadcnui,
  SiDaisyui,
  SiOpenai,
  SiVercel,
  SiFramer,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  // { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  // { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  // { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  { name: "Shadcn/UI", icon: <SiShadcnui color="#000000" /> },
  { name: "DaisyUI", icon: <SiDaisyui color="#EC4899" /> },
  { name: "Vercel", icon: <SiVercel color="#000000" /> },
  { name: "Framer Motion", icon: <SiFramer color="#FFBF00" /> },
  { name: "GitHub", icon: <SiGithub color="#181717" /> },
  { name: "OpenAI API", icon: <SiOpenai color="#09122C" /> },
];

const infiniteSkills = [...skills, ...skills, ...skills];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%] py-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {infiniteSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-w-[100px] text-center"
            >
              <div className="text-4xl md:text-5xl mb-2">{skill.icon}</div>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

