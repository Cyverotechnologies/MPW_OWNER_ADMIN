import React, { useState } from "react";

const staticData = [
  {
    block: "A",
    floor: 0,
    room: "02",
    bed: "a",
    // ac: false,
    sharing: 1,
    rent: 4000,
  },
  {
    block: "A",
    floor: 1,
    room: "03",
    bed: "b",
    // ac: true,
    sharing: 2,
    rent: 5000,
  },
  {
    block: "A",
    floor: 2,
    room: "04",
    bed: "c",
    // ac: false,
    sharing: 1,
    rent: 6000,
  },
  {
    block: "B",
    floor: 0,
    room: "02",
    bed: "a",
    // ac: true,
    sharing: 2,
    rent: 4000,
  },
  {
    block: "B",
    floor: 1,
    room: "03",
    bed: "b",
    // ac: false,
    sharing: 1,
    rent: 5000,
  },
  {
    block: "B",
    floor: 2,
    room: "04",
    bed: "c",
    // ac: true,
    sharing: 3,
    rent: 6000,
  },
];

const ConformPayment = () => {
  const [data, setData] = useState(staticData);

  return (
    <section className="w-full p-5 pt-0">
      <div className="md:max-w-[80%] lg:ms-8">
        <div className="mb-6">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            Payments-Configure Payments
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 text-lg">
          <div className="grid grid-cols-2">
            <p>Select Property</p>
            <select name="" id="" className="border focus:outline-none">
              <option value="">Ankit PG</option>
            </select>
          </div>
          <div className="grid grid-cols-2">
            <p>Default Rent</p>
            <input
              type="text"
              readOnly
              placeholder="5000"
              className="text-sm border-2 px-2 text-black inline-block focus:outline-none placeholder:text-black"
            />
          </div>
        </div>
        <div className="border-[3px] border-indigo-300 block mt-7 overflow-x-auto sm:w-full w-[300px] ">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Block
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Floor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AC
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sharing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rent
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.block}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.floor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.room}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.bed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="checkbox"
                      checked={item.ac}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                      readOnly
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.sharing}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.rent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end mx-5 mt-10 mb-5 gap-5">
        <button
          className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base"
          onClick={() => history.back()}
        >
          Back
        </button>
        <button className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base capitalize">
          Maintaince & food changes
        </button>
        <button className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base">
          Save
        </button>
      </div>
    </section>
  );
};

export default ConformPayment;