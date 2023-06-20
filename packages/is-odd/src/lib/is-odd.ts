import { isEven } from '@verchjames/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
