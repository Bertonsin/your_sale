import { createContext } from 'react';
import { ModalContextProps } from './Types/ModalContextProps';

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);
