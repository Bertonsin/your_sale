import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';

export default function Resume() {
  const { formData, cart } = useContext(OrderContext);

  return (
    <VStack spacing={10} w="container.lg">
      <Box
        textStyle="bodyText"
        padding={5}
        w="full"
        fontSize={['18px', '14px']}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        borderRadius={12}
      >
        <VStack spacing={3} alignItems="start">
          <Text color="#191919" fontWeight={700}>
            Cliente
          </Text>
          <Text>{formData.client?.name}</Text>

          <Text color="#191919" fontWeight={700}>
            Endereço
          </Text>
          <Text>
            {formData.client?.city} - {formData.client?.state}, Brasil
          </Text>
          <Text color="#191919" fontWeight={700}>
            Contato
          </Text>
          <Text>(62) 39673-9026</Text>
        </VStack>
      </Box>

      {cart.map((item) => {
        return (
          <HStack
            w="full"
            key={item.item?.id}
            textStyle="bodyText"
            padding={5}
            fontSize={['18px', '14px']}
            justifyContent="space-between"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
            borderRadius={12}
          >
            <Flex w="sm">
              <Box>
                <VStack spacing={3} alignItems="start">
                  <Text color="#191919" fontWeight={700}>
                    Nome do produto
                  </Text>
                  <Text>{item.item?.id}</Text>

                  <Text color="#191919" fontWeight={700}>
                    Custo
                  </Text>
                  <Text>R${item.itemInfo?.cost},00</Text>
                  <Text color="#191919" fontWeight={700}>
                    Preço unitário
                  </Text>
                  <Text>R${item.itemInfo?.unitPrice},00</Text>
                  <Text color="#191919" fontWeight={700}>
                    Quantidade
                  </Text>
                  <Text>1x</Text>
                </VStack>
              </Box>
            </Flex>
            <Box w="sm">
              <VStack spacing={3} alignItems="start">
                <Text color="#191919" fontWeight={700}>
                  Desconto(%)
                </Text>
                <Text>{item.itemInfo?.discount}%</Text>

                <Text color="#191919" fontWeight={700}>
                  Acréscimo(%)
                </Text>
                <Text>{item.itemInfo?.addition}%</Text>
                <Text color="#191919" fontWeight={700}>
                  Margem(%)
                </Text>
                <Text>{item.itemInfo?.profitMargin}%</Text>
              </VStack>
            </Box>
          </HStack>
        );
      })}
    </VStack>
  );
}
