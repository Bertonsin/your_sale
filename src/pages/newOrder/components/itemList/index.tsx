/* eslint-disable react/no-array-index-key */
import {
  Box,
  Container,
  Flex,
  FormControl,
  Grid,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';
import FormModal from '../formNewOrder/formModal';
import Item from './item';
import { ItemProps } from './item/Types/ItemProps';

export default function ItemList() {
  const { data, isLoading } = useQuery<ItemProps[]>({
    queryKey: ['ItemList'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/itens');
      return response.data;
    },
  });

  const { setItem } = useContext(OrderContext);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Grid
        justifyContent="space-around"
        templateColumns="3fr 2.7fr 1fr"
        textStyle="listText"
        textAlign="center"
        color="#FFF"
        w="full"
        bg="#263238"
        gap={20}
        p={5}
        borderRadius="30px 30px 0px 0px"
      >
        <Text>Produto</Text>
        <HStack w="full" justifyContent="space-around">
          <Text>Custo</Text>
          <Text>Estoque</Text>
        </HStack>
        <Text>Custo Unitário</Text>
      </Grid>
      <FormControl>
        <Flex
          border="3px solid #000"
          borderTop="none"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <RadioGroup w="full">
            {data &&
              data.map((item, index) => {
                return (
                  <Box key={item.stock} bg={index % 2 === 0 ? '#CCC' : '#FFF'}>
                    <Radio
                      value={`${item.product} ${item.cost} ${item.stock} ${item.unitPrice}`}
                      borderRadius="none"
                      borderColor="black"
                      w="full"
                      py={2}
                      pl={10}
                      onChange={() => {
                        setItem(item);
                      }}
                    >
                      <Item
                        key={index}
                        product={item.product}
                        cost={item.cost}
                        stock={item.stock}
                        unitPrice={item.unitPrice}
                      />
                    </Radio>
                  </Box>
                );
              })}
          </RadioGroup>
        </Flex>
      </FormControl>
      <FormModal />
    </Container>
  );
}
