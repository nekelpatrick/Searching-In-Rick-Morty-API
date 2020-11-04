import { Component } from "react";
// import CharacterList from "../character-list/CharacterList";
import "./styles.css";

class Form extends Component {
  state = { characterList: [], searchByName: "" };

  render() {
    return (
      <>
        <form onSubmit={this.props.clickHandler} className="filter-input">
          <input type="text" onChange={this.props.inputHandler} />
          <h3> Atualmente existem {this.props.counter} personagens!</h3>
          <button className="procurar-button" type="submit">
            Procurar
          </button>
        </form>
      </>
    );
  }
}

export default Form;
