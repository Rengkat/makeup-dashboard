import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen bg-dark-gold flex items-center ">
      <div className="bg-white w-[60%] shadow-lg mx-auto rounded-lg py-[8rem]">
        <Image
          src={"/Fullbeauty.svg"}
          alt="logo"
          height={500}
          width={500}
          className="w-[10%] mx-auto my-2"
        />
        <h1 className="font-bold text-3xl text-center">Admin Login</h1>
        <form className="w-[50%] mx-auto">
          <input
            placeholder="Enter email"
            type="email"
            className="rounded-md mt-5 block w-full border-[1px] border-gray-400 py-4 px-6 "
          />
          <input
            placeholder="Enter password"
            type="password"
            className="rounded-md mt-5 block w-full border-[1px] border-gray-400 py-4 px-6 "
          />
          <button className="w-full bg-dark-gold text-2xl shadow-md font-semibold text-white py-4 rounded-md my-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
