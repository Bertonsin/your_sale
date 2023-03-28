/* eslint-disable react/no-array-index-key */
import { Box, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import { OrderContext } from '../../contexts/orderContext/Context/orderContext';
import { FormDataProps } from '../../contexts/orderContext/Types/orderContextProps';

export default function OrderDetails() {
  const [orderInfo, setOrderInfo] = useState<FormDataProps[]>();

  const { orderList } = useContext(OrderContext);

  const { orderArrayId } = useParams();

  useEffect(() => {
    if (orderArrayId) {
      const data = orderList[+orderArrayId].map((item) => {
        return item;
      });

      setOrderInfo(data);
    }
  }, [orderArrayId, orderList]);

  if (!orderInfo) return null;

  return (
    <Container p={5} maxW="full" pb={20}>
      <VStack h="100svh" w="full" spacing={10} mb={20}>
        <Box w="sm">
          <Link to="/">
            <Header
              sizeOfHeadingFont="xl"
              sizeOfTextFont="8px"
              paddingForLine="8px"
            />
          </Link>
        </Box>

        <VStack
          w="full"
          borderWidth={1}
          borderRadius={68}
          borderColor="darkGray"
          p={3}
          spacing={10}
          bg="white"
        >
          <Card src="/orderDetails.png" title="Detalhe do pedido" />
        </VStack>
        <VStack spacing={10} w="full">
          <Box
            textStyle="bodyText"
            padding={5}
            w="full"
            fontSize={['12px', '14px']}
            bg="white"
            boxShadow="0px 16px 32px rgba(145, 158, 171, 0.24)"
            borderRadius={12}
          >
            <VStack spacing={3} alignItems="start">
              <Text color="smoothBlack" fontWeight={700}>
                Cliente
              </Text>
              <Text>{orderInfo[0]?.client?.name}</Text>

              <Text color="smoothBlack" fontWeight={700}>
                Endereço
              </Text>
              <Text>
                {orderInfo[0]?.client?.city}- {orderInfo[0]?.client?.state},
                Brasil
              </Text>
              <Text color="smoothBlack" fontWeight={700}>
                Contato
              </Text>
              <Text>(62) 39673-9026</Text>
            </VStack>
          </Box>
          {orderInfo?.map((item, index) => {
            return (
              <HStack
                w="full"
                textStyle="bodyText"
                padding={5}
                bg="white"
                fontSize={['12px', '14px']}
                justifyContent="space-between"
                boxShadow="0px 16px 32px rgba(145, 158, 171, 0.24)"
                borderRadius={12}
                key={index}
              >
                <Flex w="full">
                  <Box>
                    <VStack spacing={3} alignItems="start">
                      <Text color="smoothBlack" fontWeight={700}>
                        Nome do produto
                      </Text>
                      <Text>{item?.item?.product}</Text>

                      <Text color="smoothBlack" fontWeight={700}>
                        Custo
                      </Text>
                      <Text>R${item?.itemInfo?.cost},00</Text>
                      <Text color="smoothBlack" fontWeight={700}>
                        Preço unitário
                      </Text>
                      <Text>R${item?.itemInfo?.unitPrice},00</Text>
                      <Text color="smoothBlack" fontWeight={700}>
                        Quantidade
                      </Text>
                      <Text>{item?.itemInfo?.quantity}x</Text>
                    </VStack>
                  </Box>
                </Flex>
                <Box w="full">
                  <VStack spacing={3} alignItems="start">
                    <Text color="smoothBlack" fontWeight={700}>
                      Desconto(%)
                    </Text>
                    <Text>{item?.itemInfo?.discount}%</Text>

                    <Text color="smoothBlack" fontWeight={700}>
                      Acréscimo(%)
                    </Text>
                    <Text>{item?.itemInfo?.addition}%</Text>
                    <Text color="smoothBlack" fontWeight={700}>
                      Margem(%)
                    </Text>
                    <Text>{item?.itemInfo?.profitMargin}%</Text>
                  </VStack>
                </Box>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
    </Container>
  );
}
