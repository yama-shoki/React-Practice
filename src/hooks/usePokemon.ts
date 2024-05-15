import { ChangeEvent, useState } from 'react';

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

type UsePokemon = () => {
  error: string;
  pokemon: Pokemon | null;
  handleSetQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchPokemon: () => Promise<void>;
  query: string;
};
export const usePokemon: UsePokemon = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchPokemon = async () => {
    setPokemon(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      const data = (await response.json()) as Pokemon;
      setPokemon(data);
      setError('');
    } catch (error) {
      setError('ポケモンが見つかりません');
    }
  };

  return { error, pokemon, handleSetQuery, fetchPokemon, query };
};
