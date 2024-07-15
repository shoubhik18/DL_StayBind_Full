
// import React, { useState } from "react";
// import iphone from "../assets/iPhone.png";
// import { FaRegPlayCircle } from "react-icons/fa";
// import group from "../assets/Group.png";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';

// const Home = () => {
//   const [activeSection, setActiveSection] = useState("Home");

//   const renderContent = () => {
//     switch (activeSection) {
//       case "Home":
//         return (
//           <div className="flex justify-center items-center w-[550px]">
//             <img className="h-[90vh] w-[100vw]" src={iphone} alt="" />
//           </div>
//         );
//       case "Calendar":
//         return (
//           <div className="flex justify-center items-center w-[400px]">
//             <div className="p-10">
//               <h2 className="text-2xl font-bold">Calendar</h2>
//               <Calendar className="mt-4" />
//             </div>
//           </div>
//         );
//       case "Pricing":
//         return (
//           <div className="flex justify-center items-center w-[400px]">
//             <div className="p-10">
//               <h2 className="text-2xl font-bold">Pricing</h2>
//               <p className="mt-4">No data available</p>
//             </div>
//           </div>
//         );
//       case "Worker":
//         return (
//           <div className="flex justify-center items-center w-[400px]">
//             <div className="p-10">
//               <h2 className="text-2xl font-bold">Worker</h2>
//               <p className="mt-4">No data available</p>
//             </div>
//           </div>
//         );
//       case "Profile":
//         return (
//           <div className="flex justify-center items-center w-[400px]">
//             <div className="p-10">
//               <h2 className="text-2xl font-bold">Profile</h2>
//               <p className="mt-4">Please sign in</p>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="flex mt-12">
//         <div className="p-24 ">
//           <h1 className="text-3xl md:text-5xl font-extrabold text-gray-700 md:leading-normal">
//             Rent out your <br /> holiday home like  <br /> a pro with{" "}
//             <span className="text-blue-500">StayBind</span>
//           </h1>
//           <p className="text-sm text-gray-500 mb-6 pt-4">
//             Put the most advanced technology to work for you. Manage, <br />
//              automate,
//             and streamline your business, all from one platform.
//           </p>
//           <div className="flex p-2 mt-10 items-center space-x-8">
//             <button className="px-5 py-3 text-sm text-white bg-blue-500 rounded-sm">
//               Get started
//             </button>
//             <div className="flex text-4xl font-light items-center space-x-2 cursor-pointer">
//               <FaRegPlayCircle />
//               <p className="text-base">Watch Video</p>
//             </div>
//           </div>
//           <div className="flex p-2 mt-8 space-x-12">
//             <div className="text-center">
//               <h2 className="text-4xl text-gray-700 font-semibold tracking-wider">
//                 321%
//               </h2>
//               <p className="text-gray-400 text-xs">Occupancy Rate</p>
//             </div>
//             <div className="text-center">
//               <h2 className="text-4xl text-gray-700 font-semibold tracking-wider">
//                 25k
//               </h2>
//               <p className="text-gray-400 text-xs">Revenue</p>
//             </div>
//             <div className="text-center">
//               <h2 className="text-4xl text-gray-700 font-semibold tracking-wider">
//                 150+
//               </h2>
//               <p className="text-gray-400 text-xs">Bookings</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-grow flex justify-center items-center">
//           {renderContent()}
//         </div>
//         <div className="flex flex-col p-20 space-y-4">
//           <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Home")}>
//             <p className="text-gray-400">01</p>
//             <h3 className={`font-extrabold ${activeSection === "Home" && "text-blue-500"}`}>Home</h3>
//           </div>
//           <div className="bg-gray-300 w-0.5 h-14"></div>
//           <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Calendar")}>
//             <p className="text-gray-400">02</p>
//             <h3 className={`font-extrabold ${activeSection === "Calendar" && "text-blue-500"}`}>Calendar</h3>
//           </div>
//           <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Pricing")}>
//             <p className="text-gray-400">03</p>
//             <h3 className={`font-extrabold ${activeSection === "Pricing" && "text-blue-500"}`}>Pricing</h3>
//           </div>
//           <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Worker")}>
//             <p className="text-gray-400">04</p>
//             <h3 className={`font-extrabold ${activeSection === "Worker" && "text-blue-500"}`}>Worker</h3>
//           </div>
//           <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Profile")}>
//             <p className="text-gray-400">05</p>
//             <h3 className={`font-extrabold ${activeSection === "Profile" && "text-blue-500"}`}>Profile</h3>
//           </div>
//         </div>
        
//       </div>
//       <img className="p-14" src={group} alt="" />
//       <div className="mt-10">
//         <div className="relative overflow-hidden h-12 bg-black transform -rotate-3">
//           <div className="absolute top-3 left-0 animate-scroll whitespace-nowrap">
//             <span className="text-white mx-4">
//               Something great is on the way . . . . Coming Soon !! *
//             </span>
//             <span className="text-white mx-4">
//               Something great is on the way . . . . Coming Soon !! *
//             </span>
//             <span className="text-white mx-4">
//               Something great is on the way . . . . Coming Soon !! *
//             </span>
//             <span className="text-white mx-4">
//               Something great is on the way . . . . Coming Soon !!
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from "react";
import iphone from "../assets/iPhone.png";
import { FaRegPlayCircle } from "react-icons/fa";
import group from "../assets/Group.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return (
          <div className="flex justify-center items-center w-[550px]">
            <img className="h-[90vh] w-[100vw]" src={iphone} alt="" />
          </div>
        );
      case "Calendar":
        return (
          <div className="flex justify-center items-center w-[400px]">
            <div className="p-10">
              <h2 className="text-2xl font-bold">Calendar</h2>
              <Calendar className="mt-4" />
            </div>
          </div>
        );
      case "Pricing":
        return (
          <div className="flex justify-center items-center w-[400px]">
            <div className="p-10">
              <h2 className="text-2xl font-bold">Pricing</h2>
              <p className="mt-4">No data available</p>
            </div>
          </div>
        );
      case "Worker":
        return (
          <div className="flex justify-center items-center w-[400px]">
            <div className="p-10">
              <h2 className="text-2xl font-bold">Worker</h2>
              <p className="mt-4">No data available</p>
            </div>
          </div>
        );
      case "Profile":
        return (
          <div className="flex justify-center items-center w-[400px]">
            <div className="p-10">
              <h2 className="text-2xl font-bold">Profile</h2>
              <p className="mt-4">Please sign in</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex mt-12">
        <div className="p-24 ">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-700 md:leading-normal">
            Rent out your <br /> holiday home like  <br /> a pro with{" "}
            <span className="text-blue-500">StayBind</span>
          </h1>
          <p className="text-sm text-gray-500 mb-6 pt-4">
            Put the most advanced technology to work for you. Manage, <br />
             automate,
            and streamline your business, all from one platform.
          </p>
          <div className="flex p-2 mt-10 items-center space-x-8">
            <button className="px-5 py-3 text-sm text-white bg-blue-500 rounded-sm">
              Get started
            </button>
            <div className="flex text-4xl font-light items-center space-x-2 cursor-pointer">
              <FaRegPlayCircle />
              <p className="text-base">Watch Video</p>
            </div>
          </div>
          <div className="flex p-2 mt-8 space-x-12">
            <div className="text-center">
              <h2 className="text-4xl text-gray-700 font-semibold tracking-wider">
                321%
              </h2>
              <p className="text-gray-400 text-xs">Occupancy Rate</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl text-gray-700 font-semibold tracking-wider">
                25k
              </h2>
              <p className="text-gray-400 text-xs">Revenue</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl text-gray-700 font-semibold tracking-wider">
                150+
              </h2>
              <p className="text-gray-400 text-xs">Bookings</p>
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          {renderContent()}
        </div>
        <div className="flex flex-col p-20 space-y-4">
          <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Home")}>
            <p className="text-gray-400">01</p>
            <h3 className={`font-extrabold ${activeSection === "Home" && "text-blue-500"}`}>Home</h3>
          </div>
            {activeSection === "Home" && <div className="bg-gray-300 w-0.5 h-14"></div>}
          {activeSection === "Calendar" && <div className="bg-gray-300 w-0.5 h-7"></div>}
          <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Calendar")}>
            <p className="text-gray-400">02</p>
            <h3 className={`font-extrabold ${activeSection === "Calendar" && "text-blue-500"}`}>Calendar</h3>
          </div>
          {activeSection === "Calendar" && <div className="bg-gray-300 w-0.5 h-7"></div>}
          {activeSection === "Pricing" && <div className="bg-gray-300 w-0.5 h-7"></div>}
          <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Pricing")}>
            <p className="text-gray-400">03</p>
            <h3 className={`font-extrabold ${activeSection === "Pricing" && "text-blue-500"}`}>Pricing</h3>
          </div>
          {activeSection === "Pricing" && <div className="bg-gray-300 w-0.5 h-7"></div>}
          {activeSection === "Worker" && <div className="bg-gray-300 w-0.5 h-7"></div>}
          <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Worker")}>
            <p className="text-gray-400">04</p>
            <h3 className={`font-extrabold ${activeSection === "Worker" && "text-blue-500"}`}>Worker</h3>
          </div>
          {activeSection === "Worker" && <div className="bg-gray-300 w-0.5 h-7"></div>}
          {activeSection === "Profile" && <div className="bg-gray-300 w-0.5 h-14"></div>}
          <div className="flex space-x-6 cursor-pointer" onClick={() => setActiveSection("Profile")}>
            <p className="text-gray-400">05</p>
            <h3 className={`font-extrabold ${activeSection === "Profile" && "text-blue-500"}`}>Profile</h3>
          </div>
        </div>
        
      </div>
      <img className="p-14 w-full " src={group} alt="" />
      <div className="mt-10 w-full ">
        <div className="relative overflow-hidden h-12 bg-black transform -rotate-3">
          <div className="absolute top-3 left-0 animate-scroll whitespace-nowrap">
            <span className="text-white mx-4">
              Something great is on the way . . . . Coming Soon !! *
            </span>
            <span className="text-white mx-4">
              Something great is on the way . . . . Coming Soon !! *
            </span>
            <span className="text-white mx-4">
              Something great is on the way . . . . Coming Soon !! *
            </span>
            <span className="text-white mx-4">
              Something great is on the way . . . . Coming Soon !!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
