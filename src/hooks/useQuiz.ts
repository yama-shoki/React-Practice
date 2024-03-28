import { useState } from 'react';

export const QUESTION = ['Reactとはどのようなものですか？'];
export const CHOICE_LIST = ['ライブラリ', 'フレームワーク', '言語', 'データベース'];

export const CORRECT_ANSWER = 'ライブラリ';

type useQuiz = () => {
  result: string;
  handleChoice: (choice: string) => void;
  handleSubmit: () => void;
  userChoice: string;
};

export const useQuiz: useQuiz = () => {
  const [userChoice, setUserChoice] = useState('second');
  const [result, setResult] = useState('');
  const handleChoice = (choice: string) => {
    setUserChoice(choice);
  };

  const handleSubmit = () => {
    if (userChoice === CORRECT_ANSWER) {
      setResult('正解！');
    } else {
      setResult('不正解');
    }
  };

  return {
    result,
    handleChoice,
    handleSubmit,
    userChoice,
  };
};
