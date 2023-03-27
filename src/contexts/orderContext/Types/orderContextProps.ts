import { ClientItemProps } from '../../../pages/newOrder/components/clientList/clientItem/Types/ClientItemProps';
import { ItemProps } from '../../../pages/newOrder/components/itemList/item/Types/ItemProps';

export type OrderContextProps = {
  updateField: (key: string, value: object) => void;
  formData: FormDataProps;
  cart: FormDataProps[];
  setCart: (cartInfo: FormDataProps[]) => void;
  orderList: FormDataProps[][];
  setOrderList: (orderList: FormDataProps[][]) => void;
  totalAverage: number;
  setTotalAverage: (totalAverage: number) => void;
  discountAverage: number;
  setDiscountAverage: (discountAverage: number) => void;
  profitMarginAverage: number;
  setProfitMarginAverage: (marginProfitAverage: number) => void;
  averages: AveragesProps[];
  setAverages: (
    averages:
      | AveragesProps[]
      | ((prevAverages: AveragesProps[]) => AveragesProps[])
  ) => void;
};

export type AveragesProps = {
  discountAverage: number;
  profitMarginAverage: number;
  totalAverage: number;
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
  discountAverage: number;
  profitMarginAverage: number;
  totalAverage: number;
};
