import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useQuotes } from '@/hooks/useQuotes';

const Page: NextPage = () => {
  const { currentQuote, randomQuotes } = useQuotes();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className=" flex flex-col items-center">
        <div className="mb-8 text-3xl">{currentQuote}</div>
        <div>
          <Button onClick={randomQuotes} label="次の名言" variant="primary" className="text-3xl" />
        </div>
        <div className="mt-7 text-4xl">
          <Link href="/">ホームへ戻る</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
