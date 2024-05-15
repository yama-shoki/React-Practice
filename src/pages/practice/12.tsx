<<<<<<< HEAD
import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
=======
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/parts/Button';
import { usePokemon } from '@/hooks/usePokemon';

const Page: NextPage = () => {
  const { query, handleSetQuery, error, fetchPokemon, pokemon } = usePokemon();

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className=" flex justify-center">
        <div>
          {/* 入力フォーム */}
          <div>
            <input
              type="text"
              placeholder="ポケモンの名前を入力"
              onChange={handleSetQuery}
              value={query}
              className=" rounded-md border-4 border-blue-300 px-2 py-3 outline-none"
            />
            {error && <p className=" mt-4 text-base text-red-400 ">{error}</p>}
          </div>

          {/* ポケモンの情報 */}
          {pokemon && (
            <div className=" mt-4 text-center text-base">
              <h3>{pokemon.name}</h3>
              <div className=" flex justify-center">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <p>タイプ:{pokemon.types.map((pokemonType) => pokemonType.type.name).join(', ')}</p>
              <p>身長：{pokemon.height}</p>
              <p>重さ：{pokemon.weight}</p>
            </div>
          )}
          {/* 検索ボタン */}
          <div className=" mt-4 flex justify-center">
            <Button label="検索" variant="primary" onClick={fetchPokemon} />
          </div>
        </div>
      </div>
>>>>>>> ab936b8 (first commit)
      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
