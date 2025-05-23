import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

import Button from '@/components/common/parts/Button';

type PokemonTypes = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type Pokemon = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonTypes[];
  height: number;
  weight: number;
};

const Page: NextPage = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchPokemon = async () => {
    setError('');
    setPokemon(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      const data = (await response.json()) as Pokemon;
      setPokemon(data);
    } catch (error) {
      setError('ポケモンがみつかりません');
    }
  };

  return (
    <div className=" mx-auto mt-8 max-w-4xl ">
      <div className="flex justify-center">
        <div>
          {/* 入力フォーム */}
          <div>
            <input
              type="text"
              placeholder="ポケモンの名前を入力"
              onChange={handleSetQuery}
              value={query}
              className="rounded-md border-4 border-blue-400 p-3 outline-none "
            />
            {error && <p className="mt-4 text-base text-red-400">ポケモンがみつかりません</p>}
          </div>

          {/* ポケモンの情報 */}

          {pokemon && (
            <div className=" mt-4 text-center text-base ">
              <h3>{pokemon.name}</h3>
              <div className="flex justify-center">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <p>タイプ:{pokemon.types.map((pokemonType) => pokemonType.type.name).join(', ')}</p>
              <p>身長:{pokemon.height}</p>
              <p>重さ:{pokemon.weight}</p>
            </div>
          )}

          {/* 検索ボタン */}
          <div className=" mt-4 flex justify-center">
            <Button label="検索" variant="primary" onClick={fetchPokemon} />
          </div>
        </div>
      </div>

      <div className="mt-5  flex justify-center text-4xl">
        <Link href="/">ホームへ戻る</Link>
      </div>
    </div>
  );
};

export default Page;
