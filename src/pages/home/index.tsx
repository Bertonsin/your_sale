import { Container, HStack, VStack } from '@chakra-ui/react';
import Card from '../../Components/Card';
import Header from '../../Components/Header';
import TutorialTexts from './Components/tutorialTexts';

export default function Home() {
  return (
    <Container padding={0} maxW="container.xl">
      <VStack
        h="100svh"
        w="full"
        justifyContent="center"
        alignItems="center"
        bg="#F2F2F2"
        spacing={10}
      >
        <Header />
        <HStack
          justifyContent={{
            md: 'center',
            lg: 'space-around',
            xl: 'space-between',
          }}
          flexDirection={{
            base: 'column',
            xl: 'row',
          }}
          alignItems="center"
          w="full"
          gap={10}
        >
          <TutorialTexts />
          <VStack spacing={5} width="sm">
            <Card
              src="/newOrder.png"
              title="Nova Venda"
              info="Inicie uma nova venda"
              to="/newOrder"
            />

            <Card
              src="/orderList.png"
              title="Nova Venda"
              info="Inicie uma nova venda"
              to="/orderList"
            />
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
}
