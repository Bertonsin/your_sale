import { Stack, Text, Box, Image, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Stack
      width="80%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box width="20%">
        <Image src="/Coins.png" />
      </Box>
      <Stack
        width="40%"
        p={10}
        alignItems="center"
        justifyContent="center"
        position="relative"
        borderBottom="1px solid black"
      >
        <Heading as="h1" size="4xl" color="primary">
          Your Sale
        </Heading>
        <Text fontSize="18px" fontWeight="normal">
          Realize suas vendas de forma rápida e segura
        </Text>
      </Stack>
      <Box width="20%">
        <Image src="/Phone.png" />
      </Box>
    </Stack>
  );
}
