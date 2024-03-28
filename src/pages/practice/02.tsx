import { NextPage } from 'next';

import { CountUp } from '@/components/practice/CountUp';

const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-10 max-w-4xl ">
      <CountUp />
    </div>
  );
};

export default Page;
