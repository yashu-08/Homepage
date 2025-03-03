import { useState } from "react";
import { Link } from "react-router-dom";
import registrationImg from "../assets/student_register_image.jpeg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div
        className="relative flex rounded-lg overflow-hidden shadow-lg"
        style={{ width: "900px", height: "500px" }}
      >
        {/* Left Section - Background Image */}
        <div
          className="w-1/2 hidden md:flex items-center justify-center relative"
          style={{
            backgroundImage: `url(${registrationImg})`, // Corrected line
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <div className="absolute inset-0 bg-purple-950 bg-opacity-50"></div>
          <div className="relative z-10 text-white text-center px-6">
            <h2 className="text-2xl font-bold">
              One Step Closer to <br /> Your Dream
            </h2>
            <h4 className="text-lg mt-2">
              An E-Learning service ready to help you become an expert
            </h4>
          </div>
        </div>

        {/* Right Section - Registration Form */}
        <div className="w-1/2 bg-[#0F1C47] p-8 flex flex-col justify-center">
          <h2 className="text-white text-2xl font-semibold mb-3">Register</h2>
          <p className="text-gray-300 mb-6">
            Get ready for a future filled with opportunities.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-white text-black p-3 rounded-lg border-none focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-white text-black p-3 rounded-lg border-none focus:outline-none"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-white text-black p-3 rounded-lg border-none focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-lg hover:bg-yellow-500"
            >
              REGISTER
            </button>
          </form>

          <p className="text-gray-300 text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-white underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;