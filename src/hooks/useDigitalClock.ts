import { useEffect, useState } from 'react';

type UseDigitalClock = () => {
  currentTimes: Date;
};
export const useDigitalClock: UseDigitalClock = () => {
  const [currentTimes, setCurrentTimes] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTimes(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return { currentTimes };
};
