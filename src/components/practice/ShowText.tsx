import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { useShowText } from '@/hooks/useShowText';

export const ShowText = (): JSX.Element => {
  const { isShow, handleShowText: textIsShow, handleHiddenText: textIsHidden } = useShowText();
  return (
    <div className=" mx-auto mt-10 max-w-4xl">
      <div className=" flex justify-center ">
        <div>
          {/* 表示するテキスト */}
          {isShow && <h2 className=" mb-4  text-6xl">こんにちは</h2>}

          {/* 表示・非表示ボタン */}
          <div className=" flex justify-center gap-x-4">
            <Button label="表示" variant="primary" onClick={textIsShow} />
            <Button label="非表示" variant="primary" onClick={textIsHidden} />
          </div>

          {/* 表示・非表示のトグルボタン */}
          <div className=" mt-4 flex justify-center ">
            <Button
              label={!isShow ? '表示' : '非表示'}
              variant="primary"
              className=" text-2xl"
              onClick={isShow ? textIsHidden : textIsShow}
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
