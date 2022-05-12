import { useState } from 'react';

const styles = { form: { marginBottom: 20 } };

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      alert('Введіть ім"я покемона ');

      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        placeholder="Pokemon Name"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">Найти</button>
    </form>
  );
}
