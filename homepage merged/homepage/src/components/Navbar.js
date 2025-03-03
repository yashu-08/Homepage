import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Navbar = () => {
  return React.createElement(
    "nav",
    { className: "bg-[#1A1A4A] text-white py-3 px-7 flex justify-between items-center border-b-1 border-purple-500" },
    
    // Logo
    React.createElement("h1", { className: "text-xl font-bold" }, "[EduTech Solutions]"),

    // Navigation Links Container
    React.createElement(
      "ul",
      { className: "hidden md:flex space-x-8 text-sm font-medium" },
      ["HOME", "ABOUT US", "COURSE", "FAQ"].map((text) =>
        React.createElement("li", {}, React.createElement("a", { href: "#", className: "hover:text-gray-300" }, text))
      ),
      React.createElement(
        "li",
        {},
        React.createElement(
          "a",
          { href: "#", className: "hover:text-gray-300 flex items-center gap-1" },
          "BLOG ",
          React.createElement(FiExternalLink, {})
        )
      )
    ),

    // Login Button
    React.createElement(
      "button",
      { className: "border border-white text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-black transition" },
      "Login"
    )
  );
};

export default Navbar;