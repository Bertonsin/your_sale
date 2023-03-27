import { FormDataProps } from '../../contexts/orderContext/Types/orderContextProps';

export function getOrders() {
  return JSON.parse(localStorage.getItem('allData') || '[]');
}

export function addOrder(order: FormDataProps[] | null) {
  const orders = getOrders();

  orders.push(order);

  localStorage.setItem('allData', JSON.stringify(orders));
}
