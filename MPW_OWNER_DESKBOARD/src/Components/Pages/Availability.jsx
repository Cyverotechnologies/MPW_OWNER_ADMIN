import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

const tabData = [
  { id: "tab1", label: "Available", rows: generateRows() },
  { id: "tab2", label: "Occupie", rows: generateRows() },
  { id: "tab3", label: "Under Notice", rows: generateRows() },
  { id: "tab4", label: "Booking", rows: generateRows() },
];

function generateRows() {
  return Array.from({ length: 8 }, (_, index) => ({
    number: index + 1,
    bedNumber: `A120c${Math.floor(Math.random() * 999)}`,
    type: `Monthly rental${Math.floor(Math.random() * 999)}`,
    sharing: `Triple${Math.floor(Math.random() * 999)}`,
  }));
}

const Table = ({ rows }) => (
  <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
    <thead className="text-xs bg-slate-200 text-white uppercase dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="p-4">
          No
        </th>
        <th scope="col" className="px-6 py-3">
          Bed Number
        </th>
        <th scope="col" className="px-6 py-3">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          Sharing
        </th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="w-4 p-4">
            <div className="flex items-center">{row.number}</div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {row.bedNumber}
          </th>
          <td className="px-6 py-4">{row.type}</td>
          <td className="px-6 py-4">{row.sharing}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default function Availability() {
  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value) => {
    if (value !== fillActive) {
      setFillActive(value);
    }
  };

  return (
    <div className="m-5">
       <div className="mb-6 ">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            Availability
          </button>
        </div>
      <TETabs fill>
        {tabData.map((tab) => (
          <TETabsItem
            key={tab.id}
            onClick={() => handleFillClick(tab.id)}
            active={fillActive === tab.id}
            className="p-2 text-start border-none bg-orange-800 inline-block text-white "
          >
            {tab.label}
          </TETabsItem>
        ))}
      </TETabs>

      <TETabsContent>
        {tabData.map((tab) => (
          <TETabsPane key={tab.id} show={fillActive === tab.id}>
            <Table rows={tab.rows} />
          </TETabsPane>
        ))}
      </TETabsContent>
    </div>
  );
}
