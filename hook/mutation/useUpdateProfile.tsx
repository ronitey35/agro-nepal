import { backend_url } from '@/lib/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type UpdateUserOptions = Partial<{
  name: string;
  image: string;
  state: string;
  district: string;
  area: string;
  hasOptedNotification: boolean;
}>;
export const useUpdateMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationKey: ['updateProfile'],
    mutationFn: updateProfile,
    onSuccess: (user) => {
      queryClient.setQueryData<User>(['profile'], user);
      router.push('/userprofile');
    }
  });
};

const updateProfile = async (options: UpdateUserOptions): Promise<User> => {
  const { data } = await axios.put(
    `${backend_url}/api/profile`,
    options,

    {
      withCredentials: true
    }
  );
  return data.user;
};
