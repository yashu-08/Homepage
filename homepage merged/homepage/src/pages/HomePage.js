import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import StatisticsAndPartners from "../components/StatisticsAndPartners";
import Benefits from "../components/Benefits";
import AboutUs from "../components/AboutUs";
import CourseRecommendations from "../components/CourseRecommendations";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Register from "../components/Register";
import Blog from "../components/Blogs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      <Header />
    <StatisticsAndPartners />
      <Benefits />
      <AboutUs />
      <CourseRecommendations />
      <Testimonials />
      <FAQ />
      <Register />
      <Blog />  
      <Footer />
    </div>
  );
};

export default HomePage;
