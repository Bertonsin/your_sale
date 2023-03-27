import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ItemProps } from '../../pages/newOrder/components/itemList/item/Types/ItemProps';

export default function useItemList() {
  const { data, isLoading, error } = useQuery<ItemProps[]>({
    queryKey: ['ItemList'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/itens');
      return response.data;
    },
  });

  return { data, isLoading, error };
}
