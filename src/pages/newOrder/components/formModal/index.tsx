import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FormNewOrder } from './formNewOrder';
import { ItemFormContext } from '../../../../contexts/itemformContext/context/itemFormContext';
import { ModalContext } from '../../../../contexts/modalContext/context/modalContext';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';

export default function FormModal() {
  const { formData, setCart, cart } = useContext(OrderContext);
  const { closeFormModal, isFormModalOpen } = useContext(ModalContext);
  const { setUnitPrice, setQuantity, setDiscount, setAddition } =
    useContext(ItemFormContext);
  const productUnitPrice = formData?.item?.unitPrice.toString() || '';
  const successToast = useToast();

  return (
    <Modal
      isOpen={isFormModalOpen}
      size={['full', '4xl']}
      onClose={closeFormModal}
      onCloseComplete={() => {
        setUnitPrice(productUnitPrice);
        setQuantity('1');
        setDiscount('0');
        setAddition('0');
      }}
    >
      <ModalOverlay />
      <ModalContent borderRadius={20}>
        <ModalHeader fontFamily="Inter" fontWeight="600" color="primary">
          Nome do produto
        </ModalHeader>

        <ModalBody pb={6} textStyle="listText">
          <VStack spacing={5}>
            <FormNewOrder />
          </VStack>
        </ModalBody>

        <ModalFooter
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          w="full"
        >
          <Button
            variant="outline"
            onClick={() => {
              closeFormModal();
            }}
          >
            Voltar
          </Button>
          <Button
            type="submit"
            variant="solid"
            onClick={() => {
              setCart([...cart, { ...formData }]);
              closeFormModal();
              successToast({
                description: `notebook ${formData?.item?.product} adicionado no carrinho!`,
                status: 'success',
                position: 'top-right',
                duration: 9000,
                variant: 'subtle',
                isClosable: true,
              });
            }}
          >
            Continuar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
