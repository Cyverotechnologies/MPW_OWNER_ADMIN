import { BiPlusCircle } from "react-icons/bi";
import { FaPlus, FaRegFileExcel } from "react-icons/fa";

const Complaint = () => {
  return (
    <div className="mx-5">
      <div className="mb-6 ">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Complaints
        </button>
      </div>
      <div className="w-full flex  gap-4 items-center mb-5 ">
        <p className="font-bold text-xl">Active</p>
        <button className="h-10 w-10 rounded-full bg-sky-400 text-white inline-flex justify-center items-center">
          <FaPlus />
        </button>
        <div className="text-3xl text-orange-900">
          <FaRegFileExcel />
        </div>
      </div>

      <div className="relative overflow-x-auto text-nowrap  max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:min-w-full shadow-md sm:rounded-lg ">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Raised By
              </th>
              <th scope="col" className="px-6 py-3">
                Bed Bo
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cleanliness and Hygiene: Dirty common areas, unclean...
              </th>
              <td className="px-6 py-4">Maintenance</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">A101c</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">2</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cleanliness and Hygiene: Dirty common areas, unclean...
              </th>
              <td className="px-6 py-4">Maintenance and Facilities</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">A101c</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">3</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cleanliness and Hygiene: Dirty common areas, unclean...
              </th>
              <td className="px-6 py-4">Maintenance and Facilities</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">A101c</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">4</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cleanliness and Hygiene: Dirty common areas, unclean...
              </th>
              <td className="px-6 py-4">Maintenance and Facilities</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">A101c</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">5</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cleanliness and Hygiene: Dirty common areas, unclean...
              </th>
              <td className="px-6 py-4">Maintenance and Facilities</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">A101c</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Food Quality: Poor quality of food, lack of variety...
              </th>
              <td className="px-6 py-4">Food and Dining</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">A101c</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Furniture and Fixtures: Broken furniture, faulty fixtures...
              </th>
              <td className="px-6 py-4">Miscellaneous Complaints</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">A101c</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Noise Complaints: Excessive noise from common areas,...
              </th>
              <td className="px-6 py-4">Roommate and Social</td>
              <td className="px-6 py-4">Amit singh</td>
              <td className="px-6 py-4">b205d</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Parking Issues: Inadequate parking space, unauthorized...
              </th>
              <td className="px-6 py-4">Miscellaneous Complaints</td>
              <td className="px-6 py-4">Diksha verma</td>
              <td className="px-6 py-4">C301b</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Internet Connectivity: Slow internet speeds, frequent...
              </th>
              <td className="px-6 py-4">Safety and Security</td>
              <td className="px-6 py-4">Suman</td>
              <td className="px-6 py-4">B108d</td>
              <td className="px-6 py-4 text-blue-600 ">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Details
                </button>
              </td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaint;
