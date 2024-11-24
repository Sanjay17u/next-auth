"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Signup = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [disable, setDisable] = useState(true)


  const submitHandler = () => {
    console.log(user)
  }


  useEffect(() => {
    if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [user])

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
              value={user.username}
              onChange={(e) => setUser({...user, username: e.target.value})}
            />
          </div>
          <div className="flex flex-col my-4">
            <input
              type="email"
              placeholder="Email"
              className="border-2 outline-none rounded-md px-2 py-1"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col my-4">
            <input
              type="password"
              placeholder="Password"
              className="border-2 outline-none rounded-md px-2 py-1"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>
          <button onClick={submitHandler} type="submit" className={`${disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#28282B] hover:bg-[#343434]"}  font-bold text-white px-4 py-1 rounded-lg w-full mb-4`}>
            Signup
          </button>
          <p className="font-medium text-sm">Already Have an account?  <Link className="text-blue-600 font-semibold" href={"/login"}>Login</Link></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
