import { Text, Box, Image, Heading, HStack, VStack } from '@chakra-ui/react';
import { HeaderProps } from './Types/HeaderProps';

export default function Header({
  sizeOfHeadingFont,
  sizeOfTextFont,
  paddingForLine,
}: HeaderProps) {
  return (
    <HStack
      w={['sm', 'full']}
      mt={[20, 0]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box w={['lg', 'sm']}>
        <Image src="/Coins.png" />
      </Box>
      <VStack
        w="container.md"
        borderBottom="0.1px solid #212326"
        gap={[0, 2]}
        pb={paddingForLine || [5, 8, 12]}
      >
        <Heading color="primary">
          <Text textStyle="headingText" fontSize={sizeOfHeadingFont}>
            Your Sale
          </Text>
        </Heading>
        <Text textStyle="bodyText" fontSize={sizeOfTextFont}>
          Realize suas vendas de forma rápida e segura
        </Text>
      </VStack>
      <Box w={['lg', 'sm']}>
        <Image src="/Phone.png" />
      </Box>
    </HStack>
  );
}
