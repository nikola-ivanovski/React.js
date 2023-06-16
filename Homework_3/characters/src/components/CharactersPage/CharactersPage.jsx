import { Component } from "react";
import { Character } from "../Character/Character";
import "./CharactersPage.scss";

export class CharactersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  swapiFetch() {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ characters: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.swapiFetch();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>Star Wars People</h1>
        {characters.map((character) => (
          <Character key={character.name} character={character} />
        ))}
      </div>
    );
  }
}
