import { NextPage } from 'next';

import { ShowText } from '@/components/practice/ShowText';

const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-10 max-w-4xl ">
      <ShowText />
    </div>
  );
};

export default Page;
