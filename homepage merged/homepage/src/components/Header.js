import React, { useState } from "react";
import HomeImage from "../assets/home.jpeg";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between pt-17 p-12 bg-[#1A1A4A] text-white min-h-[80vh]">
      {/* Left Content Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-bold leading-tight">
          Build and Realize Aspirations <br /> with{" "}
          <span className="text-yellow-400">EduTech Solutions</span>
        </h1>
        <p className="text-gray-300 mt-8 text-xl leading-relaxed">
          Edutech Solution is an online platform that provides online courses
          and empowers you to achieve your ambitions in technology.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-8">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-5 rounded-xl shadow-lg text-xl transition duration-300">
            View Courses
          </button>
          <button
            onClick={() => console.log("View Learning Path clicked")}
            className={`font-semibold bg-transparent border-none cursor-pointer text-xl transition duration-300 ${
              isHovered ? "text-white" : "text-yellow-400 hover:underline"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View Learning Path →
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
        <img
          src={HomeImage}
          alt="Education Illustration"
          className="w-4/5 md:w-3/4 h-auto rounded-2xl shadow-2xl"
        />
      </div>
    </header>
  );
};

export default Header;