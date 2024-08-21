import React, { useEffect, useState } from 'react';
import { callApi } from "./call-api";
import HeroItem from "./hero-item";

type Hero = {
  id: number;
  name: string;
  available: boolean
}

function fetchHeroes() {
  return callApi<Hero[]>('heroes')
    .then(heroesList => heroesList)
    .catch(error => {
      console.error("Error fetching heroes:", error);
      return [];
    });
};

function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    fetchHeroes().then(heroesList => {
      setHeroes(heroesList);
    });
  }, []);

  const toggleAvailability = (id: number) => {
    setHeroes(prevHeroes =>
      prevHeroes.map(hero =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  }

  return (
    <>
      <h2>Heroes</h2>
      <ul>
        {heroes.map(hero => (
          <HeroItem key={hero.id} {...hero} onToggleAvailability={toggleAvailability} />
        ))}
      </ul>
    </>
  );
}

export default HeroesList;
