import { NextPage } from 'next';
import Link from 'next/link';

import { useChangeText } from '@/hooks/useChangeText';

const Page: NextPage = () => {
  const { inputText, changeInputText } = useChangeText();
  return (
    <div className=" mx-auto mt-10 max-w-4xl ">
      <div className=" flex justify-center ">
        <div>
          <h2 className=" mb-4 text-4xl ">{inputText}</h2>
          <div className="flex justify-center">
            <input
              type="text"
              className=" rounded-lg border-4 border-blue-400 px-2 py-4"
              onChange={changeInputText}
            />
          </div>

          <div className="mt-5 flex justify-center text-4xl">
            <Link href="/">ホームへ戻る</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
