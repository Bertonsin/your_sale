import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ClientItemProps } from '../../pages/newOrder/components/clientList/clientItem/Types/ClientItemProps';

export default function useClientList() {
  const toastError = useToast();

  const { data, isLoading, isError } = useQuery<ClientItemProps[]>({
    queryKey: ['clientList'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/clients');
      return response.data;
    },
    onError: (error) =>
      toastError({
        description: `Ocorreu um erro: ${error}`,
        status: 'error',
        position: 'top-right',
        duration: 9000,
        variant: 'subtle',
        isClosable: true,
      }),
  });

  return { data, isLoading, isError };
}
