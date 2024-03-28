import { useState } from 'react';

type UseShowText = () => {
  isShow: boolean;
  handleShowText: () => void;
  handleHiddenText: () => void;
};

export const useShowText: UseShowText = () => {
  const [isShow, setIsShow] = useState(true);

  const textIsShow = () => {
    setIsShow(true);
  };

  const textIsHidden = () => {
    setIsShow(false);
  };

  return { isShow, handleShowText: textIsShow, handleHiddenText: textIsHidden };
};
