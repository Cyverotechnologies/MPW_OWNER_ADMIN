import React from "react";

const Profile = () => {
  return (
    <section className="px-5 mt-5">
      <div className="mb-3">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          My Profile
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 mb-3">
        <div className="lg:basis-3/5 w-full border px-3 py-2">
          <div className="flex items-center gap-x-2 mb-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS884FEaQN4oz4i1nwi10Tk0JvCEuUR-h06-pcU5ZYB7MT8JtGBawo9YZGGog&s"
              className="sm:w-24 sm:h-24 w-20 h-20 object-cover"
              alt="Profile"
            />
            <div>
              <h2 className="mb-2 sm:text-xl">Upload your photo</h2>
              <p className="mb-2 text-xs">
                Your photo should be in PNG or JPG format
              </p>
              <div className="flex gap-x-2 items-center">
                <button className="sm:px-4 sm:py-2 px-1 py-1 sm:text-[18px] text-xs border-red-500 border-2 rounded-lg">
                  Change Image
                </button>
                <span className="sm:text-[18px] text-xs">Remove</span>
              </div>
            </div>
          </div>
          <form action="">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="fullName"
                className="sm:text-xl font-semibold mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your full name"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="sm:text-xl font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="phone" className="sm:text-xl font-semibold mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Your phone number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="secondaryPhone"
                className="sm:text-xl font-semibold mb-1"
              >
                Secondary Phone Number
              </label>
              <input
                id="secondaryPhone"
                type="text"
                placeholder="Your secondary phone number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="address"
                className="sm:text-xl font-semibold mb-1"
              >
                Full Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Your full address with landmark"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="aadhar" className="sm:text-xl font-semibold mb-1">
                Aadhar Number
              </label>
              <input
                id="aadhar"
                type="number"
                placeholder="Your Aadhar Number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="pan" className="sm:text-xl font-semibold mb-1">
                Pan Number
              </label>
              <input
                id="pan"
                type="number"
                placeholder="Your pan number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div className="lg:basis-2/5 w-full flex flex-col gap-5">
          <div className="w-full px-6 py-9 border flex flex-col justify-center gap-5">
            <h2 className="font-bold text-xl">Upload Aadhar</h2>
            <div className="border-dashed border-2 flex flex-col items-center justify-center py-9">
              <h2 className="mb-2 text-xl font-semibold">Drop files here</h2>
              <p className="mb-4">Supported formats PNG, JPG</p>
              <span className="mb-2 text-xs font-bold">OR</span>
              <h3 className="text-red-600 font-semibold">Browse files</h3>
            </div>
            <div className="flex justify-end gap-5">
              <button>Cancel</button>
              <button className="px-3 py-2 bg-orange-900 text-white ">
                Upload
              </button>
            </div>
          </div>
          <div className="w-full px-6 py-9 border flex flex-col justify-center gap-5">
            <h2 className="font-bold text-xl">Upload Pan</h2>
            <div className="border-dashed border-2 flex flex-col items-center justify-center py-9">
              <h2 className="mb-2 text-xl font-semibold">Drop files here</h2>
              <p className="mb-4">Supported formats PNG, JPG</p>
              <span className="mb-2 text-xs font-bold">OR</span>
              <h3 className="text-red-600 font-semibold">Browse files</h3>
            </div>
            <div className="flex justify-end gap-5">
              <button>Cancel</button>
              <button className="px-3 py-2 bg-orange-900 text-white ">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-x-10 my-10">
      <button className="px-3 py-2 bg-orange-900 text-white ">
                Reset
              </button>
              <button className="px-3 py-2 bg-orange-900 text-white ">
                Save
              </button>
      </div>
    </section>
  );
};

export default Profile;