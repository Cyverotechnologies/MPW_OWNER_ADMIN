import { IoIosCall } from "react-icons/io";
import { MdSmsFailed } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const Support = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-3 py-10">
        <div
          className="w-full lg:w-1/2
              px-4 "
        >
          <div className=" ">
            <div>
              <h2 className="sm:text-4xl text-3xl font-bold mb-3">
                Need Support ?{" "}
              </h2>
              <p className="mb-2 text-xl">Lorem ipsum dolor sit amet.</p>
            </div>
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1661370266200-5f3cc9e21eeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lJTIwd2l0aCUyMGJveSUyMHN0YW5kJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center ">
          <div className="w-full px-4 md:px-8 lg:px-4">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Hello Again!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8">
                Welcome Back
              </p>
              <label htmlFor="name" className="mb-2 block">
                Full Name
              </label>
              <div className="flex items-center border mb-4 py-2 px-3 rounded-xl">
                <input
                  id="name"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Full Name "
                />
              </div>
              <label htmlFor="email" className="mb-2 block">
                Email
              </label>
              <div className="flex items-center border mb-4 py-2 px-3 rounded-xl">
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email "
                />
              </div>
              <label htmlFor="email" className="mb-2 block">
                Which topic best fit for your need?
              </label>
              <select name="" id="" className="w-full p-2 border rounded-xl">
                {" "}
                select
                <optgroup>
                  <option value="" className="w-full">
                    Which topic best fit for your need?-1{" "}
                  </option>
                  <option value="" className="w-full">
                    Topic two{" "}
                  </option>
                  <option value="" className="w-full">
                    Three{" "}
                  </option>
                </optgroup>
              </select>
              <div className=""></div>

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>

              <button
                type="submit"
                className="block w-full bg-red-950 mt-5 py-2 rounded-2xl hover:bg-red-900 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Submit
              </button>

              <div className="flex justify-around mt-8">
                <div>
                  <IoIosCall className="text-5xl text-blue-500" />
                </div>
                <div>
                  <MdSmsFailed className="text-5xl text-blue-500" />
                </div>
                <div>
                  <GiProgression className="text-5xl text-blue-500" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;