import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
