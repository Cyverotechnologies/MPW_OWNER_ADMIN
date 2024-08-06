import React, { useState, useEffect, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import image_1 from "../../../assets/image-1.jpeg";
import image_2 from "../../../assets/image-2.jpeg";
import image_3 from "../../../assets/image-3.jpeg";
import image_4 from "../../../assets/image-4.jpeg";

const userData = [
  { url: image_1, name: "David" },
  { url: image_2, name: "Sultan" },
  { url: image_3, name: "Arvaj" },
  { url: image_4, name: "Anees" },
  { url: image_1, name: "David" },
  { url: image_1, name: "David" },
  { url: image_1, name: "David" },

];

const FormInput = ({ type, placeholder }) => (
  <div className="px-4 mb-2">
    <input
      type={type}
      className="w-full py-2 border-2 border-black focus:outline-none px-2 rounded-md"
      placeholder={placeholder}
    />
  </div>
);

const FormSelect = ({ options }) => (
  <div className="px-4 mb-2">
    <select className="w-full py-2 border-2 border-black focus:outline-none px-2 rounded-md">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Add_Property = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const handleIconClick = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const handlePlusClick = () => {
    setFormVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      formRef.current &&
      !formRef.current.contains(event.target)
    ) {
      setVisibleIndex(null);
      setFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>

      <div className="sm:max-w-[80%] w-full px-5 py-6 rounded-lg lg:px-10">
        <div className="mb-6">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg sm:text-xl">
            My Properties - Manage Properties - Add New Property - Staff
          </button>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-black px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="flex gap-6 mb-10">
          <div className="max-w-[600px] h-[400px] overflow-y-scroll grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-x-3 gap-y-4 px-3">
            {userData.map((item, index) => (
              <div key={index} className="relative mb-5 ">
                <img
                  src={item.url}
                  alt=""
                  className="w-[90px]  h-[90px] object-cover rounded-full mx-auto"
                />
                <div
                  onClick={() => handleIconClick(index)}
                  className="absolute top-14 right-0 text-white cursor-pointer w-[25px] h-[25px] flex items-center justify-center bg-red-600 rounded-full"
                >
                  <FiPlus />
                </div>
                {visibleIndex === index && (
                  <div
                    ref={containerRef}
                    className="absolute w-[100px] h-[100px] z-50 bg-white shadow-2xl rounded-lg top-[120px] border left-1/2 transform -translate-x-1/2 flex flex-col gap-y-2 justify-center items-center"
                  >
                    <span className="text-blue-500 border-b border-blue-400 cursor-pointer">
                      Edit
                    </span>
                    <span className="text-blue-500 border-b border-blue-400 cursor-pointer">
                      Delete
                    </span>
                  </div>
                )}
                <p className="text-center mt-2">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <FiPlus
              className="text-7xl font-bold text-red-500 cursor-pointer"
              onClick={handlePlusClick}
            />
          </div>
        </div>

        {formVisible && (
          <div
            ref={formRef}
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-[500] "
          >
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-lg mx-4 md:mx-0 transform transition-all duration-300 relative h-[500px] overflow-y-scroll scrollbar-none ">
              <h2 className="my-3 text-center font-semibold text-2xl">
                Add New Staff
              </h2>
              <form className="">
                <FormSelect options={[{ value: "1", label: "Option 1" }]} />
                <FormInput type="text" placeholder="Enter Full Name" />
                <FormInput type="text" placeholder="Staff ID" />
                <FormInput type="text" placeholder="Enter Full Address" />
                <FormInput type="text" placeholder="Enter Number" />
                <FormInput type="email" placeholder="Enter Email" />
                <FormSelect options={[{ value: "1", label: "Select Role" }]} />
                <FormInput type="text" placeholder="Enter Monthly Salary" />
                <FormInput type="text" placeholder="Enter Aadhar Number" />
                <FormInput type="text" placeholder="Enter PAN Number" />
                <div className="px-4 py-2 flex gap-x-8 mb-2">
                  <button className="px-2 py-2  bg-red-900 text-white rounded-md">
                    Update Aadhaar
                  </button>
                  <button className="px-2 py-2 bg-red-900 text-white rounded-md">
                    Update PAN
                  </button>
                </div>
                <div className="px-4 mb-2">
                  <button className="px-2 py-2 border-red-900 border text-red-900 rounded-md w-full">
                    Update Aadhaar
                  </button>
                </div>
              </form>
              <button
                onClick={() => setFormVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="max-w-[600px]">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-4">
            <button className="px-5 py-2 bg-slate-500 text-white text-xl rounded-md">
              Emergency Coll...
            </button>
            <button className="px-5 py-2 bg-slate-500 text-white text-xl rounded-md">
              Daily Help
            </button>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-4">
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="border-2 border-slate-500 p-1">
                  <div className="border px-2 py-2">
                    <h2 className="mb-3 text-xl font-semibold text-center">
                      Police, Ambulance, Fire...
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                      {Array(10)
                        .fill(null)
                        .map((_, i) => (
                          <div key={i} className="border px-1 py-[2px]">
                            Lorem, ipsum.
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-4 gap-5">
        <button
          className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base"
          onClick={() => history.back()}
        >
          Back
        </button>
        <button className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base">
          Save
        </button>
      </div>
    </>
  );
};

export default Add_Property;