import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SingleCharacter.scss";

export const SingleCharacter = () => {
  const params = useParams();
  const id = params.id;
  const characterURL = `https://swapi.dev/api/people/${id}/`;
  const planetsURL = `https://swapi.dev/api/planets/${id}/`;
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const history = useNavigate();

  const fetchSingleCharacter = async () => {
    try {
      const response = await fetch(characterURL);
      const result = await response.json();
      console.log(result);
      setCharacter(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchCharacterHomeworld = async () => {
    try {
      const response = await fetch(planetsURL);
      const result = await response.json();
      console.log(result);
      setHomeworld(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchSingleCharacter();
    fetchCharacterHomeworld();
  }, []);

  return (
    <div>
      <h2>Single Character</h2>

      {character ? (
        <div>
          <p>{character.name}</p>
          <p>{character.height}</p>
          <p>{character.gender}</p>
          <p>{character.birth_year}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      {homeworld ? (
        <div>
          <p>{homeworld.name}</p>
          <p>{homeworld.diameter}</p>
          <p>{homeworld.climate}</p>
          <p>{homeworld.gravity}</p>
          <p>{homeworld.terrain}</p>
          <p>{homeworld.population}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}

      <button onClick={() => history(-1)}>Back</button>
    </div>
  );
};
