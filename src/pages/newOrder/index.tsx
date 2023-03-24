import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import { OrderContext } from '../../contexts/orderContext/Context/orderContext';
import { useForm } from '../../hooks/useForm';
import ClientList from './components/clientList';
import ItemList from './components/itemList';

export default function NewOrder() {
  const steps = [
    { stepPosition: 1, stepName: 'Cliente' },
    { stepPosition: 2, stepName: 'Itens' },
    { stepPosition: 3, stepName: 'Resumo' },
  ];
  const ListComponents = [<ClientList key="client" />, <ItemList key="item" />];

  const { currentComponent, changeStep, currentStep } = useForm(ListComponents);
  const { client, item: product, openModal } = useContext(OrderContext);

  return (
    <Container p={0} maxW="container.lg">
      <VStack h="100svh" w="full" spacing={10}>
        <Box w="sm">
          <Link to="/">
            <Header
              sizeOfHeadingFont="xl"
              sizeOfTextFont="8px"
              paddingForLine="8px"
            />
          </Link>
        </Box>

        {currentStep + 1 === 1 ? (
          <VStack
            w="full"
            borderWidth={1}
            borderRadius={68}
            borderColor="#DADADA"
            p={3}
            spacing={10}
            bg="#FFF"
          >
            <Card src="/newOrder.png" title="Nova Venda" />
          </VStack>
        ) : null}
        <HStack w="full" justifyContent="space-around">
          {steps.map((item) => {
            return (
              <Flex
                key={item.stepName}
                direction="column"
                alignItems="center"
                textAlign="center"
              >
                <Text
                  color={
                    item.stepPosition === currentStep + 1 ? '#FFF' : '#CCC'
                  }
                  bg={
                    item.stepPosition === currentStep + 1
                      ? '#00297B'
                      : '#A3A3A3'
                  }
                  borderRadius="50%"
                  w="1.5em"
                >
                  {item.stepPosition}
                </Text>
                <Text
                  color={
                    item.stepPosition === currentStep + 1
                      ? '#191919'
                      : '#A3A3A3'
                  }
                >
                  {item.stepName}
                </Text>
              </Flex>
            );
          })}
        </HStack>
        <Box w="full">{currentComponent}</Box>
        <FormControl>
          <Flex
            w="full"
            textStyle="buttonText"
            justifyContent="space-between"
            mt={5}
          >
            <Button
              variant="outline"
              onClick={(e) => changeStep(currentStep - 1, e)}
            >
              Voltar
            </Button>
            <Button
              type="submit"
              variant="solid"
              onClick={(event) => {
                if (client && currentComponent !== ListComponents[1]) {
                  changeStep(currentStep + 1, event);
                }
                if (currentComponent === ListComponents[1] && product) {
                  openModal();
                }
              }}
            >
              Continuar
            </Button>
          </Flex>
        </FormControl>
      </VStack>
    </Container>
  );
}
