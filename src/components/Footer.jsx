import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1600px] mx-auto bg-[#f7f8ff] py-8 mt-10">
      <div className="px-5 lg:px-8 xl:px-[8%] flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Text */}
        <p className="text-sm text-center md:text-left text-gray-600">
          &copy; {new Date().getFullYear()} Redoy Al Hasan. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-lg">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <ImLinkedin size={24} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-700 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
