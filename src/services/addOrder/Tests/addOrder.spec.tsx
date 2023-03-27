import { describe } from 'vitest';
import { getOrders } from '..';

describe('The addOrder', () => {
  it('should save data in local storage', () => {
    afterEach(() => {
      localStorage.clear();
    });

    const order = [[{ client: {}, item: {}, itemInfo: {} }]];

    localStorage.setItem('allData', JSON.stringify(order));

    expect(getOrders()).toStrictEqual(order);
  });
});
