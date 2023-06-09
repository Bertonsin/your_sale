import { Grid, HStack, Text } from '@chakra-ui/react';
import { ItemProps } from './Types/ItemProps';

export default function Item({ cost, product, stock, unitPrice }: ItemProps) {
  return (
    <Grid
      templateColumns={['2fr 2fr', '3.5fr 3fr 1fr']}
      color="#212326"
      gap={20}
      ml={[0, 10]}
      textStyle="listText"
      w="full"
    >
      <Text fontWeight="600" color="#softBlack">
        {product}
      </Text>
      <HStack
        w="full"
        justifyContent="space-around"
        textAlign="center"
        spacing={10}
        ml="-10"
      >
        <Text>R${cost},00</Text>
        <Text>{stock}</Text>
      </HStack>
      <Text>R${unitPrice},00</Text>
    </Grid>
  );
}
