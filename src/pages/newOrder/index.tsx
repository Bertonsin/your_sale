import { Box, Container, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import Header from '../../Components/Header';

export default function NewOrder() {
  return (
    <Container p={0} maxW="container.lg">
      <VStack h="100svh" w="full" spacing={10}>
        <Box w="container.lg">
          <Link to="/">
            <Header />
          </Link>
        </Box>

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
          {/* Formulario */}
        </VStack>
      </VStack>
    </Container>
  );
}
