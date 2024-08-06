import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const Table = ({ data }) => (
  <div className="overflow-x-auto max-w-[400px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-full shadow-md sm:rounded-lg">
    <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Bed No
          </th>
          <th scope="col" className="px-6 py-3">
            Details
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.name}
            </th>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4">{item.bedNo}</td>
            <td className="px-6 py-4 text-blue-600">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Details
              </button>
            </td>
            <td className="flex items-center space-x-3">
              <Link
                to="#"
                className="text-blue-600 dark:text-blue-500 hover:underline flex items-center"
              >
                <FaPen className="mr-1" /> Edit
              </Link>
              <Link
                to="#"
                className="text-red-600 dark:text-red-500 hover:underline flex items-center"
              >
                <FaTrashAlt className="mr-1" /> Remove
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function Guest() {
  const [buttonActive, setButtonActive] = useState("tab1");

  const handleButtonClick = (value) => {
    if (value !== buttonActive) {
      setButtonActive(value);
    }
  };

  const activeData = [
    {
      name: "Anil",
      email: "7896543768",
      bedNo: "Anil87643@gmail.com",
    },
    {
      name: "John",
      email: "john@example.com",
      bedNo: "12345",
    },
    {
      name: "Emma",
      email: "emma@example.com",
      bedNo: "67890",
    },
    {
      name: "Michael",
      email: "michael@example.com",
      bedNo: "54321",
    },
    {
      name: "Sophia",
      email: "sophia@example.com",
      bedNo: "98765",
    },
  ];

  const inactiveData = [
    {
      name: "Aarohi",
      email: "9098765443",
      bedNo: "aarohi03@gmail.com",
    },
    {
      name: "Ella",
      email: "ella@example.com",
      bedNo: "23456",
    },
    {
      name: "Liam",
      email: "liam@example.com",
      bedNo: "78901",
    },
    {
      name: "Olivia",
      email: "olivia@example.com",
      bedNo: "45678",
    },
    {
      name: "Noah",
      email: "noah@example.com",
      bedNo: "90123",
    },
  ];

  return (
    <div className="mb-3 px-5">
       <div className="mb-6 ">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            Guests
          </button>
        </div>
      <TETabs>
        <TETabsItem
          onClick={() => handleButtonClick("tab1")}
          active={buttonActive === "tab1"}
          tag="button"
          className="border-none"
        >
          <div className="p-2 bg-orange-900 text-white">Active</div>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab2")}
          active={buttonActive === "tab2"}
          tag="button"
          className="border-none ml-3"
        >
          <div className="p-2 bg-orange-900 text-white">Inactive</div>
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane
          show={buttonActive === "tab1"}
          className={`${buttonActive === "tab1" ? "" : "hidden"}`}
        >
          <Table data={activeData} />
        </TETabsPane>
        <TETabsPane
          show={buttonActive === "tab2"}
          className={`${buttonActive === "tab2" ? "" : "hidden"}`}
        >
          <Table data={inactiveData} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}
