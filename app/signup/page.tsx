import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebook, FaFacebookF } from 'react-icons/fa';

const SignupPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg p-8 shadow-lg hover:bg-gray-200">
        <h2 className="mb-4 text-center text-3xl font-semibold">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block  text-lg font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block  text-lg font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full rounded-md  bg-blue-500 px-4 py-2 text-lg text-white hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
          <div className="mb-6">
            <p className="mb-2 text-center  text-lg">or Sign Up with</p>
            <div className="flex justify-center">
              <button className=" mr-4 flex items-center gap-1 rounded-md bg-gray-400 px-4 py-2 text-lg text-white">
                Facebook{' '}
                <span>
                  <FaFacebookF color="blue" />
                </span>
              </button>
              <button className="mr-4 flex items-center gap-1 rounded-md  bg-gray-400  px-4 py-2 text-lg text-white">
                Google
                <span>
                  <BsGoogle color="red" />
                </span>
              </button>
            </div>
          </div>
          <p className="text-center  text-lg ">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
