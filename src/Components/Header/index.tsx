import { Text, Box, Image, Heading, HStack, VStack } from '@chakra-ui/react';

export default function Header() {
  return (
    <HStack w="full" justifyContent="space-between" alignItems="center">
      <Box w="sm">
        <Image src="/Coins.png" />
      </Box>
      <VStack
        w="container.md"
        borderBottom="1px solid black"
        gap={2}
        pb={[0, 12]}
      >
        <Heading color="primary">
          <Text textStyle="headingText">Your Sale</Text>
        </Heading>
        <Text textStyle="bodyText">
          Realize suas vendas de forma rápida e segura
        </Text>
      </VStack>
      <Box w="sm">
        <Image src="/Phone.png" />
      </Box>
    </HStack>
  );
}
