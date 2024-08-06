import React from 'react';

// Reusable Property Item Component
const PropertyItem = ({ title, buttonColor }) => (
  <div className="flex flex-col items-center">
    <div className="text-xl w-[150px] h-[50px] flex items-center justify-center bg-blue-200 mb-6">
      {title}
    </div>
    <button className={`px-2 py-2 ${buttonColor}`}>Selected</button>
  </div>
);

const ChangeProperty = () => {
  // Define the properties for reuse
  const properties = [
    { title: 'Ankit PG', buttonColor: 'bg-green-500' },
    { title: 'Ankit PG', buttonColor: 'bg-blue-400' },
    { title: 'Ankit PG', buttonColor: 'bg-pink-400' },
  ];

  return (
    <section className="max-w-[600px] ps-[50px] py-3">
      <div>
        <button className="sm:text-3xl text-2xl bg-slate-600 font-bold text-white sm:px-8 sm:py-3 px-4 py-2 rounded-sm mb-[50px]">
          Change Property
        </button>
        <div className="flex flex-wrap gap-8">
          {properties.map((property, index) => (
            <PropertyItem
              key={index}
              title={property.title}
              buttonColor={property.buttonColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangeProperty;