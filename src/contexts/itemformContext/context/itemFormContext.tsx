import { createContext } from 'react';
import { ItemFormContextProps } from './Types/ItemFormContextProps';

export const ItemFormContext = createContext<ItemFormContextProps>(
  {} as ItemFormContextProps
);
