import "./MoviesList.css";

const movies = [
  "John Wick",
  "Harry Potter",
  "Invincible",
  "Inception",
  "Who am I",
  "Top Gun",
  "Movie 7",
  "Movie 8",
  "Movie 9",
  "Movie 10",
];
const welcomeMessage = (message) => {
  return message;
};

const Movies = () => {
  return (
    <div className="container">
      <h3>{welcomeMessage("Hi User, check out these movies!")}</h3>
      <ul className="listContainer">
        {movies.map((movie) => (
          <li key={movie} className="item">
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
