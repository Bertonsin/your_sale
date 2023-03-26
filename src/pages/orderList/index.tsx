import { Box, Container, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

export default function OrderList() {
  return (
    <Container padding={0} maxW="container.xl">
      <VStack
        h="100svh"
        w="full"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
        <Box w="sm">
          <Link to="/">
            <Header
              sizeOfHeadingFont="xl"
              sizeOfTextFont="8px"
              paddingForLine="8px"
            />
          </Link>
        </Box>
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
          ok
        </HStack>
      </VStack>
    </Container>
  );
}
