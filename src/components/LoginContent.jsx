import React from "react";

const LoginContent = () => {
  return (
    <>
      <h2 className="text-xl font-poppins text-white mb-4 ">Login</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-poppins mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-poppins mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-400 rounded"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="w-full font-poppins bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 rounded hover:bg-pink-500 transition duration-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginContent;
