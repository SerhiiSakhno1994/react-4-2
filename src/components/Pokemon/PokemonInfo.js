import { useState, useEffect } from 'react';

import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import { FetchPokemon } from '../services/pokemon-api';

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idel');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');
    FetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idel') {
    return <div>Введіть імя покемона </div>;
  }
  if (status === 'pending') {
    return <PokemonPendingView />;
  }
  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
