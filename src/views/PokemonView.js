import { useState } from 'react';

import PokemonForm from '../components/Pokemon/PokemonForm';
import PokemonInfo from '../components/Pokemon/PokemonInfo';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  // const handeleFormSubmit = pokemonName => {
  //   setPokemonName(pokemonName);
  // };

  return (
    <div style={{ maxWidth: 1170, margin: '0 auto', pagging: 20 }}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}
