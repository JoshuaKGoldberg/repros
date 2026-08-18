import { getValue } from './index.js';

export function useValueUnawaited(): void {
  getValue();
}
