import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import DashboardAvatarDropdown from "./DashboardAvatarDropdown";

function DashboardTopHeader({ setAsideToggleActive }) {
  return (
    <div className="px-5 my-5 ">
      <div 
        className="cursor-pointer text-2xl lg:hidden inline-block"
        onClick={() => setAsideToggleActive(true)}
      >
        <FaBars />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center grid grid-cols-2  mt-3 lg:mt-0  gap-5 lg:gap-0 ">
        <h2 className="flex items-center font-semibold sm:text-2xl text-lg">
          Smart PG
          <span>
            <IoIosArrowDown className="font-bold text-xl" />
          </span>
        </h2>
        <h2 className="flex items-center font-semibold sm:text-2xl text-lg ms-auto lg:ms-0">
          PG <span className="text-xl">112256</span>
        </h2>
        <h2 className="flex items-center font-semibold sm:text-2xl text-lg  ">
          License Validity - <span className="text-xl mt-[5px]">200</span> Day
        </h2>
        <div className="order-1 ms-auto lg:ms-0">
          <DashboardAvatarDropdown />
        </div>
      </div>
    </div>
  );
}

export default DashboardTopHeader;
