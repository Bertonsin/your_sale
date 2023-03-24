import { createContext } from 'react';
import { OrderContextProps } from '../Types/orderContextProps';

export const OrderContext = createContext<OrderContextProps>(
  {} as OrderContextProps
);
