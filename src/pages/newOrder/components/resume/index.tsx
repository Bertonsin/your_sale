/* eslint-disable no-unsafe-optional-chaining */
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useContext, useEffect, useMemo } from 'react';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';

export default function Resume() {
  const { formData, cart, setAverages } = useContext(OrderContext);

  const calculateAverages = useMemo(() => {
    const totalSum = cart.reduce((acc, item) => {
      if (item?.itemInfo?.total) return acc + item?.itemInfo?.total;
      return 0;
    }, 0);
    const totalDiscount = cart.reduce((acc, item) => {
      if (item?.itemInfo?.total) return acc + +item?.itemInfo?.discount;
      return 0;
    }, 0);
    const totalProfitMargin = cart.reduce((acc, item) => {
      if (item?.itemInfo?.total) return acc + +item?.itemInfo?.profitMargin;
      return 0;
    }, 0);

    return {
      totalAverage: totalSum / cart.length,
      discountAverage: totalDiscount / cart.length,
      profitMarginAverage: totalProfitMargin / cart.length,
    };
  }, [cart]);

  useEffect(() => {
    setAverages((prevAverages) => [...prevAverages, calculateAverages]);
  }, [calculateAverages, setAverages]);

  return (
    <VStack spacing={10} w="container.lg">
      <Box
        textStyle="bodyText"
        padding={5}
        w="full"
        fontSize={['18px', '14px']}
        boxShadow="0px 16px 32px rgba(145, 158, 171, 0.25)"
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
            boxShadow="0px 16px 32px rgba(145, 158, 171, 0.25)"
            borderRadius={12}
          >
            <Flex w="sm">
              <Box>
                <VStack spacing={3} alignItems="start">
                  <Text color="#191919" fontWeight={700}>
                    Nome do produto
                  </Text>
                  <Text>{item.item?.product}</Text>

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
