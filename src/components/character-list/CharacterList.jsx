import { Component } from "react";
import Character from "../character/Character";

class CharacterList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((character) => {
          return (
            <Character
              key={character.id}
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
