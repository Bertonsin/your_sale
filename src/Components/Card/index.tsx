import { HStack, Image, Box, Text } from '@chakra-ui/react';
import { CardProps } from './Types/cardProps';

export default function Card({ src, title, info }: CardProps) {
  return (
    <HStack
      transition="All 0.3s ease-in-out"
      gap={5}
      alignItems="center"
      w="full"
    >
      <Image src={src} boxSize="20" />
      <Box textAlign="start" textStyle="bodyText">
        <Text color="softBlack" fontWeight="medium">
          {title}
        </Text>
        <Text color="#797979">{info}</Text>
      </Box>
    </HStack>
  );
}
