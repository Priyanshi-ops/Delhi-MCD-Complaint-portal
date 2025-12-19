import React from "react";

const Login = () => {
  return (
    <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-700 text-white p-2 rounded hover:bg-sky-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
