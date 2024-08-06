import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const propertiesData = [
  {
    icon: <IoHomeOutline />,
    description: "Arun PG 2012 West Avenue, San Diego, CA 92122",
  },
  {
    icon: <IoHomeOutline />,
    description: "Arun PG 2012 West Avenue, San Diego, CA 92122",
  },
];

const PropertyCard = ({ icon, description }) => (
  <div className="px-4 py-6 bg-red-50 rounded-lg w-full">
    <div className="flex items-center gap-x-3 mb-3">
      <span className="text-3xl text-red-400">{icon}</span>
      <p className="text-lg font-semibold text-red-400">{description}</p>
    </div>
    <div className="flex gap-x-4 justify-between mt-5">
      <button className="px-4 py-2 bg-red-400 text-white rounded-md text-sm">
        View
      </button>
      <button className="px-4 py-2 bg-red-400 text-white rounded-md text-sm">
        Edit
      </button>
    </div>
  </div>
);

const Manage_Properties = () => {
  return (
    <>
  
      <section className="w-full">
        <div className="mx-5 lg:mx-12 py-6 rounded-lg">
          <div className="mb-4">
            <button className="px-4 py-2 font-semibold text-white bg-slate-400 rounded-lg text-lg sm:text-xl">
              My Properties - Manage Properties
            </button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {propertiesData.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <PropertyCard
              icon={<IoHomeOutline />}
              description="Arun PG 2012 West Avenue, San Diego, CA 92122"
            />
            <div className="flex items-center justify-center py-6 w-full">
              <Link to={"/properties/manage_properties/add_property"}>
                <FiPlus className="text-5xl sm:text-6xl md:text-7xl text-red-500 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="flex justify-end mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-4">
            <button
              className="px-4 py-2 bg-red-800 text-white rounded-md text-sm sm:text-base"
              onClick={() => history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manage_Properties;
