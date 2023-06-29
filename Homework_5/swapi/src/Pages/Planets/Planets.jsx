import { useState, useEffect } from "react";
import "./Planets.scss";

export const SwapiPlanets = () => {
  const URL = "https://swapi.dev/api/planets/";
  const [planets, setPlanets] = useState([]);

  const fetchedPlanets = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();

      setPlanets(result.results);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchedPlanets();
  }, []);

  return (
    <div>
      <h2>Swapi Planets</h2>
      {planets.map((planet) => (
        <div key={planet.name}>
          <h3>{planet.name}</h3>

          <p>Diameter: {planet.diameter}</p>
          <p>Climate: {planet.climate}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
        </div>
      ))}
    </div>
  );
};
