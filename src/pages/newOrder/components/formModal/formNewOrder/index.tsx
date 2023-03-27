import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ItemFormContext } from '../../../../../contexts/itemformContext/context/itemFormContext';
import { OrderContext } from '../../../../../contexts/orderContext/Context/orderContext';

export function FormNewOrder() {
  const { updateField, formData } = useContext(OrderContext);
  const {
    addition,
    discount,
    quantity,
    total,
    unitPrice,
    cost,
    setAddition,
    setDiscount,
    setQuantity,
    setTotal,
    setUnitPrice,
  } = useContext(ItemFormContext);

  const profit = +unitPrice - +cost;
  const profitMargin = Math.ceil((profit / +unitPrice) * 100);

  const formatCurrency = (val?: string) => `$${val}`;
  const formatPercent = (val: string) => `${val}%`;
  const parse = (val: string) => val.replace(/^\$/, '');
  const productUnitPrice = formData?.item?.unitPrice.toString() || '';

  useEffect(() => {
    setTotal(
      +unitPrice * +quantity +
        +unitPrice * +quantity * (+addition / 100) -
        +unitPrice * +quantity * (+discount / 100)
    );

    updateField('itemInfo', {
      profit,
      profitMargin,
      unitPrice,
      cost,
      addition,
      discount,
      quantity,
      total,
    });
  }, [
    addition,
    cost,
    discount,
    quantity,
    setTotal,
    total,
    unitPrice,
    updateField,
    productUnitPrice,
    setUnitPrice,
    profit,
    profitMargin,
  ]);

  return (
    <>
      <FormControl
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="12px"
        p="12px"
      >
        <FormLabel>Preço Unitário</FormLabel>
        <NumberInput
          value={formatCurrency(unitPrice)}
          onChange={(valueString) => setUnitPrice(parse(valueString))}
          min={formData?.item?.unitPrice}
          max={10000}
        >
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="12px"
        p="12px"
        isDisabled
      >
        <FormLabel>Custo</FormLabel>
        <NumberInput value={`R${formatCurrency(cost)}`} isDisabled>
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="12px"
        p="12px"
      >
        <FormLabel>Desconto(%)</FormLabel>

        <NumberInput
          value={formatPercent(discount)}
          defaultValue={0}
          onChange={(valueString) => setDiscount(parse(valueString))}
          max={100}
          min={0}
          clampValueOnBlur
        >
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="12px"
        p="12px"
      >
        <FormLabel>Acréscimo(%)</FormLabel>
        <NumberInput
          value={formatPercent(addition)}
          defaultValue={0}
          onChange={(valueString) => setAddition(parse(valueString))}
          max={100}
          min={0}
          clampValueOnBlur
        >
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="12px"
        p="12px"
      >
        <FormLabel>Quantidade</FormLabel>
        <NumberInput
          value={quantity}
          onChange={(valueString) => setQuantity(valueString)}
          max={formData.item?.stock}
          min={1}
          clampValueOnBlur
        >
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="12px"
        p="12px"
        isDisabled
      >
        <FormLabel>Valor total</FormLabel>
        <Input value={`R$${total},00`} type="text" />
      </FormControl>
    </>
  );
}
