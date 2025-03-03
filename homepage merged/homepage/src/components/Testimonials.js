import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import userImg from "../assets/image.png"; // Update with actual images if available

const testimonials = [
  {
    name: "Jenny Wilson",
    text: "The material presented is easy to understand, the quality of the instructors is excellent, and their responsiveness is quick. So, I highly recommend this course!!",
    image: userImg,
  },
  {
    name: "Michael Brown",
    text: "A great platform for learning. The content is well-structured, and the community support is amazing!",
    image: userImg,
  },
  {
    name: "Sarah Smith",
    text: "The courses are very informative and well-paced. I learned a lot and improved my skills significantly.",
    image: userImg,
  },
  {
    name: "David Johnson",
    text: "This platform helped me build a strong foundation in programming. Highly recommended for beginners!",
    image: userImg,
  },
  {
    name: "Emily White",
    text: "The instructors are very knowledgeable and provide great insights into the industry. I gained valuable skills!",
    image: userImg,
  },
  {
    name: "Chris Martin",
    text: "A fantastic learning experience with well-structured courses. This platform is a must for anyone looking to upskill.",
    image: userImg,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="testimonials">
      {/* Left Section: Heading */}
      <div className="testimonial-left">
        <h2>
          What They Say About <br /> <span>Edutech Courses</span>
        </h2>
        <p>Edutech has been trusted by more than 10,000 students</p>
      </div>

      {/* Right Section: Testimonial Content */}
      <div className="testimonial-right">
        <p className="testimonial-text">
          "{testimonials[currentIndex].text}"
        </p>
        <div className="testimonial-user">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <span>{testimonials[currentIndex].name}</span>
        </div>

        {/* Dots for Navigation */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <FaCircle
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
