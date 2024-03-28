import { useEffect, useState } from 'react';

type UseTimer = () => {
  seconds: number;
  isActive: boolean;
  handleClearCount: () => void;
  handleClickToggle: () => void;
};
export const useTimer: UseTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSeconds((prevState) => prevState + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleClearCount = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const handleClickToggle = () => {
    setIsActive((prevState) => !prevState);
  };
  return {
    seconds,
    handleClearCount,
    handleClickToggle,
    isActive,
  };
};
