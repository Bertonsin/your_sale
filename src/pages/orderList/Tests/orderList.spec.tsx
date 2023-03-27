import { vi } from 'vitest';
import { getOrders } from '../../../services/addOrder';

describe('The order list', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  afterEach(() => {
    getItemSpy.mockClear();
    localStorage.clear();
  });
  it('should get data from localStorage', () => {
    const order = [[{ client: {}, item: {}, itemInfo: {} }]];

    localStorage.setItem('allData', JSON.stringify(order));

    expect(getOrders()).toStrictEqual(order);
    expect(getItemSpy).toBeCalledWith('allData');
  });
});
