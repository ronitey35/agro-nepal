import { backend_url } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchProfile()
  });
};

export const fetchProfile = async (): Promise<User> => {
  const { data } = await axios.get(`${backend_url}/api/profile`);
  return data.user;
};
