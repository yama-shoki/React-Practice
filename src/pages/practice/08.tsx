import { NextPage } from 'next';
import Link from 'next/link';

import { useDigitalClock } from '@/hooks/useDigitalClock';

const Page: NextPage = () => {
  const { currentTimes } = useDigitalClock();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div>
        <h3 className="flex justify-center text-4xl">{currentTimes.toLocaleTimeString()}</h3>
      </div>
      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
