import React from 'react';
import Image1 from "../assets/Images1.jpeg";
import Image2 from "../assets/Images2.jpeg";
import Image3 from "../assets/Images3.jpeg";

const posts = [
  {
    id: 1,
    date: '21 Feb 2025',
    title: 'An Easy Way to Start Learning Programming - EduTech Solutions',
    content: 'Becoming a programmer has become quite simple for anyone to learn nowadays...',
    image: Image1,
  },
  {
    id: 2,
    date: '18 Feb 2024',
    title: 'Tips for Creating a Business Landing Page - EduTech',
    content: 'The importance of a website in fostering trust in a business makes ...',
    image: Image2,
  },
  {
    id: 3,
    date: '19 Feb 2024',
    title: 'How to Install a WordPress for Beginners - EduTech',
    content: 'Creating a website can now be done without coding; now you can make it ...',
    image: Image3,
  }
];

const BlogPost = ({ post }) => {
    return (
      <div className="border rounded-lg shadow-lg p-4 transition-transform duration-200 hover:shadow-xl hover:bg-gray-100 transform hover:-translate-y-1">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
        <p className="text-gray-500">{post.date}</p>
        <p className="mt-2">{post.content.substring(0, 100)}...</p>
        <button className="text-black-500 hover:underline mt-2">Read more →</button>
      </div>
    );
  };

  const Blog = () => {
    return (
      <div className="container mx-auto my-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Blog, News, and Events</h1>
          <button className="text-black-600 hover:underline">See All →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  };

export default Blog;