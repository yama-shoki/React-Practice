import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

import Button from '@/components/common/parts/Button';

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

const Page: NextPage = () => {
  const [id, setId] = useState(1);

  const nextCharacterId = () => {
    setId((prevId) => prevId + 1);
  };

  const url = `https://swapi.dev/api/people/${id}/`;

  const fetchCharacter = async () => {
    const response = await fetch(url);
    const data = (await response.json()) as Character;
    return data;
  };

  const { data: character, isLoading } = useSWR(url, fetchCharacter);

  // データのローディング中や`character`が無い場合の処理
  if (isLoading || !character) {
    return <p className=" flex flex-col items-center text-center text-2xl">Loading中...</p>;
  }

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
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
        </div>
      </div>
      <div className="mt-5 flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
