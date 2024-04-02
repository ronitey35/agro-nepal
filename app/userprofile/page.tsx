'use client';

import Profile from '@/components/layout/update/Profile';
import { useProfile } from '@/hook/queries/useProfile';
import React, { useState } from 'react';

const page = () => {
  const { data } = useProfile();
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);
  console.log(updateProfile);

  return (
    <div className="relative  h-screen">
      {updateProfile && (
        <Profile closeUpdateProfile={() => setUpdateProfile(false)} />
      )}
      <div className="h-full">
        <div className="block h-4/5 border-b-2 md:flex">
          <div className="w-full bg-white p-4 shadow-md sm:p-6 md:w-2/5 lg:p-8">
            <div className="flex justify-between">
              <span className="block text-xl font-semibold"> Profile</span>
            </div>

            <div className="mx-2 flex w-full justify-center rounded-2xl bg-slate-600 p-8">
              <img
                id="showImage"
                className="w-32 max-w-xs items-center rounded-md border"
                src={data ? data.image : '/noAvatar.png'}
                alt=""
              />
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={(e) => setUpdateProfile(true)}
                className="text-md mb-4 rounded-full bg-gray-400 px-5 py-2 font-bold text-white hover:bg-gray-600"
              >
                Edit
              </button>
            </div>
          </div>

          <div className="w-full bg-white p-8 shadow-md md:w-3/5 lg:ml-4">
            <div className="rounded  p-6 shadow">
              <div className="pb-6">
                <h1 className="block pb-1 font-semibold text-gray-700">
                  {data?.name}
                </h1>
                <div className="flex">
                  <input
                    disabled
                    id="username"
                    className="border-1  w-full rounded-r px-4 py-2"
                    type="text"
                    value={data?.name}
                  />
                </div>
              </div>
              <div className="pb-4">
                <label className="block pb-1 font-semibold text-gray-700">
                  Email
                </label>
                <input
                  disabled
                  id="email"
                  className="border-1  w-full rounded-r px-4 py-2"
                  type="email"
                  value={data?.email}
                />
                <div className="pb-4">
                  <label className="block pb-1 font-semibold text-gray-700">
                    area
                  </label>
                  <input
                    disabled
                    id="area"
                    className="border-1  w-full rounded-r px-4 py-2"
                    type="area"
                    value={data?.area}
                  />
                  <span className="block pt-4 text-gray-600 opacity-70">
                    Personal login information of your account
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
