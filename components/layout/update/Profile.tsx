import { useUpdateMutation } from '@/hook/mutation/useUpdateProfile';
import { useProfile } from '@/hook/queries/useProfile';
import { useMutation } from '@tanstack/react-query';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface UpdateProfileProps {
  closeUpdateProfile: () => void;
}
const Profile = ({ closeUpdateProfile }: UpdateProfileProps) => {
  const { data } = useProfile();
  const { mutate } = useUpdateMutation();
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');
  const [image, setImage] = useState('');

  const updateUserProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return mutate({
      name: name || undefined,
      district: district || undefined,
      area: area || undefined,
      image: image || undefined
    });
  };

  return (
    <div className="absolute right-0 top-0 flex h-screen  w-screen items-center justify-center bg-slate-700">
      <div className="relative h-[500px] w-[500px] bg-slate-600">
        <h1 className="mb-4 flex justify-center  text-xl font-bold">
          Update your profile
        </h1>
        <button
          onClick={closeUpdateProfile}
          className="absolute right-2 top-[2px] cursor-pointer text-2xl"
        >
          X
        </button>
        <form className="flex flex-col gap-4 " onSubmit={updateUserProfile}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            value={name}
            className="placeholder:text-bold focus m-auto w-4/5 rounded-lg border-2 p-2 shadow-md outline-none
             "
          />
          <input
            type="text"
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="district"
            value={district}
            className="placeholder:text-bold focus m-auto w-4/5 rounded-lg border-2 p-2 shadow-md outline-none"
          />
          <input
            type="text"
            onChange={(e) => setArea(e.target.value)}
            placeholder="area"
            value={area}
            className="placeholder:text-bold focus m-auto w-4/5 rounded-lg border-2 p-2 shadow-md outline-none"
          />
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            placeholder="image"
            value={image}
            className="placeholder:text-bold focus m-auto w-4/5 rounded-lg border-2 p-2 shadow-md outline-none"
          />
          <br />

          <button
            type="submit"
            className=" df font-2xl m-auto w-1/2 rounded-lg bg-white p-2 transition duration-300 ease-in hover:scale-[1.02]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
