// import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { GrLocation } from "react-icons/gr";
// import { IoClose } from "react-icons/io5";
// import { submitLead } from "../features/leads/leadsApi"; // Check this path

// const LeadForm = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const { status, error } = useSelector((state) => state.leads);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobileNumber: "",
//     noOfProperties: "",
//     location: "",
//     agreedToTerms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(submitLead(formData));
//   };

//   return (
//     <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-14 rounded-lg shadow-lg w-3/6 relative">
//         <button onClick={onClose} className="absolute top-6 right-5 text-3xl hover:text-gray-700">
//           <IoClose />
//         </button>
//         <hr className="h-px mb-10 bg-gray-100 border-0 dark:bg-gray-300" />
//         <form onSubmit={handleSubmit}>
//           <div className="flex space-x-8">
//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter Name"
//                 className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 Email Id<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter Email address"
//                 className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex space-x-10">
//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 Mobile Number<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile Number"
//                 className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 No of Properties<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="noOfProperties"
//                 value={formData.noOfProperties}
//                 onChange={handleChange}
//                 placeholder="Enter No of Properties"
//                 className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4 w-3/6">
//             <label className="block text-gray-700 font-bold mb-2">
//               Location<span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 placeholder="Location"
//                 className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//               <GrLocation className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 name="agreedToTerms"
//                 checked={formData.agreedToTerms}
//                 onChange={handleChange}
//                 className=""
//                 required
//               />
//               <span className="ml-2">
//                 I agree to all the{" "}
//                 <a href="#" className="text-blue-600">
//                   Terms
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-600">
//                   Privacy policy
//                 </a>
//               </span>
//             </label>
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white px-4 py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         {status === 'loading' && <p>Loading...</p>}
//         {status === 'succeeded' && <p>Lead submitted successfully!</p>}
//         {status === 'failed' && <p>Error: {error}</p>}
//       </div>
//     </div>
//   );
// };

// export default LeadForm;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrLocation } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon
import { submitLead } from '../features/leads/leadsApi'; // Check this path
import { toast } from 'react-toastify'; // Import toast

const LeadForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.leads);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    noOfProperties: '',
    location: '',
    agreedToTerms: false,
  });

  useEffect(() => {
    if (status === 'succeeded') {
      onClose(); // Close the form on success
      toast.success('Lead submitted successfully!');
    }
    if (status === 'failed') {
      onClose(); // Close the form on success
      toast.error('Failed to submit lead');
    }
  }, [status, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitLead(formData));
  };

  return (
    <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-14 rounded-lg shadow-lg w-3/6 relative">
        <button onClick={onClose} className="absolute top-6 right-5 text-3xl hover:text-gray-700">
          <IoClose />
        </button>
        <hr className="h-px mb-10 bg-gray-100 border-0 dark:bg-gray-300" />
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-8">
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                Email Id<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email address"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="flex space-x-10">
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                No of Properties<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="noOfProperties"
                value={formData.noOfProperties}
                onChange={handleChange}
                placeholder="Enter No of Properties"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-3/6">
            <label className="block text-gray-700 font-bold mb-2">
              Location<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              <GrLocation className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className=""
                required
              />
              <span className="ml-2">
                I agree to all the{" "}
                <a href="#" className="text-blue-600">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600">
                  Privacy policy
                </a>
              </span>
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 flex justify-center items-center"
            >
              Submit
              {status === 'loading' && <FaSpinner className="ml-2 animate-spin" />}
            </button>
          </div>
        </form>
        {status === 'failed' && <p className="text-red-500 mt-4">Error: {error}</p>}
      </div>
    </div>
  );
};

export default LeadForm;
