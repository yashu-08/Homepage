import React, { useState } from 'react';
import { FaClock, FaVideo, FaUser  } from 'react-icons/fa';
import courseRecom1 from "../assets/course_recom1.jpeg";
import courseRecom2 from "../assets/course_recom2.jpeg";
import courseRecom3 from "../assets/course_recom3.jpeg";

const CourseRecommendations = () => {
  const courses = [
    {
      title: 'Basics of Web Programming',
      description: 'Learning materials on website creation for beginners',
      duration: '4.5 Hours',
      videos: '20 Video',
      students: '1,900 Students',
      rating: '4.9',
      image: courseRecom1,
      category: 'Programming',
    },
    {
      title: 'Digital Marketing 101',
      description: 'Materials on beginner strategies and concepts of marketing',
      duration: '6.2 Hours',
      videos: '32 Video',
      students: '930 Students',
      rating: '4.9',
      image: courseRecom2,
      category: 'Marketing',
    },
    {
      title: 'Data Science Fundamentals',
      description: 'Educational content about the basics of data science',
      duration: '8 Hours',
      videos: '46 Video',
      students: '1,043 Students',
      rating: '4.9',
      image: courseRecom3,
      category: 'Data Science',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-white">
      <div className="flex justify-between items-baseline flex-wrap mb-5">
        <h2 className="text-2xl font-bold flex-1">Course Recommendations for <span className="text-orange-500">You</span></h2>
        <div className="flex items-center gap-2 bg-white-500 p-2 rounded-md flex-wrap justify-end">
          <select value={selectedCategory} onChange={handleCategoryChange} className="p-2 rounded border border-gray-300 text-black text-sm flex-grow max-w-xs min-w-[150px]">
            <option value="">Category</option>
            <option value="Programming">Programming</option>
            <option value="Marketing">Marketing</option>
            <option value="Data Science">Data Science</option>
          </select>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">See All</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course, index) => (
          <div className="bg-white-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:translate-y-[-5px]" key={index}>
            <div className="relative w-full h-48">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-t-lg" />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">{`★ ${course.rating}`}</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{course.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span className="flex items-center"><FaClock className="mr-1 text-orange-500" /> {course.duration}</span>
                <span className="flex items-center"><FaVideo className="mr-1 text-orange-500" /> {course.videos}</span>
                <span className="flex items-center"><FaUser  className="mr-1 text-orange-500" /> {course.students}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRecommendations;