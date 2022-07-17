import type { SyntheticEvent } from 'react';

export const callHandlers = <E extends SyntheticEvent>(
  ...fns: (((event: E) => void) | undefined)[]
) => {
  return function handler(event: E) {
    fns.forEach(fn => {
      fn?.(event);
    });
  };
};
