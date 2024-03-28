import { useState } from 'react';

const COLORS = ['lightblue', 'lightgreen', 'lightpink', 'lavender', 'wheat'];

type UseChangeBgColor = () => {
  currentColorIndex: number;
  ChangeColor: () => void;
};

export const useChangeBgColor: UseChangeBgColor = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const ChangeColor = () => {
    setCurrentColorIndex((prevState) => (prevState + 1) % COLORS.length);
  };
  return { currentColorIndex, ChangeColor };
};
