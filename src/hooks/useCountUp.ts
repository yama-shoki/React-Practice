import { useState } from 'react';

type UseCountUp = () => {
  count: number;
  onClickCountUp: () => void;
  onClickCountDown: () => void;
};

export const useCountUp: UseCountUp = () => {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onClickCountDown = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return { count, onClickCountUp, onClickCountDown };
};
