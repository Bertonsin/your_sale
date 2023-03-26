/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import StepsItem from '../../Components/StepsItem';
import { ItemFormContextProvider } from '../../contexts/itemformContext';
import { ModalContext } from '../../contexts/modalContext/context/modalContext';
import { OrderContext } from '../../contexts/orderContext/Context/orderContext';
import { useForm } from '../../hooks/useForm';
import { StepChanger } from '../../services/stepChanger/stepChanger';
import CartModal from './components/cartModal';
import ClientList from './components/clientList';
import ItemList from './components/itemList';
import Resume from './components/resume';

export default function NewOrder() {
  const steps = [
    { stepPosition: 1, stepName: 'Cliente' },
    { stepPosition: 2, stepName: 'Itens' },
    { stepPosition: 3, stepName: 'Resumo' },
  ];
  const ListComponents = [
    <ClientList key="client" />,
    <ItemList key="item" />,
    <Resume key="resume" />,
  ];
  const navigate = useNavigate();

  const { currentComponent, changeStep, currentStep } = useForm(ListComponents);
  const { formData, cart, setOrderList, orderList } = useContext(OrderContext);
  const { openCartModal } = useContext(ModalContext);

  return (
    <ItemFormContextProvider>
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
          <HStack
            w="full"
            position="relative"
            justifyContent="space-around"
            _after={{
              content: `""`,
              width: 'container.sm',
              borderBottom: '1px solid #A3A3A3',
              position: 'absolute',
              top: 3,
            }}
          >
            {steps.map((item) => {
              return (
                <StepsItem
                  key={item.stepName}
                  currentStep={currentStep}
                  stepName={item.stepName}
                  stepPosition={item.stepPosition}
                />
              );
            })}
          </HStack>
          <Box w="full">{currentComponent}</Box>
          <FormControl>
            {currentComponent === ListComponents[2] ? (
              <Flex
                w="full"
                textStyle="buttonText"
                justifyContent="space-between"
                mt={5}
                mb={5}
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
                  onClick={(e) => {
                    localStorage.setItem('allData', JSON.stringify(cart));

                    navigate(0);
                    changeStep(currentStep - 2, e);
                  }}
                >
                  Salvar
                </Button>
              </Flex>
            ) : (
              <Flex
                w="full"
                textStyle="buttonText"
                justifyContent="space-between"
                mt={5}
                mb={5}
              >
                <Button
                  variant="outline"
                  onClick={(e) => changeStep(currentStep - 1, e)}
                >
                  Voltar
                </Button>

                {cart.length > 0 && currentStep + 1 === 2 && (
                  <Button variant="outline" onClick={openCartModal}>
                    Carrinho
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="solid"
                  onClick={(event) => {
                    StepChanger({
                      changeStep,
                      formData,
                      currentStep,
                      currentComponent,
                      event,
                      ListComponents,
                      cart,
                    });
                  }}
                >
                  Continuar
                </Button>
              </Flex>
            )}
          </FormControl>
        </VStack>
      </Container>
      <CartModal />
    </ItemFormContextProvider>
  );
}
