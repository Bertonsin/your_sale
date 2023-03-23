import { Checkbox, Flex, Grid, Text } from '@chakra-ui/react';
import { ClientItemProps } from './Types/clientItemProps';

export default function ClientItem({
  backgroundColor,
  city,
  cnpj,
  name,
  state,
}: ClientItemProps) {
  return (
    <Checkbox w="full" py={2} px={10} bg={backgroundColor}>
      <Grid
        templateColumns=" 2.5fr 1fr 1.9fr 1.6fr"
        justifyContent="center"
        alignItems="center"
        color="#212326"
        alignSelf="center"
        gap={10}
        textStyle="listText"
      >
        <Text fontWeight="600" color="#263238">
          {name}
        </Text>
        <Text>{cnpj}</Text>
        <Text>{state}</Text>
        <Text>{city}</Text>
      </Grid>
    </Checkbox>
  );
}
