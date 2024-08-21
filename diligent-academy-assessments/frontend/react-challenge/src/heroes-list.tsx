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
    .then(heroesList => heroesList);
};

function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHeroes()
      .catch(error => {
        console.error("Error fetching heroes:", error);
        setError('Failed to fetch heroes');
        return [];
      })
      .then(heroesList => {
      setHeroes(heroesList);
      setLoading(false);
    });
  }, []);

  const toggleAvailability = (id: number) => {
    setHeroes(prevHeroes =>
      prevHeroes.map(hero =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
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
