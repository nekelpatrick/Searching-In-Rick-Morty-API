import { Component } from "react";
import Character from "../character/Character";

class CharacterList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((character) => {
          return <Character name={character.name} />;
        })}
      </div>
    );
  }
}

export default CharacterList;
