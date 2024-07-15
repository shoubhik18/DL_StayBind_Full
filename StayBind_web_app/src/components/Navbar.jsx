// import React from "react";
// import logo from "../assets/Subtract.png";

// const Navbar = () => {
//   return (
//     <div>
//       <div className="flex justify-between  items-center py-4 px-8">
//         <div className="flex space-x-6 items-center">
//           <img src={logo} alt="" className="h-12" />
//           <h1 className="text-3xl font-bold text-gray-600 ">Stay Bind</h1>
//         </div>
//         <div className="flex space-x-6 items-center">
//           <a className="text-gray-500" href="">Home</a>
//           <a className="text-gray-500" href="">Features</a>
//           <a className="text-gray-500" href="">Dashboard</a>
//           <a className="text-gray-500" href="">Faq</a>
//           <a className="text-gray-500" href="">About</a>
//         </div>
//         <div className="flex space-x-6 items-center ">
//           <button className="btn  border-black border-2 py-2 px-4 rounded-md font-medium ">Sign in</button>
//           <button className="btn border-blue-500  border-2 py-2 px-4 rounded-md font-medium text-white bg-blue-500 ">Sign up</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/Subtract.png";
import LeadForm from "./LeadForm";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleSignInClick = () => {
    setIsSignUpVisible(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpVisible(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-12 fixed w-full bg-white top-0 z-50 ">
        <div className="flex space-x-4 items-center">
          <img src={logo} alt="Stay Bind Logo" className="h-12" />
          <h1 className="text-3xl font-bold text-gray-600">StayBind</h1>
        </div>
        <div className="flex space-x-6 items-center">
          {["Home", "Features", "Download", "Faq", "About"].map((link) => (
            <a
              key={link}
              className={`cursor-pointer ${
                activeLink === link ? "text-black font-medium" : "text-gray-500"
              }`}
              href={`#${link.toLowerCase()}`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex space-x-6 items-center">
          <button onClick={handleSignInClick} className="btn border-black border-2 py-2 px-4 rounded-md font-medium hover:bg-gray-200">
            Sign in
          </button>
          <button
            onClick={handleSignInClick}
            className="btn border-blue-500 border-2 py-2 px-4 rounded-md font-medium text-white bg-blue-500 hover:bg-blue-600 hover:border-blue-600 "
          >
            Sign up
          </button>
        </div>
      </div>
      {isSignUpVisible && <LeadForm onClose={handleCloseSignUp} />}
    </div>
  );
};

export default Navbar;
