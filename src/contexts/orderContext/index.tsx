/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/prefer-default-export */
import { useDisclosure } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { ClientItemProps } from '../../pages/newOrder/components/clientList/clientItem/Types/ClientItemProps';
import { ItemProps } from '../../pages/newOrder/components/itemList/item/Types/ItemProps';
import { OrderContext } from './Context/orderContext';
import { OrderContextProviderProps } from './Types/orderContextProviderProps';

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [client, setClient] = useState<ClientItemProps>();
  const [item, setItem] = useState<ItemProps>();
  const {
    onOpen: openModal,
    isOpen: isModalOpen,
    onClose: closeModal,
  } = useDisclosure();

  const selectedData = useMemo(
    () => ({
      client,
      setClient,
      item,
      setItem,
      openModal,
      isModalOpen,
      closeModal,
    }),
    [client, item, closeModal, openModal, isModalOpen]
  );
  return (
    <OrderContext.Provider value={selectedData}>
      {children}
    </OrderContext.Provider>
  );
}
