import { useEffect, useState } from "react";
import { FilmsCard } from "../../components/filmsCard/filmsCard";
import "./Home.scss";

export const Home = () => {
  const URL = "https://swapi.dev/api/films/";
  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      console.log(result);
      setFilms(result.results);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      <hr />
      <br />
      <div>
        {films.map((film) => (
          <FilmsCard key={film.title} films={film} />
        ))}
      </div>
    </div>
  );
};
