import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClientItem from '../clientItem';
import { ClientItemProps } from '../clientItem/Types/clientItemProps';

export default function ClientList() {
  const { data, isLoading } = useQuery<ClientItemProps[]>({
    queryKey: ['clientList'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/clients');
      return response.data;
    },
  });

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
      <Flex
        border="3px solid #000"
        borderTop="none"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {data &&
          data.map((item, index) => {
            return (
              <ClientItem
                key={item.cnpj}
                backgroundColor={index % 2 === 0 ? '#CCC' : '#FFF'}
                name={item.name}
                cnpj={item.cnpj}
                state={item.state}
                city={item.city}
              />
            );
          })}
      </Flex>
    </Container>
  );
}
