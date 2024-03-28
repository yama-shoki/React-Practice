import { NextPage } from 'next';
import Link from 'next/link';

import ThreeBoxContent from '@/components/practice/ThreeBoxContent';

const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-10 flex max-w-4xl flex-col items-center">
      <ThreeBoxContent
        title1="タイトル1"
        content1="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
        title2="タイトル1"
        content2="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
        title3="タイトル1"
        content3="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
      />
      <div className="mt-5 text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
