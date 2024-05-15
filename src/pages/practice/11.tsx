import { NextPage } from 'next';
import Link from 'next/link';
<<<<<<< HEAD

const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="mt-5  flex justify-center text-4xl">
=======
// useRouterをインポート

import Button from '@/components/common/parts/Button';
import { useStarWars } from '@/hooks/useStarWars';

const Page: NextPage = () => {
  const { character, nextCharacterId, router } = useStarWars();
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="flex justify-center">
        <div>
          {character ? (
            <div className="text-center text-2xl">
              <h2>{character.name}</h2>
              <p>身長:{character.height}</p>
              <p>体重:{character.mass}</p>
              <p>髪の色:{character.hair_color}</p>
              <p>肌の色:{character.skin_color}</p>
              <p>目の色:{character.eye_color}</p>
              <p>生年月日:{character.birth_year}</p>
              <p>性別:{character.gender}</p>
              <div className="flex justify-center">
                <Button
                  onClick={nextCharacterId}
                  label="次のキャラクター"
                  variant="primary"
                  className="mt-4"
                />
              </div>
            </div>
          ) : (
            <div className=" flex flex-col items-center text-center text-2xl">
              <p>Loading中...</p>
              <Button
                onClick={() => router.reload()} // router.reloadを使って再読み込み
                label="再読み込み"
                variant="primary"
                className="mt-4"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-center text-4xl">
>>>>>>> ab936b8 (first commit)
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
