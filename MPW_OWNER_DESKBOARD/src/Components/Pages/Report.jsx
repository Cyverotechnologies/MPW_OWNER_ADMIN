const Report = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between p-5">
        <p className="bg-slate-400 p-2 text-white text-2xl rounded">Report</p>
        <select name="" id="" className="border rounded-lg p-4">
          <option value="" selected>
            Year
          </option>
          <option value="">2020</option>
          <option value="">2021</option>
          <option value="">2022</option>
          <option value="">2023</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      Occupancy
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      Availability
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      Dues
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      Collection
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      Check-In
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      Profit & Loss
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      balance Sheet
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      MY_QR
      </button>
      <button className="text-blue-500 underline cursor-pointer outline-none text-2xl text-center p-3 text-nowrap">
      GST
      </button>
      </div>
    </div>
  );
};

export default Report;
