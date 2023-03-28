/* eslint-disable react/no-array-index-key */
import { Grid, HStack, Skeleton, Stack, Text } from '@chakra-ui/react';
import { SkeletonLoadingProps } from './Types/SkeletonLoadingProps';

export default function SkeletonLoading({
  SkeletonListType,
}: SkeletonLoadingProps) {
  if (SkeletonListType === 'client') {
    return (
      <Grid
        justifyContent="center"
        textAlign="center"
        color="white"
        p={5}
        borderRadius="30px 30px 0px 0px"
      >
        <Grid
          justifyContent="space-around"
          templateColumns={['2fr 2fr', '1.5fr repeat(3,1fr)']}
          textStyle="listText"
          textAlign="center"
          color="white"
          w="full"
          bg="softBlack"
          p={5}
          borderRadius="30px 30px 0px 0px"
        >
          <Text>Nome</Text>
          <Text>CNPJ</Text>
          <Text>Estado</Text>
          <Text>Cidade</Text>
        </Grid>

        <Stack w="container.lg">
          {Array(9)
            .fill('')
            .map((_, index) => {
              return <Skeleton height="30px" key={index} />;
            })}
        </Stack>
      </Grid>
    );
  }
  return (
    <Grid
      justifyContent="center"
      textAlign="center"
      color="#FFF"
      p={5}
      borderRadius="30px 30px 0px 0px"
    >
      <Grid
        justifyContent="space-around"
        templateColumns={['2fr 2fr', '3fr 2.7fr 1fr']}
        textStyle="listText"
        textAlign="center"
        color="white"
        w="full"
        bg="#softBlack"
        gap={[0, 20]}
        p={[2, 5]}
        borderRadius="30px 30px 0px 0px"
      >
        <Text>Produto</Text>
        <HStack w="full" justifyContent="space-around">
          <Text>Custo</Text>
          <Text>Estoque</Text>
        </HStack>
        <Text>Custo Unitário</Text>
      </Grid>

      <Stack w="container.lg">
        {Array(9)
          .fill('')
          .map((_, index) => {
            return <Skeleton height="30px" key={index} />;
          })}
      </Stack>
    </Grid>
  );
}
