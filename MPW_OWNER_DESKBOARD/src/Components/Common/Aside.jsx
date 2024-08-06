import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  MdOutlineDashboard,
  MdPerson,
  MdHome,
  MdPeople,
  MdCalendarToday,
  MdNotifications,
  MdFeedback,
  MdSupport,
  MdOutlineAccountBalanceWallet,
  MdOutlineContentPaste,
  MdOutlineEscalator,
  MdOutlineBugReport,
} from "react-icons/md";
import { FaPersonWalkingLuggage, FaXmark } from "react-icons/fa6";
import { LuCalendarCheck2 } from "react-icons/lu";
import { HiArrowLeftOnRectangle, HiArrowRightOnRectangle } from "react-icons/hi2";
import { BsCurrencyRupee } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiUserFollowLine } from "react-icons/ri";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";

function Aside({ setAsideToggleActive }) {
  const dashboardData = [
    { title: "Dashboard", icon: <MdOutlineDashboard />, path: "/" },
    { title: "My Profile", icon: <MdPerson />, path: "/profile" },
    { title: "My Properties", icon: <FaHouseUser />, path: "/properties" },
    { title: "Bookings", icon: <LuCalendarCheck2 />, path: "/bookings" },
    { title: "Check In", icon: <HiArrowRightOnRectangle />, path: "/check-in" },
    { title: "Check Out", icon: <HiArrowLeftOnRectangle />, path: "/check-out" },
    { title: "Payments", icon: <BsCurrencyRupee />, path: "/payments" },
    { title: "Expenses", icon: <MdOutlineAccountBalanceWallet />, path: "/expenses" },
    { title: "Guests", icon: <FaPersonWalkingLuggage />, path: "/guests" },
    { title: "Availability", icon: <MdOutlineEscalator />, path: "/availability" },
    { title: "Reports", icon: <GiProgression />, path: "/reports" },
    { title: "Notices", icon: <MdOutlineContentPaste />, path: "/notices" },
    { title: "Complaints", icon: <MdOutlineBugReport />, path: "/complaints" },
    {
      title: "Tenants Approvals",
      icon: <RiUserFollowLine />,
      path: "/tenants_approvals",
    },
    { title: "Support", icon: <TfiHeadphoneAlt />, path: "/support" },
    {
      title: "Change Properties",
      icon: <HiOutlineSwitchHorizontal />,
      path: "/change-properties",
    },
  ];

  return (
    <div className="w-full bg-white ">
      <div className="logo relative">
        <img src={logo} alt="Logo" className="h-28 w-full" />
        <p
          className="lg:hidden absolute right-0 bg-black text-white p-2 font-bold rounded-bl-lg cursor-pointer top-0"
          onClick={() => setAsideToggleActive(false)}
        >
          <FaXmark size={20} />
        </p>
      </div>
      <div className="p-2 pe-0 flex flex-col gap-1">
        {dashboardData.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `cursor-pointer p-2 flex items-center gap-2 font-medium duration-700 ${
                isActive
                  ? "bg-orange-900 text-white"
                  : "hover:bg-orange-900 hover:text-white"
              }`
            }
            onClick={() => setAsideToggleActive(false)} // Close sidebar on click
          >
            <div className="text-2xl">{item.icon}</div>
            <p>{item.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Aside;
