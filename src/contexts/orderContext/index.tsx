/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/prefer-default-export */
import { useMemo, useState } from 'react';
import { OrderContext } from './Context/orderContext';
import { FormDataProps } from './Types/orderContextProps';
import { OrderContextProviderProps } from './Types/orderContextProviderProps';

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const formDataTemplate: FormDataProps = {
    client: null,
    item: null,
    itemInfo: null,
  };
  const [formData, setFormData] = useState<FormDataProps>(formDataTemplate);
  const [cart, setCart] = useState<FormDataProps[]>([]);

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
    }),
    [formData, cart]
  );
  return (
    <OrderContext.Provider value={selectedData}>
      {children}
    </OrderContext.Provider>
  );
}
