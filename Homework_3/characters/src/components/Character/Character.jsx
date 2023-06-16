import { Component } from "react";
import "./Character.scss";

export class Character extends Component {
  render() {
    const { character } = this.props;

    return (
      <div className="character">
        <h2>Character: {character.name}</h2>
        <p>Name: {character.name}</p>
        <p>Height: {character.height}</p>
        <p>Gender: {character.gender}</p>
        <p>Birth Year: {character.birth_year}</p>
      </div>
    );
  }
}
