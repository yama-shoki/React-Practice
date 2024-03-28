import { ChangeEvent, useState } from 'react';

type UseChangeText = () => {
  inputText: string;
  changeInputText: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useChangeText: UseChangeText = () => {
  const [inputText, setInputText] = useState('');

  const changeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return { inputText, changeInputText };
};
