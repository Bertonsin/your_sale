import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ItemProps } from '../../pages/newOrder/components/itemList/item/Types/ItemProps';

export default function useItemList() {
  const toastError = useToast();
  const { data, isLoading, isError } = useQuery<ItemProps[]>({
    queryKey: ['ItemList'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/itens');
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
