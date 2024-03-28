import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useChangeBgColor } from '@/hooks/useChangeBgColor';

const COLORS = ['lightblue', 'lightgreen', 'lightpink', 'lavender', 'wheat'];

const Page: NextPage = () => {
  const { currentColorIndex, ChangeColor } = useChangeBgColor();
  return (
    <div className="h-screen pt-8" style={{ backgroundColor: COLORS[currentColorIndex] }}>
      <div className=" flex justify-center">
        <Button label="色を変更" variant="primary" onClick={ChangeColor} />
      </div>

      <div className="mt-5 flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
