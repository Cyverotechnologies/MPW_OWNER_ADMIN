import { useState } from "react";
import { LuCheckCircle2 } from "react-icons/lu";

const CheckOut = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [boxTwo, setBoxTwo] = useState(false);
  const [boxThree, setBoxThree] = useState(false);
  const [lastBoxMessage, setLastBoxMessage] = useState(false);
  const [userNameFromBoxOne, setUserNameFromBoxOne] = useState("");

  const handleCheckboxOneChange = (index) => {
    setCheckedIndex(index);
  };

  const showBoxTwo = (name) => {
    setBoxTwo(true);
    setUserNameFromBoxOne(name);
  };

  const paymentSettled = () => {
    setBoxThree(true);
  };

  const checkOut = () => {
    if (allChecked) {
      setLastBoxMessage(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // State for checkboxes (assuming there are 4 checkboxes here)
  const [checkboxes, setCheckboxes] = useState(Array(4).fill(false));

  // Handler to update checkbox state
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  // Check if all checkboxes are checked
  const allChecked = checkboxes.every((checked) => checked);

  return (
    <div className="p-5 space-y-4">
      <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
        Check Out
      </button>
      <input type="search" className="p-4 text-gray-200 w-full md:w-1/3" />

      <div className="flex flex-col md:flex-row gap-4">
        {/* First Column: User List */}
        <div className="border border-red-800 w-full md:w-1/4 p-5 flex flex-col gap-2">
          {["Rinku", "Shikhar", "Danish", "Kushum"].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <input
                type="checkbox"
                className="border"
                onChange={() => handleCheckboxOneChange(index)}
                checked={checkedIndex === index}
              />
              <p className="flex-grow">{item}</p>
              {checkedIndex === index && (
                <button
                  onClick={() => showBoxTwo(item)}
                  className="bg-red-900 text-white p-2 hover:bg-red-950"
                >
                  Check Out
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Second Column: Form for User Details */}
        {boxTwo && (
          <div className="border w-full md:w-1/3 border-red-400 p-4">
            <h1 className="text-xl font-semibold">{userNameFromBoxOne}</h1>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 mt-4">
              <input type="text" placeholder="Phone" className="p-3 bg-gray-200" />
              <input type="text" placeholder="Email" className="p-3 bg-gray-200" />
              <input type="text" placeholder="Check In Date" className="p-3 bg-gray-200" />
              <input type="text" placeholder="Room & Bed" className="p-3 bg-gray-200" />
              <input type="text" placeholder="Checklist" className="p-3 bg-gray-200" />
              <input type="text" placeholder="Rent Dues" className="p-3 bg-gray-200" />
              <input
                type="text"
                placeholder="Maintenance & Electricity Dues"
                className="p-3 bg-gray-200"
              />
              <input type="text" placeholder="Security Dues Refund" className="p-3 bg-gray-200" />
              <input type="text" placeholder="Add Charges" className="p-3 bg-gray-200" />
              <input type="text" placeholder="Add Refund" className="p-3 bg-gray-200" />
              <input
                type="text"
                placeholder="Full & Final Settlement Amount"
                className="p-3 bg-gray-200"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={paymentSettled}
                  className={`${
                    boxThree
                      ? "text-green-600 border border-green-500"
                      : "text-red-600 border border-red-500"
                  } p-2`}
                >
                  Payment Settled
                </button>
                <button
                  onClick={checkOut}
                  className={`${
                    allChecked
                      ? "text-green-600 border border-green-500"
                      : "text-red-600 border border-red-500"
                  } p-2`}
                >
                  Check Out
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Third Column: Checklist Items */}
        {boxThree && (
          <div className="w-full md:w-1/5 border shadow p-4">
            <div className="border shadow p-2">
              {["q", "r", "t", "u"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-1">
                  <input
                    type="checkbox"
                    checked={checkboxes[i]}
                    onChange={() => handleCheckboxChange(i)}
                  />
                  <p>List item {item}</p>
                </div>
              ))}
            </div>

            {lastBoxMessage && (
              <div className="flex items-center bg-green-500 p-2 mt-4 rounded">
                <LuCheckCircle2 className="text-white text-xl" />
                <p className="text-white ml-2 text-sm">Check out Successful</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;