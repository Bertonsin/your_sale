import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import { OrderContext } from '../../contexts/orderContext/Context/orderContext';

export default function OrderList() {
  const { orderList, setOrderList } = useContext(OrderContext);
  useEffect(() => {
    const listOfOrders = localStorage.getItem('allData');
    if (listOfOrders) {
      setOrderList(JSON.parse(listOfOrders));
    }
  }, [setOrderList]);

  return (
    <Container padding={0} maxW="container.xl">
      <VStack
        h="100svh"
        w="full"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
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
          <Card src="/orderList.png" title="Lista de pedidos" />
        </VStack>

        <Container maxW="container.xl" p={0}>
          <Grid
            justifyContent="space-around"
            templateColumns={['2fr 2fr', 'repeat(5,1fr)']}
            textStyle="listText"
            textAlign="center"
            color="#FFF"
            w="full"
            bg="#263238"
            p={5}
            borderRadius="30px 30px 0px 0px"
          >
            <Text>Cliente</Text>
            <Text>CNPJ</Text>
            <Text>Valor da venda </Text>
            <Text>Media de desconto</Text>
            <Text>Margem(%)</Text>
          </Grid>
          <Flex
            border="3px solid #000"
            borderTop="none"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {orderList.length > 0 ? (
              orderList.map((item, index) => {
                return (
                  <Link
                    to={`/${index}`}
                    key={item.item?.id}
                    style={{ width: '100%' }}
                  >
                    <Box
                      _hover={{ backgroundColor: '#658594' }}
                      transition="all 0.3s ease-out"
                      bg={index % 2 === 0 ? '#CCC' : '#FFF'}
                      w="full"
                      textStyle="listText"
                    >
                      <Grid
                        w="full"
                        py={2}
                        templateColumns={['2fr 2fr', 'repeat(5,1fr)']}
                        color="#212326"
                      >
                        <Text color="#263238" fontWeight={600}>
                          {item.client?.name}
                        </Text>
                        <Text>{item.client?.cnpj}</Text>
                        <Text>{item.itemInfo?.total}</Text>
                        <Text>{item.itemInfo?.discount}%</Text>
                        <Text>{item.itemInfo?.profitMargin}%</Text>
                      </Grid>
                    </Box>
                  </Link>
                );
              })
            ) : (
              <Flex
                textStyle="listText"
                h="sm"
                justifyContent="center"
                alignItems="center"
              >
                <Text>Nenhum pedido encontrado!</Text>
              </Flex>
            )}
          </Flex>
        </Container>
      </VStack>
    </Container>
  );
}
