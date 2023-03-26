/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/prefer-default-export */
import { useDisclosure } from '@chakra-ui/react';
import { useMemo } from 'react';
import { ModalContext } from './context/modalContext';
import { ModalContextProviderProps } from './context/Types/modalContextProviderProps';

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const {
    onOpen: openFormModal,
    isOpen: isFormModalOpen,
    onClose: closeFormModal,
  } = useDisclosure();

  const {
    onOpen: openCartModal,
    isOpen: isCartModalOpen,
    onClose: closeCartModal,
  } = useDisclosure();

  const selectedData = useMemo(
    () => ({
      openFormModal,
      isFormModalOpen,
      closeFormModal,
      openCartModal,
      isCartModalOpen,
      closeCartModal,
    }),
    [
      closeCartModal,
      closeFormModal,
      isCartModalOpen,
      isFormModalOpen,
      openCartModal,
      openFormModal,
    ]
  );
  return (
    <ModalContext.Provider value={selectedData}>
      {children}
    </ModalContext.Provider>
  );
}
