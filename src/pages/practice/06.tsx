import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useFeedback } from '@/hooks/useFeedback';

const Page: NextPage = () => {
  const { inputValue, feedbackList, HandleInputChange, handleSubmit } = useFeedback();
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="flex flex-col items-center">
        <textarea
          placeholder="フィードバックを入力して下さい"
          className=" border-4 border-blue-400 px-2 py-3 "
          value={inputValue}
          onChange={HandleInputChange}
        ></textarea>

        <div>
          <Button onClick={handleSubmit} label="送信する" variant="primary" className="mt-4 " />
        </div>
        <ul className="mt-4">
          {feedbackList.map((feedback, index) => (
            <li key={index}>{feedback}</li>
          ))}
        </ul>
        <div className="mt-5  text-4xl">
          <Link href="/">ホームへ戻る</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
