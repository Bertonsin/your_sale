/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/prefer-default-export */
import { useMemo, useState } from 'react';
import { OrderContext } from './Context/orderContext';
import { AveragesProps, FormDataProps } from './Types/orderContextProps';
import { OrderContextProviderProps } from './Types/orderContextProviderProps';

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const formDataTemplate: FormDataProps = {
    client: null,
    item: null,
    itemInfo: null,
  };
  const [formData, setFormData] = useState<FormDataProps>(formDataTemplate);
  const [cart, setCart] = useState<FormDataProps[]>([]);
  const [orderList, setOrderList] = useState<FormDataProps[][]>([[]]);
  const [totalAverage, setTotalAverage] = useState(0);
  const [discountAverage, setDiscountAverage] = useState(0);
  const [profitMarginAverage, setProfitMarginAverage] = useState(0);
  const [averages, setAverages] = useState<AveragesProps[]>([]);

  const updateField = (key: string, value: object) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const selectedData = useMemo(
    () => ({
      updateField,
      formData,
      cart,
      setCart,
      orderList,
      setOrderList,
      totalAverage,
      discountAverage,
      profitMarginAverage,
      setTotalAverage,
      setDiscountAverage,
      setProfitMarginAverage,
      averages,
      setAverages,
    }),
    [
      formData,
      cart,
      orderList,
      totalAverage,
      discountAverage,
      profitMarginAverage,
      averages,
    ]
  );
  return (
    <OrderContext.Provider value={selectedData}>
      {children}
    </OrderContext.Provider>
  );
}
