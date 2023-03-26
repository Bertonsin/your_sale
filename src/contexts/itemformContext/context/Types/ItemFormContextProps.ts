export type ItemFormContextProps = {
  addition: string;
  cost: string;
  discount: string;
  quantity: string;
  total: number;
  unitPrice: string;
  setAddition: (addition: string) => void;
  setDiscount: (discount: string) => void;
  setQuantity: (quantity: string) => void;
  setUnitPrice: (unitPrice: string) => void;
  setTotal: (total: number) => void;
};
