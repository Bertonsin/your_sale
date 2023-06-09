import {
  Box,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  FormControl,
  Grid,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import SkeletonLoading from '../../../../Components/SkeletonLoading';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';
import useClientList from '../../../../hooks/useClientList';
import ClientItem from './clientItem';

export default function ClientList() {
  const { data, isLoading } = useClientList();
  const { updateField, formData } = useContext(OrderContext);

  if (isLoading) {
    return <SkeletonLoading SkeletonListType="clientList" />;
  }

  return (
    <Container maxW="container.xl" p={0} w={['sm', 'container.lg', 'full']}>
      <Grid
        justifyContent="space-around"
        templateColumns={['2fr 2fr', '1.5fr repeat(3,1fr)']}
        textStyle="listText"
        textAlign="center"
        color="#FFF"
        w="full"
        bg="softBlack"
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
          <CheckboxGroup
            value={[
              `${formData?.client?.name} ${formData?.client?.cnpj} ${formData?.client?.state} ${formData?.client?.city}`,
            ]}
          >
            {data &&
              data.map((item, index) => {
                return (
                  <Box
                    key={item.city}
                    bg={index % 2 === 0 ? 'gray' : 'white'}
                    w="full"
                  >
                    <Checkbox
                      borderRadius="none"
                      borderColor="black"
                      colorScheme="blue"
                      value={`${item.name} ${item.cnpj} ${item.state} ${item.city}`}
                      onChange={() => updateField('client', item)}
                      checked={formData.client?.city === item.city}
                      w="full"
                      name="marcou"
                      py={2}
                      pl={10}
                    >
                      <ClientItem
                        id={item.id}
                        name={item.name}
                        cnpj={item.cnpj}
                        state={item.state}
                        city={item.city}
                      />
                    </Checkbox>
                  </Box>
                );
              })}
          </CheckboxGroup>
        </Flex>
      </FormControl>
    </Container>
  );
}
