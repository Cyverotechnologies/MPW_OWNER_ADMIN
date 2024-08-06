import React, { useState } from "react";
import {  FaEllipsisV } from "react-icons/fa";
import { IoMdArrowRoundUp } from "react-icons/io";

const staticData = [
  {
    id: 1,
    name: "Malik",
    bedNumber: "101",
    category: "Monthly Rent",
    amount: 20000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 2,
    name: "Suman",
    bedNumber: "102",
    category: "Monthly Rent",
    amount: 30000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 3,
    name: "Rahul",
    bedNumber: "103",
    category: "Monthly Rent",
    amount: 32000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 4,
    name: "Amit",
    bedNumber: "104",
    category: "Monthly Rent",
    amount: 28000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 5,
    name: "Aditi",
    bedNumber: "105",
    category: "Monthly Rent",
    amount: 31000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 6,
    name: "Zubair",
    bedNumber: "106",
    category: "Monthly Rent",
    amount: 35000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 7,
    name: "Mushkan",
    bedNumber: "107",
    category: "Monthly Rent",
    amount: 18000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 8,
    name: "Priyank",
    bedNumber: "108",
    category: "Monthly Rent",
    amount: 34000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 9,
    name: "Amar",
    bedNumber: "109",
    category: "Monthly Rent",
    amount: 33000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 10,
    name: "Ravi",
    bedNumber: "110",
    category: "Monthly Rent",
    amount: 25000,
    date: "23-03-24",
    status: "Paid",
  },
];

const RentCharges = () => {
  const [data, setData] = useState(staticData);
  const [action, setAction] = useState(null);

  function handleAction(itemId) {
    setAction((prev) => (prev === itemId ? null : itemId));
  }

  return (
    <div className="p-5">
      <div className="flex sm:justify-between sm:flex-nowrap  flex-wrap mb-4 gap-y-3">
        <div className="flex gap-4 sm:flex-nowrap flex-wrap items-center">
          <div className="flex flex-col rounded-md">
            <select
              name="category"
              className="p-2 border border-black rounded"
              id=""
            >
              category
              <optgroup>
                <option value="">Electricity</option>
                <option value="">Plumbing</option>
                <option value="">Tex</option>
              </optgroup>
            </select>
          </div>
          <div className="flex flex-col rounded-md">
            <select
              name="category"
              className="p-2 border border-black rounded"
              id=""
            >
              category
              <optgroup>
                <option value="">Paid</option>
                <option value="">Unpaid</option>
                <option value="">Paid</option>
              </optgroup>
            </select>
          </div>
          <div className="flex flex-col rounded-md">
            <input className="p-2 border border-black rounded" type="date" />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button className="border border-red-900 text-red-900 p-2">
            Add New Expense
          </button>
          <button className="flex p-2 bg-red-900 text-white">
            {" "}
            <span className="text-2xl">
              <IoMdArrowRoundUp />
            </span>
            Export{" "}
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto max-w-[400px] sm:max-w-[600px] text-nowrap md:max-w-[700px] lg:max-w-full shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Bed Number
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4 text-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4">{item.bedNumber}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td
                  className={`px-6 py-4 ${
                    item.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-6 py-4 text-center relative">
                  <button
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                    onClick={() => handleAction(item.id)}
                  >
                    <FaEllipsisV className="text-xl" />
                  </button>
                  {action === item.id && (
                    <div className="absolute top-14  lg:top-10 -left-20 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Edit
                      </button>
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RentCharges;
