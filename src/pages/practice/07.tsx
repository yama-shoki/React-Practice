import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { CHOICE_LIST, QUESTION, useQuiz } from '@/hooks/useQuiz';

const Page: NextPage = () => {
  const { result, handleChoice, handleSubmit, userChoice } = useQuiz();
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="flex justify-center">
        <div>
          <h3 className=" text-2xl">{QUESTION}</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            {/* 選択肢を表示 */}
            {CHOICE_LIST.map((choice, index) => (
              <Button
                variant={userChoice === choice ? 'primary' : 'secondary'}
                label={choice}
                key={index}
                onClick={() => handleChoice(choice)}
              />
            ))}
          </div>
          <div className=" flex justify-center">{result}</div>
          <div className="mt-4 flex justify-center">
            <Button label="送信" variant="primary" onClick={handleSubmit} />
          </div>
          <div className="mt-5  flex justify-center text-4xl">
            <Link href="/">ホームへ戻る</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
