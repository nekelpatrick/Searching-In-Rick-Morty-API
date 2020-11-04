import { Component } from "react";
import Character from "../character/Character";
import "./styles.css";
class CharacterList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="App-header">
        {list.map((character) => {
          return (
            <Character
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
            />
          );
        })}
      </div>
    );
  }
}

export default CharacterList;
