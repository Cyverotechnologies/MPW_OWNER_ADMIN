import React, { useState } from "react";
import { FaEllipsisV, FaFileInvoiceDollar } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdArrowRoundUp } from "react-icons/io";

const Expenses = () => {
  const [action, setAction] = useState(null);

  const data = [
    {
      id: 1,
      status: "Unpaid",
      category: "Electricity",
      type: "Utility",
      date: "26-04-24",
      amount: "4300",
    },
    {
      id: 2,
      status: "Unpaid",
      category: "Plumbing",
      type: "Utility",
      date: "06-05-24",
      amount: "1200",
    },
    {
      id: 3,
      status: "Paid",
      category: "Internet",
      type: "Utility",
      date: "28-04-24",
      amount: "5000",
    },
    {
      id: 4,
      status: "Unpaid",
      category: "Manager salary",
      type: "Salary",
      date: "30-04-24",
      amount: "60000",
    },
    {
      id: 5,
      status: "Paid",
      category: "Cook Salary",
      type: "Salary",
      date: "30-04-24",
      amount: "30000",
    },
    {
      id: 6,
      status: "Paid",
      category: "Oil & pulses",
      type: "Grocery",
      date: "01-05-24",
      amount: "4000",
    },
    {
      id: 7,
      status: "Unpaid",
      category: "Property tax",
      type: "Misc",
      date: "02-04-24",
      amount: "54000",
    },
  ];

  function handleAction(itemId) {
    setAction((prev) => (prev === itemId ? null : itemId));
  }

  return (
    <div className="p-5">
       <div className="mb-6 ">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            Expenses
          </button>
        </div>
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
          <button className="border bg-red-900 text-white font-semibold p-2">
            Add New Expense
          </button>
          <button className="flex p-2 text-orange-900 border-2 border-orange-900">
            {" "}
            <span className="text-2xl">
              <IoMdArrowRoundUp />
            </span>
            Export{" "}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto max-w-[400px] sm:max-w-[600px] text-nowrap md:max-w-[700px] lg:min-w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black/60  uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                Check
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Bill
              </th>
              <th scope="col" className="px-6 py-3">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-200"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-${item.id}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <p
                    className={`rounded-3xl p-2 text-center ${
                      item.status === "Paid" ? "bg-green-300" : "bg-red-300"
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">
                  <button className="text-2xl cursor-pointer">
                    <FaFileInvoiceDollar />
                  </button>
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

export default Expenses;
