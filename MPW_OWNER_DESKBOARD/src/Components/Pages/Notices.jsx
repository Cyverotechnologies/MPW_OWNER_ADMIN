import { FaPlus, FaRegFileExcel } from "react-icons/fa";
const Notice = () => {
  return (
    <div className="mx-5">
      <div className="mb-6 ">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Notics
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

      <div className="relative overflow-x-auto max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:min-w-full text-nowrap shadow-md sm:rounded-lg">
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
                Start Date
              </th>
              <th scope="col" className="px-6 py-3">
                End Date
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lauch transpotaion facility from pg...
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                Emergency Contact Notice: A notice providing tenants
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                Move-Out Inspection Notice: A notice informing the
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                Security Deposit Notice: A notice regarding the return
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                Policy Change Notice: A notice informing the tenant
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                <div className="flex items-center">6</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Notice of Entry: A notice informing the tenant that
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                <div className="flex items-center">7</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Termination Notice: A notice informing the tenant
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                <div className="flex items-center">8</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Maintenance Notice: A notice informing the tenant
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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
                <div className="flex items-center">9</div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Violation of Rules Notice: A notice informing the
              </th>
              <td className="px-6 py-4">23-03-24</td>
              <td className="px-6 py-4">31-07-24</td>
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

export default Notice;
