import React, { useState, useEffect, useRef } from "react";
import image_1 from "../../../assets/image-1.jpeg";
import image_2 from "../../../assets/image-2.jpeg";
import image_3 from "../../../assets/image-3.jpeg";
import image_4 from "../../../assets/image-4.jpeg";

const userData = [
  { url: image_1, name: "David" },
  { url: image_2, name: "Sultan" },
  { url: image_3, name: "Arvaj" },
  { url: image_4, name: "Anees" },
  { url: image_1, name: "David" },
];

const PaymentApproval = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const containerRef = useRef(null);

  const handleNameClick = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setVisibleIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleApprove = (index) => {
    // Logic for approve action
    setVisibleIndex(null);
  };

  const handleReject = (index) => {
    // Logic for reject action
    setVisibleIndex(null);
  };

  return (
    <>
      <div className="sm:max-w-[80%] w-full px-5 py-6 rounded-lg lg:px-10">
        <div className="mb-6">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            Payments - Payment Approvals
          </button>
        </div>

        <div className="h-[300px] overflow-y-scroll grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-x-3 gap-y-4 px-3 mt-20">
          {userData.map((item, index) => (
            <div key={index} className="relative mb-5">
              <img
                src={item.url}
                alt={item.name}
                className="w-[90px] h-[90px] object-cover rounded-full mx-auto"
              />
              <p
                onClick={() => handleNameClick(index)}
                className="text-center mt-2 cursor-pointer text-blue-500"
              >
                {item.name}
              </p>
              {visibleIndex === index && (
                <div
                  ref={containerRef}
                  className="absolute w-28  p-2  z-50 bg-white shadow-2xl rounded-lg top-[120px] left-1/2 transform -translate-x-1/2 flex flex-col gap-y-2 items-center "
                >
                  <div>
                    Lorem ipsum dolor sit.
                   
                  </div>
                  <button
                    onClick={() => handleApprove(index)}
                    className="w-full py-2 bg-green-500 text-white rounded-md"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(index)}
                    className="w-full py-2 bg-red-500 text-white rounded-md"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mx-4 sm:mx-6 md:mx-8 lg:mx-12  gap-5 my-14">
      <button className="sm:px-4 sm:py-2 px-2 py-1 bg-red-800 text-white rounded-md text-sm sm:text-base">
         View Past Approval
        </button>
      <button className="sm:px-4 sm:py-2 px-2 py-1 bg-red-800 text-white rounded-md text-sm sm:text-base">
         View Past Rejection
        </button>
        <button
          className="sm:px-4 sm:py-2 px-2 py-1 bg-red-800 text-white rounded-md text-sm sm:text-base"
          onClick={() => window.history.back()}
        >
          Back
        </button>
        <button className="sm:px-4 sm:py-2 px-2 py-1 bg-red-800 text-white rounded-md text-sm sm:text-base">
          Save
        </button>
      </div>
    </>
  );
};

export default PaymentApproval;