import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Search, Bell, Settings, User } from 'lucide-react';
import loginStats from '../assets/login_stats.png';
import courseView from '../assets/course_view.png';
import interactionRate from '../assets/interaction_rate.png';
import currentenroll from '../assets/current_enroll.png';
import coursedropout from '../assets/course_dropout_rate.png';
import revenueChart from '../assets/monthly_revenue.png';



const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-3 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-lg font-bold">[EdTech Solution]</h1>
          <nav className="ml-8">
            <ul className="flex space-x-4">
              <li className="font-semibold">Dashboard</li>
              <li className="text-gray-300">Reports</li>
              <li className="text-gray-300">Analytics</li>
              <li className="text-gray-300">Settings</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-1 px-3 pr-8 rounded text-sm text-black"
            />
            <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-500" />
          </div>
          <Bell className="h-5 w-5" />
          <Settings className="h-5 w-5" />
          <User className="h-5 w-5" />
        </div>
      </header>
  
      {/* Main Content */}
      <main className="p-6">
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Card 1 - Login Stats */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="h-32 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
              <img src={loginStats} alt="Login stats chart" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">Login Stats</h3>
            <p className="text-sm text-gray-600">Weekly logins increased by 15%</p>
            <p className="text-xs text-gray-500">Last activity: 2 hours ago</p>
            <button className="mt-2 bg-indigo-600 text-white py-1 px-4 rounded text-sm">
              Download Report
            </button>
          </div>
  
          {/* Card 2 - Course Views */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="h-32 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
              <img src={courseView} alt="Course views chart" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">Course Views</h3>
            <p className="text-sm text-gray-600">Engagement up by 20%</p>
            <p className="text-xs text-gray-500">Most active day: Monday</p>
          </div>
  
          {/* Card 3 - Interaction Rate */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="h-32 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
              <img src={interactionRate} alt="Interaction rate chart" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">Interaction Rate</h3>
            <p className="text-sm text-gray-600">Increased interactions by 25%</p>
            <p className="text-xs text-gray-500">Last compared: 2 days ago</p>
            
            {/* Pagination */}
            <div className="flex items-center justify-center mt-2">
              <button className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-1">1</button>
              <button className="h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-1">2</button>
              <button className="h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-1">3</button>
              <button className="h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-1">4</button>
              <button className="h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-1">5</button>
              <button className="h-6 w-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-1">6</button>
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Center content container */}
        <div className="flex flex-col items-center mb-8">
          {/* Current Enrollment Section */}
          <div className="w-full max-w-md mb-8">
            <h2 className="text-lg font-semibold mb-1 text-center">Current Enrollment - 46 Students</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Historical Enrollment Trends</p>
            
            <div className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                <img src={currentenroll} alt="Enrollment trends chart" className="w-full h-full object-cover rounded" />
              </div>
            </div>
          </div>

          {/* Course Drop-out Rates Section */}
          <div className="w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4 text-center">Course Drop-out Rates</h2>
            
            <div className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <img src={coursedropout} alt="Drop-out rates heatmap" className="w-full h-full object-cover rounded" />
              </div>
              
              <p className="text-sm text-gray-700">
                Based on the analysis, consider the following suggestions to improve course 
                engagement and completion rates: Enhance course content interactivity, increase 
                the number of assessments to gauge understanding, and provide additional resources 
                for challenging topics.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center"></div>
        
        
  <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-[700px]">
  {/* Grid Container - Side by Side Layout */}
  <div className="grid grid-cols-2 gap-3 items-start">
    
    {/* Total Revenue - Slightly Larger */}
    <div className="p-3 bg-gray-50 rounded-lg shadow-sm flex flex-col items-start w-full">
      <h3 className="text-base font-medium text-gray-700">Total Revenue</h3>
      <p className="text-xl font-bold my-0">$30,000</p>
      <p className="text-sm text-gray-500">Previous Month: $25,000</p>
      <button className="bg-indigo-600 text-white py-1 px-3 rounded text-xs w-24">
        Download
      </button>
    </div>

    {/* Monthly Revenue - Slightly Larger */}
    <div className="p-3 bg-gray-50 rounded-lg shadow-sm flex flex-col items-start w-full">
      <h3 className="text-base font-medium text-gray-700">Monthly Revenue</h3>
      <img
        src={revenueChart}
        alt="Monthly Revenue Chart"
        className="w-full max-w-[180px] rounded-lg shadow-md my-1"
      />
      <button className="bg-indigo-600 text-white py-1 px-3 rounded text-xs w-24">
        Download
      </button>
    </div>

  </div>
</div>


      {/* Tabs */}
<div className="border-b pb-2 mb-2 mt-3"> 
  <ul className="flex space-x-20 text-sm">
    <li className="font-medium text-indigo-600 cursor-pointer">Manage Subscription</li>
    <li className="font-medium text-indigo-600 cursor-pointer">Course Revenue</li>
    <li className="font-medium text-indigo-600 cursor-pointer">Transaction History</li>
  </ul>
</div>

      {/* Course Revenue Table */}
      <table className="w-full text-sm border-collapse mb-6">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="py-3">Course Name</th>
            <th className="py-3">User</th>
            <th className="py-3">Transaction Date</th>
            <th className="py-3">Amount</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {["Introduction to Python", "Data Science 101", "Web Development Bootcamp"].map((course, index) => (
            <tr key={index} className="border-b">
              <td className="py-3">{course}</td>
              <td>John Doe</td>
              <td>2023-10-0{index + 1}</td>
              <td></td>
              <td>
                <button className="bg-indigo-600 text-white py-1 px-3 rounded text-xs">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Subscription Table */}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="py-3">Subscription ID</th>
            <th className="py-3">User Name</th>
            <th className="py-3">User Type</th>
            <th className="py-3">Payment Method</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {["SUB-001", "SUB-002", "SUB-003"].map((sub, index) => (
            <tr key={index} className="border-b">
              <td className="py-3">{sub}</td>
              <td>{["John Doe", "Jane Smith", "Michael Johnson"][index]}</td>
              <td>
  <div className={`h-6 w-6 rounded-full ${index === 2 ? 'bg-green-500' : 'bg-purple-500'}`}></div>
</td>

              <td>{["Credit Card", "PayPal", "Bank Transfer"][index]}</td>
              <td className="flex items-center">
                <span className="mr-2">{index !== 1 ? "Active" : "Inactive"}</span>
                <ChevronDown className="h-4 w-4" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="p-4">
  {/* Instructor Performance Section */}
  <h2 className="text-lg font-semibold mb-2">Instructor Performance</h2>
  
  <p className="text-sm mb-1">Effectiveness Ratings</p>
  <p className="text-sm mb-4">Feedback Summary</p>

  {/* Student Engagement Section */}
  <h2 className="text-lg font-semibold mb-2">Student Engagement</h2>
  
  <p className="text-sm mb-1">Participation</p>
  <p className="text-sm mb-1">Statistics</p>
  <p className="text-sm">Assessment Feedback</p>
</div>

<div className="p-6">
  {/* Header Section */}
  <div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl font-semibold">System-wide Notifications</h2>
  <button className="bg-indigo-600 text-white py-2 px-5 rounded-lg text-sm ml-auto w-fit">
    Mark all as read
  </button>
</div>

  {/* Notifications Grid (2 Columns) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold">Security Alert</h3>
        <p className="text-gray-600">Unauthorized login attempt detected.</p>
        <p className="text-xs text-gray-500 mt-1">2 mins ago</p>
      </div>

      <div>
        <h3 className="font-semibold">New User Added</h3>
        <p className="text-gray-600">John Doe was added to the admin group.</p>
        <p className="text-xs text-gray-500 mt-1">30 mins ago</p>
      </div>

      <div>
        <h3 className="font-semibold">Backup Completed</h3>
        <p className="text-gray-600">The weekly backup was completed.</p>
        <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
      </div>

      <div>
        <h3 className="font-semibold">New Feature</h3>
        <p className="text-gray-600">Dark mode is now available.</p>
        <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
      </div>

      <div>
        <h3 className="font-semibold">New Policy</h3>
        <p className="text-gray-600">Updated privacy policy is now in effect.</p>
        <p className="text-xs text-gray-500 mt-1">8 hours ago</p>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold">System Update</h3>
        <p className="text-gray-600">Scheduled maintenance at midnight.</p>
        <p className="text-xs text-gray-500 mt-1">15 mins ago</p>
      </div>

      <div>
        <h3 className="font-semibold">Password Change</h3>
        <p className="text-gray-600">Your password was changed successfully.</p>
        <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
      </div>

      <div>
        <h3 className="font-semibold">Server Reboot</h3>
        <p className="text-gray-600">Server will reboot in 5 mins.</p>
        <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
      </div>

      <div>
        <h3 className="font-semibold">Critical Error</h3>
        <p className="text-gray-600">Database connection failed.</p>
        <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
      </div>

      <div>
        <h3 className="font-semibold">Service Restored</h3>
        <p className="text-gray-600">Email service is back online.</p>
        <p className="text-xs text-gray-500 mt-1">10 hours ago</p>
      </div>
    </div>
  </div>


        </div>
      </main>
      <footer className="border-t py-3 px-6 flex justify-end items-center text-sm text-gray-600">
  <div className="flex space-x-4 ">
    <p>Filters:</p>
    <button className="text-indigo-600 font-medium bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">All</button>
    <button className="text-gray-800 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">Comments</button>
    <button className="text-gray-800 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">Assignments</button>
  </div>
</footer>


    </div>
  );
};

export default Dashboard;