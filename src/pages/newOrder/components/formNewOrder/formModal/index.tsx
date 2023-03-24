import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { OrderContext } from '../../../../../contexts/orderContext/Context/orderContext';

export default function FormModal() {
  const [unitPrice, setUnitPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [addition, setAddition] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const { item, isModalOpen, closeModal } = useContext(OrderContext);

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isModalOpen}
      onClose={closeModal}
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{(item && item.product) || 'Nome do produto'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={5}>
            <FormControl
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="12px"
              p="12px"
            >
              <FormLabel>Preço Unitário</FormLabel>
              <Input
                type="number"
                onChange={(event) => setUnitPrice(+event.target.value)}
              />
            </FormControl>

            <FormControl
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="12px"
              p="12px"
            >
              <FormLabel>Custo</FormLabel>
              <Input
                type="number"
                onChange={(event) => setCost(+event.target.value)}
              />
            </FormControl>

            <FormControl
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="12px"
              p="12px"
            >
              <FormLabel>Desconto(%)</FormLabel>
              <Input
                placeholder="Percentual de desconto"
                type="number"
                onChange={(event) => setDiscount(+event.target.value)}
              />
            </FormControl>

            <FormControl
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="12px"
              p="12px"
            >
              <FormLabel>Acréscimo(%)</FormLabel>
              <Input
                placeholder="Percentual de acréscimo"
                type="number"
                onChange={(event) => setAddition(+event.target.value)}
              />
            </FormControl>

            <FormControl
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="12px"
              p="12px"
            >
              <FormLabel>Quantidade</FormLabel>
              <Input
                placeholder="Quantidade de produto"
                type="number"
                onChange={(event) => setQuantity(+event.target.value)}
              />
            </FormControl>

            <FormControl
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="12px"
              p="12px"
            >
              <FormLabel>Valor total</FormLabel>
              <Input isDisabled value={`R$${cost},00`} type="text" />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          w="full"
        >
          <Button variant="outline" onClick={closeModal}>
            Voltar
          </Button>
          <Button type="submit" variant="solid">
            Continuar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
