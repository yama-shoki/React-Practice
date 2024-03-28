import { useEffect, useState } from 'react';

export const QUOTES = [
  '人生に失敗がないと、人生を失敗する',
  '夢を見ることができれば、それは実現できる',
  '行動の起点は、すべて夢にある',
  '習慣は、第二の性格である',
  '唯一の背いっぱいは挑戦しなかったことである',
  '大好きなことに情熱のすべてを注ぎなさい',
  '他者と比較するのではなく、過去の自分と比較する',
  '祝福は苦悩の仮面をかぶって訪れる',
  '人生のほうはまだ、あなたに対する期待を捨てていないはずだ',
  '自分にはできると信じれば、あなたはもう道半ばまで来ている',
  '偉大な功績はどれも、かつては不可能だと考えられていた',
];

type UseQuotes = () => {
  currentQuote: string;
  randomQuotes: () => void;
};
export const useQuotes: UseQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  const randomQuotes = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);

    setCurrentQuote(QUOTES[randomIndex]);
  };
  useEffect(randomQuotes, []);
  return { currentQuote, randomQuotes };
};
