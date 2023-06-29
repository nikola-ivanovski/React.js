import { Link } from "react-router-dom";
import "./peopleCard.scss";

export const PeopleCard = ({ people }) => {
  return (
    <div>
      <h2>{people.name}</h2>
      <div>
        <p>Height: {people.height}</p>
        <p>Gender: {people.gender}</p>
        <p>Birth Year: {people.birth_year}</p>
        <Link to={`/character/${people.url.split("/")[5]}`}>View Details</Link>
      </div>
    </div>
  );
};
