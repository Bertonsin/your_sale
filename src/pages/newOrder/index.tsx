/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, Container, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import StepsItem from '../../Components/StepsItem';
import { ItemFormContextProvider } from '../../contexts/itemformContext';
import { useForm } from '../../hooks/useForm';
import ButtonsContainer from './components/ButtonsContainer';
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

  const { currentComponent, changeStep, currentStep } = useForm(ListComponents);

  return (
    <ItemFormContextProvider>
      <Container
        p={0}
        maxW="container.lg"
        w={['xl', 'container.lg', 'container.xl']}
      >
        <VStack h="100svh" w="full" spacing={10}>
          <Box w="sm">
            <Link to="/">
              <Header
                sizeOfHeadingFont="sm"
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
              borderColor="darkGray"
              p={3}
              spacing={10}
              bg="white"
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

          <ButtonsContainer
            ListComponents={ListComponents}
            changeStep={changeStep}
            currentComponent={currentComponent}
            currentStep={currentStep}
          />
        </VStack>
      </Container>
      <CartModal />
    </ItemFormContextProvider>
  );
}
