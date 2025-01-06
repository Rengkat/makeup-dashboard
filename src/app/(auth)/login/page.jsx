"use client";
import Image from "next/image";
import React from "react";
import { useLoginMutation } from "../../../../Redux/api/AuthSliceApi";
import { loginUser } from "../../../../Redux/services/AppSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useRouter();
  const dispatch = useDispatch();
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      dispatch(loginUser(data.user));
      navigate.push("/");
    } catch (error) {
      console.log(error);
    }
    setPassword("");
    setEmail("");
  };
  return (
    <div className="w-full h-screen bg-dark-gold flex items-center ">
      <div className="bg-white w-[90%] lg:w-[60%] shadow-lg mx-auto rounded-lg py-[8rem]">
        <Image
          src={"/Fullbeauty.svg"}
          alt="logo"
          height={500}
          width={500}
          className="w-[10%] mx-auto my-2"
        />
        <h1 className="font-bold text-3xl text-center">Admin Login</h1>
        <form className="w-[50%] mx-auto" onSubmit={onHandleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email"
            type="email"
            className="rounded-md mt-5 block w-full border-[1px] border-gray-400 py-4 px-6 "
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            type="password"
            className="rounded-md mt-5 block w-full border-[1px] border-gray-400 py-4 px-6 "
          />
          <button
            type="submit"
            className="w-full bg-dark-gold text-2xl shadow-md font-semibold text-white py-4 rounded-md my-5">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
