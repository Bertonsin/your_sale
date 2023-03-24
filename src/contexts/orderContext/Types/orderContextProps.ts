import { ItemProps } from '../../../pages/newOrder/components/itemList/item/Types/ItemProps';
import { ClientItemProps } from '../../../pages/newOrder/components/clientList/clientItem/Types/ClientItemProps';

export type OrderContextProps = {
  client?: ClientItemProps;
  setClient: (client?: ClientItemProps) => void;
  item?: ItemProps;
  setItem: (item?: ItemProps) => void;
  openModal: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
};

export type StepsProps = {
  stepName: string;
  stepPosition: number;
};
