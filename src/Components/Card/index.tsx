import { Stack, Image, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CardProps } from './Types/cardProps';

export default function Card({ src, title, info, to }: CardProps) {
  return (
    <Link to={to} style={{ width: '100%' }}>
      <Stack
        _hover={{ boxShadow: '4px 4px 8px 2px rgba(0,0,0,0.2)' }}
        transition="All 0.3s ease-in-out"
        gap={5}
        p={3}
        backgroundColor="#FFFFFF"
        borderRadius={68}
        borderWidth={1}
        borderColor="#DADADA"
        alignItems="center"
        flexDirection="row"
        width="100%"
      >
        <Image src={src} boxSize="20" />
        <Box textAlign="start">
          <Text color="#263238" fontWeight="medium">
            {title}
          </Text>
          <Text color="#797979">{info}</Text>
        </Box>
      </Stack>
    </Link>
  );
}
