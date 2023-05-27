import { RiAdminFill, RiLock2Fill } from "react-icons/ri";
import React from "react";

const LoginPage = () => {
  return (
    <div className="mt-60">
      <div className="px-7 py-3">
        <form
          action=""
          className="grid mx-auto shadow-lg gap-7 w-max p-10 rounded-xl"
        >
          <h1 className="text-xl text-center uppercase font-bold">Login</h1>
          <label htmlFor="" className="flex gap-2">
            <RiAdminFill className="text-lg text-gray-400 m-auto"/>
            <input
              className="p-2 outline-none border-b border-gray-400 w-60"
              type="text"
              placeholder="Username"
            />
          </label>
          <label htmlFor="" className="flex gap-2">
            <RiLock2Fill className="text-lg text-gray-400 m-auto"/>
            <input
              className="p-2 outline-none border-b border-gray-400 w-60"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className="bg-green-800 text-white px-3 py-1 rounded-sm">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
