/* eslint-disable react/no-array-index-key */
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  FormControl,
  Grid,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import SkeletonLoading from '../../../../Components/SkeletonLoading';
import { ModalContext } from '../../../../contexts/modalContext/context/modalContext';
import { OrderContext } from '../../../../contexts/orderContext/Context/orderContext';
import useItemList from '../../../../hooks/useItemList';
import FormModal from '../formModal';
import Item from './item';

export default function ItemList() {
  const { data, isLoading, error } = useItemList();

  const { updateField, formData } = useContext(OrderContext);
  const { openFormModal } = useContext(ModalContext);

  if (isLoading) {
    return <SkeletonLoading />;
  }

  return (
    <Container maxW="container.xl" p={0} w={['sm', 'container.lg']}>
      <Grid
        justifyContent="space-around"
        templateColumns={['2fr 2fr', '3fr 2.7fr 1fr']}
        textStyle="listText"
        textAlign="center"
        color="#FFF"
        w="full"
        bg="#263238"
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
      <FormControl>
        <Flex
          border="3px solid #000"
          borderTop="none"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <CheckboxGroup value={[`${formData?.item?.stock}`]}>
            {data &&
              data.map((item, index) => {
                return (
                  <Box
                    key={item.stock}
                    bg={index % 2 === 0 ? '#CCC' : '#FFF'}
                    w="full"
                    onClick={openFormModal}
                  >
                    <Checkbox
                      value={`${item.stock}`}
                      borderRadius="none"
                      borderColor="black"
                      checked={formData.item?.product === item.product}
                      onChange={() => updateField('item', item)}
                      w="full"
                      py={2}
                      pl={10}
                    >
                      <Item
                        id={item.id}
                        key={index}
                        product={item.product}
                        cost={item.cost}
                        stock={item.stock}
                        unitPrice={item.unitPrice}
                      />
                    </Checkbox>
                  </Box>
                );
              })}
          </CheckboxGroup>
        </Flex>
      </FormControl>
      <FormModal />
    </Container>
  );
}
