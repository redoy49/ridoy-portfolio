// ProjectDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLink, FaArrowLeft, FaGithub } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import roommateFinder from "../assets/images/project1.png";
import foodExpiryTracker from "../assets/images/project3.png";
import freshFarmers from "../assets/images/project4.png";

import {
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiFramer,
  SiOpenai,
  SiShadcnui,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJsonwebtokens, // Added JWT icon
  SiVercel, // Added Vercel icon
  SiNetlify, // Added Netlify icon
} from "react-icons/si";

const projects = [
  {
    name: "RoomMate Finder",
    id: "roommate-finder",
    image: roommateFinder,
    description:
      "RoomMate Finder is a full-featured web platform that helps users find compatible roommates based on lifestyle, location, budget, and preferences. It features secure authentication, real-time listing updates, role-based access, and dynamic filtering for a seamless experience.",
    liveLink: "https://roommate-finder-e1587.web.app/",
    githubLink: "https://github.com/redoy49/roommate-finder",
    techStack: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
      { name: "Vercel", icon: <SiVercel color="#000000" /> }, // Added Vercel
    ],
    challenges: [
      "Handling protected routes with reload persistence.",
      "Preventing users from liking their own posts.",
      "Displaying phone number only after liking the post.",
      "Managing likes count accurately and efficiently.",
      "Keeping UI responsive across all screen sizes.",
    ],
    futurePlans: [
      "Add in-app chat between users.",
      "Improve search with geolocation filters.",
      "Show number of mutual interests.",
      "Allow bookmarking favorite listings.",
      "Integrate dark mode site-wide.",
    ],
  },
  {
    name: "Expiry Tracker",
    id: "expiry-tracker",
    image: foodExpiryTracker,
    description:
      "Expiry Tracker is an AI-powered grocery management tool that tracks food expiry dates, sends timely reminders, and helps reduce waste. It uses OpenAI to suggest recipe ideas based on expiring items, ensuring a smarter and more sustainable pantry experience.",
    liveLink: "https://food-expiry-tracker-e6971.web.app/",
    githubLink: "https://github.com/redoy49/food-expiry-tracker",
    techStack: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "OpenAI API", icon: <SiOpenai color="#412991" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> }, // Added Netlify
    ],
    challenges: [
      "Integrating OpenAI API with dynamic food data.",
      "Setting up reminders and local storage management.",
      "Making the UI intuitive for non-technical users.",
      "Ensuring mobile responsiveness across all devices.",
      "Handling edge cases like partial or ambiguous food names.",
    ],
    futurePlans: [
      "Add barcode scanning to input items faster.",
      "Sync expiry data across multiple devices.",
      "Enable real-time inventory sharing with family.",
      "Gamify reducing food waste with achievement badges.",
      "Allow exporting expiry data to PDF or Excel.",
    ],
  },
  {
    name: "Fresh Farmers",
    id: "fresh-farmers",
    image: freshFarmers,
    description:
      "Fresh Farmers is a subscription-based e-commerce platform that connects local farmers directly with consumers, offering fresh, seasonal produce. It features secure user authentication, a dynamic product catalog with subscription options, efficient order management, and integrated payment processing to support sustainable farming and healthy eating.",
    liveLink: "https://subscription-box-df504.web.app/",
    githubLink: "https://github.com/redoy49/fresh-farmers",
    techStack: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Express.js", icon: <SiExpress color="#000000" /> },
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Shadcn/UI", icon: <SiShadcnui color="#000" /> },
      { name: "JWT", icon: <SiJsonwebtokens color="#DB0000" /> }, // Added JWT
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> }, // Added Firebase
      { name: "Vercel", icon: <SiVercel color="#000000" /> }, // Added Vercel
    ],
    challenges: [
      "Implementing a flexible subscription model with recurring payments.",
      "Managing real-time inventory updates for perishable goods.",
      "Ensuring secure payment gateway integration.",
      "Developing a robust admin panel for farmer and order management.",
      "Optimizing image loading and performance for a rich product catalog.",
    ],
    futurePlans: [
      "Integrate delivery tracking and scheduling.",
      "Allow farmers to manage their own storefronts.",
      "Add customer review and rating system.",
      "Implement personalized subscription box recommendations.",
      "Expand payment options and international shipping.",
    ],
  },
];

const ProjectDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === name);

  if (!project) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-2xl text-red-500">
        Project not found.
      </div>
    );
  }

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Card variants for challenges/future plans
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="w-full max-w-[1200px] mx-auto px-5 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={() => navigate("/#projects")}
        className="mb-6 inline-flex items-center gap-2 text-[#7081C8] hover:underline"
        whileHover={{ x: -5 }}
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>

      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-[#7081C8]"
        variants={itemVariants}
      >
        {project.name}
      </motion.h1>

      <motion.img
        src={project.image}
        alt={project.name}
        className="w-full rounded-lg mb-6 object-contain aspect-video"
        variants={itemVariants}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.p
        className="text-gray-700 text-lg mb-6 leading-relaxed"
        variants={itemVariants}
      >
        {project.description}
      </motion.p>

      {/* Tech Stack Section with only icons */}
      <motion.div className="mb-6" variants={containerVariants}>
        <h3 className="text-xl font-semibold text-[#7081C8] mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
          {project.techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              className="text-3xl"
              title={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="flex flex-wrap gap-4 mb-10" variants={itemVariants}>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#7081C8] hover:bg-[#5a6bb5] text-white px-4 py-2 rounded-full transition"
        >
          <FaLink /> Live Site
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition"
        >
          <FaGithub /> GitHub Code
        </a>
      </motion.div>

      {/* Challenges & Future Plans - Wrapped in a single grid for two horizontal cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  {/* Challenges Card */}
  {project.challenges && (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <h3 className="text-xl font-semibold text-[#7081C8] mb-4 border-b pb-2 border-gray-200">
        Challenges Faced
      </h3>
      <ul className="text-base text-gray-700 space-y-2 flex-grow">
        {project.challenges.map((challenge, i) => (
          <li key={i} className="flex items-start gap-2">
            <HiOutlineLightBulb className="mt-1 text-[#7081C8] flex-shrink-0" />
            <span>{challenge}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )}

  {/* Future Plans Card */}
  {project.futurePlans && (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <h3 className="text-xl font-semibold text-[#7081C8] mb-4 border-b pb-2 border-gray-200">
        Future Improvements
      </h3>
      <ul className="text-base text-gray-700 space-y-2 flex-grow">
        {project.futurePlans.map((plan, i) => (
          <li key={i} className="flex items-start gap-2">
            <HiOutlineLightBulb className="mt-1 text-[#7081C8] flex-shrink-0" />
            <span>{plan}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</div>

    </motion.section>
  );
};

export default ProjectDetails;