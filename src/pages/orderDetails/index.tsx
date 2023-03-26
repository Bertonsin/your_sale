import { Box, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import { OrderContext } from '../../contexts/orderContext/Context/orderContext';
import { FormDataProps } from '../../contexts/orderContext/Types/orderContextProps';

export default function OrderDetails() {
  const [orderInfo, setOrderInfo] = useState<FormDataProps>();

  const { orderList } = useContext(OrderContext);

  const { orderId } = useParams();

  useEffect(() => {
    if (orderId) {
      setOrderInfo(orderList[+orderId]);
    }
  }, [orderId, orderList]);

  return (
    <Container p={5} maxW="full">
      <VStack h="100svh" w="full">
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
          borderColor="#DADADA"
          p={3}
          spacing={10}
          bg="#FFF"
        >
          <Card src="/orderDetails.png" title="Detalhe do pedido" />
        </VStack>

        <VStack spacing={10} w="full">
          <Box
            textStyle="bodyText"
            padding={5}
            w="full"
            fontSize={['8px', '14px']}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
            borderRadius={12}
          >
            <VStack spacing={3} alignItems="start">
              <Text color="#191919" fontWeight={700}>
                Cliente
              </Text>
              <Text>{orderInfo?.client?.name}</Text>

              <Text color="#191919" fontWeight={700}>
                Endereço
              </Text>
              <Text>
                {orderInfo?.client?.city}- {orderInfo?.client?.state}, Brasil
              </Text>
              <Text color="#191919" fontWeight={700}>
                Contato
              </Text>
              <Text>(62) 39673-9026</Text>
            </VStack>
          </Box>

          <HStack
            w="full"
            textStyle="bodyText"
            padding={5}
            fontSize={['8px', '14px']}
            justifyContent="space-between"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
            borderRadius={12}
          >
            <Flex w="full">
              <Box>
                <VStack spacing={3} alignItems="start">
                  <Text color="#191919" fontWeight={700}>
                    Nome do produto
                  </Text>
                  <Text>{orderInfo?.item?.product}</Text>

                  <Text color="#191919" fontWeight={700}>
                    Custo
                  </Text>
                  <Text>R${orderInfo?.itemInfo?.cost},00</Text>
                  <Text color="#191919" fontWeight={700}>
                    Preço unitário
                  </Text>
                  <Text>R${orderInfo?.itemInfo?.unitPrice},00</Text>
                  <Text color="#191919" fontWeight={700}>
                    Quantidade
                  </Text>
                  <Text>{orderInfo?.itemInfo?.quantity}x</Text>
                </VStack>
              </Box>
            </Flex>
            <Box w="full">
              <VStack spacing={3} alignItems="start">
                <Text color="#191919" fontWeight={700}>
                  Desconto(%)
                </Text>
                <Text>{orderInfo?.itemInfo?.discount}%</Text>

                <Text color="#191919" fontWeight={700}>
                  Acréscimo(%)
                </Text>
                <Text>{orderInfo?.itemInfo?.addition}%</Text>
                <Text color="#191919" fontWeight={700}>
                  Margem(%)
                </Text>
                <Text>{orderInfo?.itemInfo?.profitMargin}%</Text>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
}