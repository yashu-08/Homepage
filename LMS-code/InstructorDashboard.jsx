import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import ProfileDashboard from "../assets/user1.png";
import UserProfile from "../assets/user1.png";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale
);

const Dashboard = () => {
  const revenueData = {
    labels: ["Aug 01", "Aug 02", "Aug 03", "Aug 04", "Aug 05", "Aug 06", "Aug 07"],
    datasets: [
      {
        label: "Revenue",
        data: [500, 1000, 700, 1200, 1500, 900, 1769],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const profileViewData = {
    labels: ["Aug 01", "Aug 02", "Aug 03", "Aug 04", "Aug 05", "Aug 06", "Aug 07"],
    datasets: [
      {
        label: "Profile Views",
        data: [300, 400, 200, 600, 500, 700, 7443],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const [progressPercentage, setProgressPercentage] = useState(75);
  const [steps, setSteps] = useState(2);

  useEffect(() => {
    setSteps(Math.round((progressPercentage / 100) * 4));
    return () => {
      if (window.myChart) {
        window.myChart.destroy();
      }
    };
  }, [progressPercentage]);

  const ratingData = {
    labels: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
    datasets: [
      {
        label: "Ratings",
        data: [56, 37, 8, 1, 1],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const ratingOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const courseOverviewData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Views",
        data: [100, 150, 200, 180, 220, 250, 300],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "Enrollments",
        data: [50, 70, 100, 90, 120, 150, 180],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const courseOverviewOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#1E1E50] text-white p-5 h-auto md:h-screen sticky top-0">
        <div className="p-4 font-bold text-lg border-b border-gray-700">
          E-tutor
        </div>
        <nav className="mt-5">
          <ul>
            <li className="p-4 hover:bg-yellow-700 rounded-md">
              <a href="#">Dashboard</a>
            </li>
            <li className="p-4 hover:bg-yellow-700 rounded-md">
              <a href="#">Create New Course</a>
            </li>
            <li className="p-4 hover:bg-yellow-700 rounded-md">
              <a href="#">My Courses</a>
            </li>
            <li className="p-4 hover:bg-yellow-700 rounded-md">
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col p-4">
        {/* Top Navigation */}
        <header className="bg-white p-4 flex justify-between items-center shadow">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold mr-8">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <img
              src={'User Profile'}
              alt="User  Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </div>
        </header>

        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-3xl">957</div>
              <div>Enrolled Courses</div>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-3xl">19</div>
              <div>Active Courses</div>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-3xl">241</div>
              <div>Course Instructors</div>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-3xl">$7,461,767</div>
              <div>Total Earnings</div>
            </div>
          </div>

          <div className="bg-[#1E1E50] p-6 shadow rounded-lg mt-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src={ProfileDashboard}
                  alt="Vako Shvili"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-white">Vako Shvili</div>
                  <div className="text-sm text-white">vako.shvili@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-white">{steps}/4 Steps</div>
                <div className="mr-3 text-white flex items-center">
                  <div className="bg-gray-700 rounded-full h-4 w-24 mr-2">
                    <div
                      className="bg-green-500 rounded-full h-4"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  {progressPercentage}% Completed
                </div>
                <button className="bg-[#FF6600] hover:bg-[#CC5200] text-white font-bold py-2 px-4 rounded">
                  Edit Biography
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 shadow rounded-lg mb-4">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-bold">Recent Activity</h3>
              <div className="text-blue-600">View All</div>
            </div>
            <div>
              <div>
                Kevin comments on your lecture "What is UX in 2021" - Just now
              </div>
              <div>
                John gives a 5-star rating on your course "2021 UX Design" - 5 min
                ago
              </div>
              <div>
                Sraboni purchases your course "2021 UX Design" - 6 min ago
              </div>
              <div>Arif purchases your course "2021 UX Design" - 7 min ago</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-bold">Revenue</h3>
              <div className="flex justify-between mb-4">
                <div>This Month</div>
                <div className="text-lg font-semibold">$1,769</div>
              </div>
              <Line data={revenueData} options={options} height={300} />
            </div>

            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-bold">Profile View</h3>
              <div className="flex justify-between mb-4">
                <div>Today</div>
                <div className="text-lg font-semibold">7,443</div>
              </div>
              <Line data={profileViewData} options={options} height={300} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-bold">Overall Course Rating</h3>
              <div className="mt-2">
                <div className="text-3xl">4.6</div>
                <div>Overall Rating</div>
                <div className="mt-4">
                  {/* 5 Star */}
                  <div className="flex items-center mb-2">
                    <div className="mr-2">★★★★★ 5 Star</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <div className="ml-3">75%</div>
                  </div>
                  {/* 4 Star */}
                  <div className="flex items-center mb-2">
                    <div className="mr-2">★★★★☆ 4 Star</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <div className="ml-3">60%</div>
                  </div>
                  {/* 3 Star */}
                  <div className="flex items-center mb-2">
                    <div className="mr-2">★★★☆☆ 3 Star</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <div className="ml-3">50%</div>
                  </div>
                  {/* 2 Star */}
                  <div className="flex items-center mb-2">
                    <div className="mr-2">★★☆☆☆ 2 Star</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                    <div className="ml-3">25%</div>
                  </div>
                  {/* 1 Star */}
                  <div className="flex items-center mb-2">
                    <div className="mr-2">★☆☆☆☆ 1 Star</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="ml-3">0%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-lg font-bold">Course Overview</h3>
              <Line
                data={courseOverviewData}
                options={courseOverviewOptions}
                height={200}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
