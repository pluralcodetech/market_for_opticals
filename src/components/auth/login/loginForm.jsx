import React from "react";

function LoginForm() {
  return (
    <form className="px-2 mt-3">
      <div className="mb-4">
        <label
          className="block text-gray-500  md:text-left mb-1 md:mb-0 pr-4"
          htmlFor="inline-email"
        >
          Email
        </label>
        <input
          className="bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
          id="inline-email"
          type="email"
          placeholder="JaneDoe@gofitish.com"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
          htmlFor="inline-email"
        >
          Password
        </label>
        <input
          className="bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-500"
          id="inline-email"
          type="password"
          placeholder="*******8"
          required
        />
      </div>
      <div className="flex items-center justify-between my-4">
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
          Forgot Password?
        </a>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
          Register
        </a>
      </div>
      <button className="w-full mb-4 bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login
      </button>
      <button className="w-full bg-white border-2 border-[#ffce1a] hover:bg-amber-400 text-slate-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login with Google
      </button>
    </form>
  );
}

export default LoginForm;
