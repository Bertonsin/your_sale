import { Container, HStack, VStack } from '@chakra-ui/react';
import Header from '../../Components/Header';
import CardButton from './Components/cardButton';
import TutorialTexts from './Components/tutorialTexts';

export default function Home() {
  return (
    <Container
      padding={0}
      maxW="container.xl"
      w={['sm', 'container.lg', 'container.xl']}
    >
      <VStack
        h="100svh"
        w="full"
        justifyContent="center"
        alignItems="center"
        spacing={[0, 10]}
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
          gap={[0, 10]}
        >
          <TutorialTexts />
          <CardButton />
        </HStack>
      </VStack>
    </Container>
  );
}
