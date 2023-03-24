import {
  Box,
  Container,
  Flex,
  FormControl,
  Grid,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';
import ClientItem from './clientItem';
import { ClientItemProps } from './clientItem/Types/ClientItemProps';

export default function ClientList() {
  const { data, isLoading } = useQuery<ClientItemProps[]>({
    queryKey: ['clientList'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/clients');
      return response.data;
    },
  });
  const { setClient } = useContext(OrderContext);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Grid
        justifyContent="space-around"
        templateColumns="1.5fr repeat(3,1fr)"
        textStyle="listText"
        textAlign="center"
        color="#FFF"
        w="full"
        bg="#263238"
        p={5}
        borderRadius="30px 30px 0px 0px"
      >
        <Text>Nome</Text>
        <Text>CNPJ</Text>
        <Text>Estado</Text>
        <Text>Cidade</Text>
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
                  <Box key={item.city} bg={index % 2 === 0 ? '#CCC' : '#FFF'}>
                    <Radio
                      borderRadius="none"
                      borderColor="black"
                      colorScheme="blue"
                      value={`${item.name} ${item.cnpj} ${item.state} ${item.city}`}
                      w="full"
                      name="marcou"
                      py={2}
                      pl={10}
                      onChange={() => {
                        setClient(item);
                      }}
                    >
                      <ClientItem
                        backgroundColor={index % 2 === 0 ? '#CCC' : '#FFF'}
                        name={item.name}
                        cnpj={item.cnpj}
                        state={item.state}
                        city={item.city}
                      />
                    </Radio>
                  </Box>
                );
              })}
          </RadioGroup>
        </Flex>
      </FormControl>
    </Container>
  );
}
