import { ChangeEvent, useState } from 'react';

type UseFeedback = () => {
  inputValue: string;
  feedbackList: string[];
  HandleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export const useFeedback: UseFeedback = () => {
  const [inputValue, setInputValue] = useState('');
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const HandleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return; //何もしない。早期リターン
    }
    setFeedbackList((prevState) => [...prevState, inputValue]);
    setInputValue('');
  };
  return { inputValue, feedbackList, HandleInputChange, handleSubmit };
};
