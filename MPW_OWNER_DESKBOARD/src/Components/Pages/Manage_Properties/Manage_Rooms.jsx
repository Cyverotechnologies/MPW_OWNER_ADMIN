import React from "react";
import { FiPlus } from "react-icons/fi";

const Manage_Rooms = () => {
  return (
    <section className="w-full">
      <div className="max-w-[80%]  mx-5 lg:mx-12 py-6">
        <div className="mb-10">
          <button className="px-4 py-2 sm:text-xl  rounded-md font-semibold bg-slate-500 text-white">
            My properties - Manage Floors{" "}
          </button>
        </div>
        <div className="max-w-[400px] flex justify-between mb-7 items-center">
          <h2 className="sm:text-xl ">Select Property</h2>
          <select className="border-2 focus:outline-none px-3 py-1  w-36">
            <option value="">Ankit PG</option>
          </select>
        </div>
        <div className="max-w-[400px] flex justify-between mb-7 items-center ">
          <h2 className="sm:text-xl ">Select Bock</h2>
          <select className="border-2 focus:outline-none px-3 py-1 w-36">
            <option value="">A (Kailash)</option>
          </select>
        </div>
        <div className="max-w-[400px] flex justify-between items-center mb-[80px] ">
          <h2 className="sm:text-xl ">Select Floor</h2>
          <select className="border-2 focus:outline-none px-3 py-1 w-36">
            <option value="">1</option>
          </select>
        </div>
        <div className="max-w-[400px]">
          <h2 className="font-bold text-xl mb-10">Rooms Added </h2>
          <div className="roomsAddedContainer grid  grid-cols-4 gap-4 ">
            <div className="group -z-[999] relative">
              <h2 className="text-xl text-blue-400 border-b-2 border-blue-400 font-bold w-[50px] cursor-pointer">
                A101
              </h2>
              {/* Inside Div */}
              <div className="absolute  sm:max-w-[250px] w-[200px] h-[100px]  top-10 px-2 py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                <button className="px-4 py-2 text-white bg-slate-500 rounded-md mb-5 ">
                  A101
                </button>
                <div className="border-2 border-slate-600 px-2 py-2 rounded-md ">
                  <select
                    name=""
                    id=""
                    className="border mb-4 focus:outline-none w-full"
                  >
                    <option value="" className=" w-full">
                      Occupancy{" "}
                    </option>
                  </select>
                  <div className="flex items-center gap-x-2 mb-3">
                    <input
                      type="checkbox"
                      className={`w-5 h-5 focus:bg-red-500`}
                      id="check"
                    />
                    <label htmlFor="check">AC</label>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Bads Added </h3>
                  <div>
                    <span>Bad1</span>
                    <span className="mx-3">Bad2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group -z-[999]  relative">
              <h2 className="text-xl text-blue-400 border-b-2 border-blue-400 font-bold w-[50px] cursor-pointer">
                A102
              </h2>
              <div className="absolute sm:max-w-[250px] w-[200px] h-[100px]  top-10 px-2 py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                <button className="px-4 py-2 text-white bg-slate-500 rounded-md mb-5">
                  A101
                </button>
                <div className="border-2 border-slate-600 px-2 py-2 rounded-md ">
                  <select
                    name=""
                    id=""
                    className="border mb-4 focus:outline-none w-full"
                  >
                    <option value="" className=" w-full">
                      Occupancy{" "}
                    </option>
                  </select>
                  <div className="flex items-center gap-x-2 mb-3">
                    <input
                      type="checkbox"
                      className={`w-5 h-5 focus:bg-red-500`}
                      id="check"
                    />
                    <label htmlFor="check">AC</label>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Bads Added </h3>
                  <div>
                    <span>Bad1</span>
                    <span className="mx-3">Bad2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group -z-[999]  relative">
              <h2 className="text-xl text-blue-400 border-b-2 border-blue-400 font-bold w-[50px] cursor-pointer">
                A103
              </h2>
              <div className="absolute sm:max-w-[250px] w-[200px]  top-10 px-2 py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                <button className="px-4 py-2 text-white bg-slate-500 rounded-md mb-5">
                  A101
                </button>
                <div className="border-2 border-slate-600 px-2 py-2 rounded-md ">
                  <select
                    name=""
                    id=""
                    className="border mb-4 focus:outline-none w-full"
                  >
                    <option value="" className=" w-full">
                      Occupancy{" "}
                    </option>
                  </select>
                  <div className="flex items-center gap-x-2 mb-3">
                    <input
                      type="checkbox"
                      className={`w-5 h-5 focus:bg-red-500`}
                      id="check"
                    />
                    <label htmlFor="check">AC</label>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Bads Added </h3>
                  <div>
                    <span>Bad1</span>
                    <span className="mx-3">Bad2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <FiPlus className="text-6xl cursor-pointer text-red-600" />
            </div>
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
    </section>
  );
};

export default Manage_Rooms;