/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/prefer-default-export */
import { useContext, useMemo, useState } from 'react';
import { OrderContext } from '../orderContext/Context/orderContext';
import { ItemFormContext } from './context/itemFormContext';
import { ItemFormProviderProps } from './Types/ItemFormProviderProps';

export function ItemFormContextProvider({ children }: ItemFormProviderProps) {
  const { formData } = useContext(OrderContext);

  const [discount, setDiscount] = useState('0');
  const [addition, setAddition] = useState('0');
  const [quantity, setQuantity] = useState((1).toString() || '1');
  const [unitPrice, setUnitPrice] = useState('0');
  const [total, setTotal] = useState(0);
  const cost = formData?.item?.cost?.toString() || '0';

  const selectedData = useMemo(
    () => ({
      discount,
      addition,
      quantity,
      unitPrice,
      total,
      cost,
      setDiscount,
      setAddition,
      setQuantity,
      setUnitPrice,
      setTotal,
    }),
    [discount, addition, quantity, unitPrice, total, cost]
  );
  return (
    <ItemFormContext.Provider value={selectedData}>
      {children}
    </ItemFormContext.Provider>
  );
}
