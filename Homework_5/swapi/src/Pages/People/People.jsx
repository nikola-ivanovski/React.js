import { useEffect, useState } from "react";
import { PeopleCard } from "../../components/peopleCard/peopleCard";
import "./People.scss";

export const SwapiPeople = () => {
  const URL = "https://swapi.dev/api/people";
  const [people, setPeople] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  const fetchedPeople = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      console.log(result);
      setPeople(result.results);
      setNextPage(result.next);
      setPrevPage(result.previous);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleNextPage = async () => {
    try {
      const response = await fetch(nextPage);
      const result = await response.json();
      setPeople(result.results);
      setNextPage(result.next);
      setPrevPage(result.previous);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handlePreviousPage = async () => {
    try {
      const response = await fetch(prevPage);
      const result = await response.json();
      setPeople(result.results);
      setNextPage(result.next);
      setPrevPage(result.previous);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchedPeople();
  }, []);

  return (
    <div>
      <h2>Swapi People</h2>

      <div>
        {people.map((person) => (
          <PeopleCard key={person.name} people={person} />
        ))}
        <div>
          <button onClick={handlePreviousPage} disabled={!prevPage}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={!nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
