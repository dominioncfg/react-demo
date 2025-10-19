import { useState } from 'react';

export interface useButtonCounterProps {
  initialCount?: number;
  step?: number;
}

export interface useButtonCounterValue {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useButtonCount = ({
  initialCount = 0,
  step = 1,
}: useButtonCounterProps): useButtonCounterValue => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return {
    count,
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};
