import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ClientItemProps } from '../../pages/newOrder/components/clientList/clientItem/Types/ClientItemProps';

export default function useClientList() {
  const { data, isLoading, error } = useQuery<ClientItemProps[]>({
    queryKey: ['clientList'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/clients');
      return response.data;
    },
  });

  return { data, isLoading, error };
}
