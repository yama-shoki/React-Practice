import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useCountUp } from '@/hooks/useCountUp';

export const CountUp = (): JSX.Element => {
  const { count, onClickCountUp, onClickCountDown } = useCountUp();
  return (
    <div className=" flex  flex-col items-center  ">
      <div className="flex flex-col">
        <h2 className=" mb-4 text-center text-6xl ">{count}</h2>

        <Button
          onClick={onClickCountUp}
          label="カウントアップ"
          variant="primary"
          className=" mb-4"
        />
        <Button onClick={onClickCountDown} label="カウントダウン" variant="primary" />
        <div className="mt-5 text-4xl">
          <Link href="/">ホームへ戻る</Link>
        </div>
      </div>
    </div>
  );
};
