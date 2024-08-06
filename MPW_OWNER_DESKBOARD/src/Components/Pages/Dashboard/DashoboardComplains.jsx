import React from "react";
import { GoArrowBoth } from "react-icons/go";

function DashoboardComplains() {
  return (
    <div className="border rounded relative p-3">
      <div className="absolute top-0 right-0 text-3xl rotate-[140deg]">
        <GoArrowBoth />
      </div>
      <h3 className="text-2xl font-semibold">Open Complaints</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mt-2 bg-slate-300/20 p-2 rounded-md">
          <img
            src="https://media.licdn.com/dms/image/D4D35AQFpvkq28W-EOw/profile-framedphoto-shrink_100_100/0/1694320328771?e=1723028400&v=beta&t=oOXTp8InT7xCH740pK1iQIoOnGPxRqEwXE3p6sm5jRw" // Static avatar image URL
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
          <div>
            <p className="text-sm font-semibold">Yuvi</p>
            <p className="text-sm text-black/70 mt-[2px]">
              Lorem ipsum dolor sit adipisicing elit. Veniam, a?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 bg-slate-300/20 p-2 rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFrHuFH02-dJD9ZzBau07hSIXxxbHlLXF6w&s" // Static avatar image URL
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
          <div>
            <p className="text-sm font-semibold">Shahrukh</p>
            <p className="text-sm text-black/70 mt-[2px]">
              Lorem ipsum dolor sit adipisicing elit. Veniam, a?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 bg-slate-300/20 p-2 rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK44y55N-BXYLhCNRSH3W65VLedAaGLWlMPg&s" // Static avatar image URL
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
          <div>
            <p className="text-sm font-semibold">Sameer</p>
            <p className="text-sm text-black/70 mt-[2px]">
              Lorem ipsum dolor sit adipisicing elit. Veniam, a?
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 bg-slate-300/20 p-2 rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rUYrLdFAA0KjtKAxkNzgaUCfCBZXT_UG9g&s" // Static avatar image URL
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
          <div>
            <p className="text-sm font-semibold">Arun</p>
            <p className="text-sm text-black/70 mt-[2px]">
              Lorem ipsum dolor sit adipisicing elit. Veniam, a?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashoboardComplains;
