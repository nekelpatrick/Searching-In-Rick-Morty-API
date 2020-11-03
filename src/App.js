import { Component } from "react";
import "./App.css";
import FilterInput from "./components/filter-input/FilterInput";
import CharacterList from "./components/character-list/CharacterList";

class App extends Component {
  state = { characterList: [] };

  searchByName = "";

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ characterList: res.results });
      });
  }
  inputHandler = (e) => {
    console.log(e.target.value);
    this.setState({ searchByName: e.target.value });
  };

  render() {
    const { characterList } = this.state;

    return (
      <div className="App">
        <div className="App-filter">
          <FilterInput inputHandler={this.inputHandler} />
        </div>
        <header className="App-header">
          <div></div>
          <CharacterList list={characterList} />
        </header>
      </div>
    );
  }
}
export default App;
