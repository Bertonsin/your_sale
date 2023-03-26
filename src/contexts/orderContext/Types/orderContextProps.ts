import { ClientItemProps } from '../../../pages/newOrder/components/clientList/clientItem/Types/ClientItemProps';
import { ItemProps } from '../../../pages/newOrder/components/itemList/item/Types/ItemProps';

export type OrderContextProps = {
  updateField: (key: string, value: object) => void;
  formData: FormDataProps;
  cart: FormDataProps[];
  setCart: (cartInfo: FormDataProps[]) => void;
};

export type FormDataProps = {
  client: ClientItemProps | null;
  item: ItemProps | null;
  itemInfo: ItemInfo | null;
};

export type StepsProps = {
  stepName: string;
  stepPosition: number;
};

export type ItemInfo = {
  profit: string;
  profitMargin: string;
  addition: string;
  discount: string;
  quantity: string;
  unitPrice: string;
  cost: string;
  total: number;
};
