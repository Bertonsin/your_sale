import { HStack, Image, Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CardProps } from './Types/cardProps';

export default function Card({ src, title, info, to }: CardProps) {
  return (
    <Link
      to={to}
      style={{ width: '100%', height: '100%', marginRight: '10em' }}
    >
      <Button
        aria-label="card"
        w="full"
        h="full"
        p={3}
        borderWidth={1}
        borderRadius={68}
        borderColor="#DADADA"
        _hover={{ boxShadow: '4px 4px 8px 2px rgba(0,0,0,0.2)' }}
        bg="#FFFFFF"
      >
        <HStack
          transition="All 0.3s ease-in-out"
          gap={5}
          alignItems="center"
          w="full"
        >
          <Image src={src} boxSize="20" />
          <Box textAlign="start" textStyle="bodyText">
            <Text color="#263238" fontWeight="medium">
              {title}
            </Text>
            <Text color="#797979">{info}</Text>
          </Box>
        </HStack>
      </Button>
    </Link>
  );
}
