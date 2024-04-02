'use client';

import { useProfile } from '@/hook/queries/useProfile';
import { backend_url } from '@/lib/constants';
import { RedirectStatusCode } from 'next/dist/client/components/redirect-status-code';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

import { FaGoogle } from 'react-icons/fa';

const Profile: React.FC = () => {
  const [isnew, setIsNew] = useState(false);


  const { data, isLoading } = useProfile();
  console.log(data);

  return (
    <>
      <section className="flex h-screen flex-col items-center md:flex-row">
        <div className="hidden h-screen w-full bg-indigo-600 md:w-1/2 lg:block xl:w-2/3">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="flex h-screen w-full items-center justify-center  bg-white px-6 md:mx-auto md:w-1/2 md:max-w-md lg:max-w-full
        lg:px-16 xl:w-1/3 xl:px-12"
        >
          <div className="h-100 w-full">
            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
              Log in to your account
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="username"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minLength={6}
                  className="mt-2 w-full rounded-lg border bg-gray-200 px-4 py-3 focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="mt-6 block w-full rounded-lg bg-indigo-500 px-4 py-3 font-semibold
              text-white hover:bg-indigo-400 focus:bg-indigo-400"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 w-full border-gray-300" />

            <button
              onClick={() =>
                window.open(`${backend_url}/api/login/google`, '_self')
              }
              type="button"
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
            >
              <div className="flex items-center justify-center">
                <FaGoogle size={20} color="blue" />
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8">
              Need an account?{' '}
              <a
                href="#"
                className="font-semibold text-blue-500 hover:text-blue-700"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
