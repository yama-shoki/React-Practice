import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useTimer } from '@/hooks/useTimer';

const Page: NextPage = () => {
  const { handleClearCount, handleClickToggle, seconds, isActive } = useTimer();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className=" flex justify-center">
        <h3 className="text-center text-2xl ">時間:{seconds}秒</h3>
      </div>
      <div className=" mt-4 flex justify-center gap-x-2">
        <Button label={!isActive ? '開始' : '停止'} variant="primary" onClick={handleClickToggle} />
        <Button label="リセット" variant="secondary" onClick={handleClearCount} />
      </div>

      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
