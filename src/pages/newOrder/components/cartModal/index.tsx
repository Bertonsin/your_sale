import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { ModalContext } from '../../../../contexts/modalContext/context/modalContext';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';

export default function CartModal() {
  const { closeCartModal, isCartModalOpen } = useContext(ModalContext);
  const { cart } = useContext(OrderContext);

  return (
    <Modal
      onClose={closeCartModal}
      isOpen={isCartModalOpen}
      isCentered
      size="4xl"
      scrollBehavior="inside"
    >
      <ModalContent borderRadius={20}>
        <ModalHeader color="primary">Carrinho</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={10}>
            {cart &&
              cart.map((item) => {
                return (
                  <Box
                    key={item.itemInfo?.total}
                    textStyle="bodyText"
                    padding={5}
                    w="full"
                    fontSize={['8px', '14px']}
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
                    borderRadius={12}
                  >
                    <Text color="#191919" fontWeight={700} mb={5}>
                      {item.item?.product}
                    </Text>
                    <Text>Quantidade:{item.itemInfo?.quantity}x</Text>
                    <Text>Custo unitário:R${item.itemInfo?.cost},00</Text>
                    <Text>Preço unitário:R${item.itemInfo?.unitPrice},00</Text>
                    <Text>
                      Percentual de desconto:{item.itemInfo?.discount}%
                    </Text>
                    <Text>Total:{item.itemInfo?.total}</Text>
                  </Box>
                );
              })}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={closeCartModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
