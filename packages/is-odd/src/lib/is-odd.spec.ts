import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('should work', () => {
    expect(isOdd(1)).toEqual(true);
    expect(isOdd(2)).toEqual(false);
  });
});
