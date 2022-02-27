import React, { useEffect, useState } from 'react';

export default function Pokemon() {
  const [data, setData] = useState();
  const poke = fetch('https://pokeapi.co/api/v2/pokemon/500/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data.sprites.back_default);
    })
    .catch((err) => console.log(err.message));

  useEffect(() => {
    {
      poke;
    }
  }, []);
  return (
    <div>
      <img src={data} alt="poke" />
    </div>
  );
}