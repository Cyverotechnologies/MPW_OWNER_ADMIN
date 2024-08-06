import React from "react";

const Manage_Floors = () => {
  return (
    <>
     
      <section className=" mx-5 lg:mx-12 py-6">
        <div className="mb-10">
          <button className="px-4 py-2 sm:text-xl rounded-md font-semibold bg-slate-500 text-white">
            My properties - Manage Floors{" "}
          </button>
        </div>
        <div className="max-w-[400px] flex justify-between items-center mb-7">
          <h2 className="sm:text-xl ">Select Property</h2>
          <select className="border-2 focus:outline-none px-3 py-1 w-36">
            <option value="">Ankit PG</option>
          </select>
        </div>
        <div className="max-w-[400px] flex justify-between items-center mb-7">
          <h2 className="sm:text-xl ">Select Bock</h2>
          <select className="border-2 focus:outline-none px-3 py-1 w-36">
            <option value="">A (Kailash)</option>
          </select>
        </div>
        <div>
          <h2 className="text-2xl  font-bold mb-3">Floors Available </h2>
          <ul className="mb-5">
            <li className="font-semibold text-xl">0</li>
            <li className="font-semibold text-xl">1</li>
            <li className="font-semibold text-xl">2</li>
            <li className="font-semibold text-xl">3</li>
          </ul>
          <button className="px-4 py-2 bg-red-800 text-white">
            Add More Floors
          </button>
        </div>
      </section>
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

export default Manage_Floors;