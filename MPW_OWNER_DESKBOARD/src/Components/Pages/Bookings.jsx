import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import { FiPlus } from "react-icons/fi";
import image_1 from "../../assets/image-1.jpeg";
import image_2 from "../../assets/image-2.jpeg";
import image_3 from "../../assets/image-3.jpeg";
import image_4 from "../../assets/image-4.jpeg";

const userData = [
  {
    url: image_1,
    name: "David",
    details: {
      city: "Greater Noida",
      phone: "1223444",
      email: "david@gmail.com",
    },
  },
  {
    url: image_2,
    name: "Sultan",
    details: { city: "City B", phone: "1234567", email: "sultan@gmail.com" },
  },
  {
    url: image_3,
    name: "Arvaj",
    details: { city: "City C", phone: "2345678", email: "arvaj@gmail.com" },
  },
  {
    url: image_4,
    name: "Anees",
    details: { city: "City D", phone: "3456789", email: "anees@gmail.com" },
  },
];

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5 ">
        <img
          src={user.url}
          alt={user.name}
          className="w-[100px] h-[100px] rounded-full object-cover"
        />
      </div>
      <div className="text-center cursor-pointer relative group ">
        <div className="">
          <p className="font-semibold  ">{user.name}</p>
        </div>
        <div className="absolute p-2 rounded z-50 sm:w-[200px] w-[180px] sm:left-0 left-[-80px]  border bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-around ">
            {Object.entries(user.details).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between w-full mb-2"
              >
                <p className="font-bold capitalize">{key}:</p>
                <p className="text-xs">{value}</p>
              </div>
            ))}
            <div className="flex justify-around mt-4">
              <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 mx-2">
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className="mb-4 px-5">
        <button className="px-8 py-3 bg-slate-500 sm:text-2xl text-xl font-bold text-white rounded-md">
          Active Booking
        </button>
      </div>
      <section className="relative px-4 mt-5">
        <div className="max-w-[600px] grid sm:grid-cols-5 grid-cols-2 gap-x-4 sm:gap-y-0 gap-y-[100px]">
          {userData.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
          <div className="flex items-center justify-center w-full">
            <div
              className="w-[50px] h-[50px] flex items-center justify-center bg-red-800 rounded-full cursor-pointer"
              onClick={toggleForm}
            >
              <FiPlus className="text-4xl text-white" />
            </div>
          </div>
        </div>

        {/* PopUp Form */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="w-full max-w-md mx-4 sm:mx-8 bg-white p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-4 right-4 text-2xl rounded-full font-bold"
                onClick={toggleForm}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">New Booking</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Number"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
                />
                <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-md">
                  <option value="">Select</option>
                </select>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Bookings;