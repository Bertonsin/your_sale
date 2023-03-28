import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl">
      <VStack
        spacing={5}
        h="100svh"
        w="full"
        justifyContent="center"
        textStyle="bodyText"
      >
        <Heading color="primary">
          <Text textStyle="headingText">Erro 404</Text>
        </Heading>
        <Text>A página que você está buscando não existe</Text>
        <Button onClick={() => navigate('/')} variant="outline">
          Voltar para o início
        </Button>
      </VStack>
    </Container>
  );
}
