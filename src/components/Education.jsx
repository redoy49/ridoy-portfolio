import React from "react";
import collegeImg from "../assets/images/Narsingdi_Govt._College.jpg";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full max-w-[1600px] mx-auto bg-[rgb(251,252,255)] px-5 lg:px-8 xl:px-[8%] py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 bg-white shadow-sm border border-gray-200 rounded-xl p-6 md:p-10 w-full mx-auto">
        {/* Left: College Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={collegeImg}
            alt="Narsingdi Government College"
            className="w-full max-w-sm rounded-xl object-cover shadow aspect-video"
          />
        </div>

        {/* Right: Education Info */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#7081C8] mb-3">
            BBA, 3rd Year
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-1">
            <span className="font-medium">Subject:</span> Accounting
          </p>
          <p className="text-md text-gray-600 mb-2">
            Narsingdi Government College
          </p>
          <p className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm md:text-base text-gray-500">
            <FaUserGraduate className="text-base md:text-lg text-[#7081C8]" />
            <span>
              Expected Graduation: <span className="font-semibold">2026</span>
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
