import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuPencilLine } from "react-icons/lu";

// Define a functional component for the SelectInput to reduce redundancy
const SelectInput = ({ options, value, onChange, className }) => (
  <div className={`relative ${className}`}>
    <select
      value={value}
      onChange={onChange}
      className="block w-full border-2 px-2 py-1  outline-none appearance-none cursor-pointer text-[15px]"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <IoIosArrowDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-lg pointer-events-none" />
  </div>
);

const Manage_Block = () => {
  // Define options for select inputs
  const propertyOptions = [{ value: "Ankit PG", label: "Ankit PG" }];
  const blockOptions = [
    { value: "Ankit PG", label: "Ankit PG" },
    { value: "Sam PG", label: "Sam PG" },
    { value: "Yunush PG", label: "Yunush PG" },
  ];

  return (
    <>

      <section className="w-full">
        <div className="mx-5 lg:mx-12 py-6 rounded-lg bg-white ">
          <div className="mb-4">
            <button className="px-4 py-2 font-semibold text-white bg-slate-400 rounded-lg text-lg sm:text-xl">
              My Properties - Manage Blocks
            </button>
          </div>
          <div className="mt-12">
            <div className="flex gap-14 sm:gap-20 text-nowrap">
              <h3 className="text-md lg:text-lg">Select Property</h3>
              <SelectInput options={propertyOptions} className="w-32" />
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-xl">Blocks Available</h3>
              {["Block A", "Block B", "Block C"].map((block, index) => (
                <div
                  key={index}
                  className="flex gap-14 lg:gap-20 mt-4 text-nowrap items-center"
                >
                  <h3 className="text-md sm:text-lg">{block}</h3>
                  <div className="flex items-center text-lg gap-10 cursor-pointer">
                    <SelectInput
                      options={blockOptions}
                      className="w-24 lg:w-28"
                    />
                    <LuPencilLine size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-4 gap-5" >
          <button
            className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base"
            onClick={() => history.back()}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base"
          >
            Save
          </button>
        </div>
      </section>
    </>
  );
};

export default Manage_Block;