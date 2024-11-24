import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <>
      <div className="flex bg-[#E2DFD2] min-h-screen items-center justify-center">
        <div className="bg-white text-black p-10 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="font-bold">Signup</h1>
          <div className="flex flex-col my-4">
            <input
              type="text"
              placeholder="Username"
              className="border-2 outline-none rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col my-4">
            <input
              type="email"
              placeholder="Email"
              className="border-2 outline-none rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col my-4">
            <input
              type="password"
              placeholder="Password"
              className="border-2 outline-none rounded-md px-2 py-1"
            />
          </div>
          <button className="bg-[#28282B] hover:bg-[#343434] font-bold text-white px-4 py-1 rounded-lg w-full mb-4">
            Signup
          </button>
          <p className="font-medium text-sm">Already Have an account?  <Link className="text-blue-600 font-semibold" href={"/login"}>Login</Link></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
