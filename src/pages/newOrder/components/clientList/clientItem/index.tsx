import { Grid, Text } from '@chakra-ui/react';
import { ClientItemProps } from './Types/ClientItemProps';

export default function ClientItem({
  city,
  cnpj,
  name,
  state,
}: ClientItemProps) {
  return (
    <Grid
      templateColumns="1.6fr 1.2fr 1.25fr 1.4fr"
      color="#212326"
      gap={10}
      ml={10}
      textStyle="listText"
      w="full"
    >
      <Text fontWeight="600" color="#263238">
        {name}
      </Text>
      <Text>{cnpj}</Text>
      <Text>{state}</Text>
      <Text>{city}</Text>
    </Grid>
  );
}
